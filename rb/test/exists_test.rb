# DigimonTcg SDK exists test

require "minitest/autorun"
require_relative "../DigimonTcg_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DigimonTcgSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
