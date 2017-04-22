class Api::V1::CirclePayloadsController < ApplicationController
  def payload
    payload_body = request.body.read
    push = JSON.parse(payload_body)
    "I got some JSON: #{push.inspect}"

    return head(:ok)
  end
end
