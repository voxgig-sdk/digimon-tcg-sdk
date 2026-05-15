# DigimonTcg SDK feature factory

from feature.base_feature import DigimonTcgBaseFeature
from feature.test_feature import DigimonTcgTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DigimonTcgBaseFeature(),
        "test": lambda: DigimonTcgTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
