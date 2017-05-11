require 'rails_helper'

RSpec.describe Api::V1::GhPayloadsController, type: :controller do
  describe "POST payloads" do
    it "accepts a payload" do
      allow_any_instance_of(Api::V1::GhPayloadsController).to receive(:verify_signature).and_return(true)
      post :payload, { 'some_key' => 'hi' }.to_json

      expect(response).to be_success
    end
  end
end
