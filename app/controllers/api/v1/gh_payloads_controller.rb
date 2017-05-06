class Api::V1::GhPayloadsController < ApplicationController
  def payload
    request.body.rewind
    payload_body = request.body.read
    verify_signature(payload_body)
    push = JSON.parse(payload_body)

    firebase = Firebase::Client.new(ENV['FIREBASE_URL'])
    if request.env['HTTP_X_GITHUB_EVENT'] == 'pull_request'
      serialized_params = Firebase::Github::PullRequestSerializer.new(push).params
      existing_event = firebase.get('gh_events', id: serialized_params[:id])
      if existing_event.present?
        firebase.update('gh_events', serialized_params)
      else
        firebase.push('gh_events', serialized_params)
      end
    end

    return head(:ok)
  end

  private

  def verify_signature(payload_body)
    signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['GH_SECRET_TOKEN'], payload_body)
    return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
  end
end
