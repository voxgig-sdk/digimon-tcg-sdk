# ProjectName SDK exists test

import pytest
from digimontcg_sdk import DigimonTcgSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DigimonTcgSDK.test(None, None)
        assert testsdk is not None
