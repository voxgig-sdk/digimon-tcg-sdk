# DigimonTcg SDK utility: make_context
require_relative '../core/context'
module DigimonTcgUtilities
  MakeContext = ->(ctxmap, basectx) {
    DigimonTcgContext.new(ctxmap, basectx)
  }
end
