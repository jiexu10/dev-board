class Firebase::Github::PullRequestSerializer < Firebase::Github::Serializer
  def params
    params = super

    pull_request_params = {
      id: response_body['pull_request']['id'],
      title: response_body['pull_request']['title'],
      state: response_body['pull_request']['state'],
      merged: response_body['pull_request']['merged'],
      comments: response_body['pull_request']['comments']
      body: response_body['pull_request']['body']
    }

    params.merge(pull_request_params)
  end
end
