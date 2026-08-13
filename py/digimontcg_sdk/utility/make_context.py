# DigimonTcg SDK utility: make_context

from digimontcg_sdk.core.context import DigimonTcgContext


def make_context_util(ctxmap, basectx):
    return DigimonTcgContext(ctxmap, basectx)
