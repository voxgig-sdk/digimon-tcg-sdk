package = "voxgig-sdk-digimon-tcg"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/digimon-tcg-sdk.git",
  tag = "lua/v0.0.1",
  dir = "digimon-tcg-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Digimon TCG public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/digimon-tcg-sdk",
  issues_url = "https://github.com/voxgig-sdk/digimon-tcg-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "digimon-tcg" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["digimon-tcg_sdk"] = "digimon-tcg_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
