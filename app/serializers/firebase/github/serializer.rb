class Firebase::Github::Serializer
  attr_reader :response_body

  def initialize(json_response_body)
    @response_body = json_response_body
  end

  def params
    {
      action: response_body['action']
    }
  end
end
