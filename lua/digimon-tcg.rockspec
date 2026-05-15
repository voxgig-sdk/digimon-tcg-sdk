package = "voxgig-sdk-digimon-tcg"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/digimon-tcg-sdk.git"
}
description = {
  summary = "DigimonTcg SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["digimon-tcg_sdk"] = "digimon-tcg_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
