# DigimonTcg SDK utility: feature_add
module DigimonTcgUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
