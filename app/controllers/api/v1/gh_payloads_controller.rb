class Api::V1::GhPayloadsController < ApplicationController
  def payload
    # read the payload coming in and validate the signature, then push to firebase if appropriate
    request.body.rewind
    payload_body = request.body.read
    verify_signature(payload_body)
    @push = JSON.parse(payload_body)

    push_payload_to_firebase

    return head(:ok)
  end

  private

  def push_payload_to_firebase
    return unless request.env['HTTP_X_GITHUB_EVENT'] == 'pull_request'

    # if event already exists, update it, otherwise create a new entry based on the payload
    firebase = Firebase::Client.new(ENV['FIREBASE_URL'])
    serialized_params = Firebase::Github::PullRequestSerializer.new(@push).params
    existing_event = firebase.get('gh_events', { orderBy: '"id"', equalTo: serialized_params[:id] }).body
    if existing_event.keys.any?
      firebase.update("gh_events/#{existing_event.keys.first}", serialized_params)
    else
      firebase.push('gh_events', serialized_params)
    end
  end

  def verify_signature(payload_body)
    # verify that secret tokens match, see https://developer.github.com/webhooks/securing/
    signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['GH_SECRET_TOKEN'], payload_body)
    return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
  end
end
