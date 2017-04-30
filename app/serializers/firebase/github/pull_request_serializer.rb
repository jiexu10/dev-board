class Firebase::Github::PullRequestSerializer < Firebase::Github::Serializer
  def params
    params = super

    pull_request_params = {
      title: response_body['pull_request']['title']
    }

    params.merge(pull_request_params)
  end
end
