class Firebase::Github::PullRequestSerializer < Firebase::Github::Serializer
  def params
    params = super

    pull_request_params = {
      title: response_body['pull_request']['title'],
      merge: response_body['pull_request']['merge'],
      mergeable: response_body['pull_request']['mergeable']
    }

    params.merge(pull_request_params)
  end
end
