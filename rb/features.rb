# DigimonTcg SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DigimonTcgFeatures
  def self.make_feature(name)
    case name
    when "base"
      DigimonTcgBaseFeature.new
    when "ratelimit"
      DigimonTcgRatelimitFeature.new
    when "retry"
      DigimonTcgRetryFeature.new
    when "test"
      DigimonTcgTestFeature.new
    when "timeout"
      DigimonTcgTimeoutFeature.new
    else
      DigimonTcgBaseFeature.new
    end
  end
end
