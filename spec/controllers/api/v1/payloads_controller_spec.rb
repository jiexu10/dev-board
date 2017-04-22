require 'rails_helper'

RSpec.describe Api::V1::GhPayloadsController, type: :controller do
  describe "POST payloads" do
    it "return JSON with all data" do
      post :payloads, { some_key: 'hi' }
      expect(response).to be_success
      # json = JSON.parse(response.body)
      #
      # expect(json['crms']).to eql(DeliverySetting.display_names)
      # expect(json['raters']).to eql(Rater.display_names)
    end
  end
end
