# DigimonTcg SDK feature factory

from digimontcg_sdk.feature.base_feature import DigimonTcgBaseFeature
from digimontcg_sdk.feature.ratelimit_feature import DigimonTcgRatelimitFeature
from digimontcg_sdk.feature.retry_feature import DigimonTcgRetryFeature
from digimontcg_sdk.feature.test_feature import DigimonTcgTestFeature
from digimontcg_sdk.feature.timeout_feature import DigimonTcgTimeoutFeature


_FEATURES = {
    "base": lambda: DigimonTcgBaseFeature(),
    "ratelimit": lambda: DigimonTcgRatelimitFeature(),
    "retry": lambda: DigimonTcgRetryFeature(),
    "test": lambda: DigimonTcgTestFeature(),
    "timeout": lambda: DigimonTcgTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
