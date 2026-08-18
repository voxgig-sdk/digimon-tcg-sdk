-- DigimonTcg SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DigimonTcg",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://digimoncard.io/api-public",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_all_card"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["get_all_card"] = {
        ["fields"] = {
          {
            ["name"] = "attribute",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardnumber",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardset",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "color",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve1cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve1level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve2cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve2level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dp",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dpcost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "effect",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playcost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rarity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_all_card",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sortdirection",
                      ["orig"] = "sortdirection",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/getAllCards.php",
                ["parts"] = {
                  "getAllCards.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "sort",
                    "sortdirection",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "attribute",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardnumber",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardset",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "color",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve1cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve1level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve2cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve2level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dp",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dpcost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "effect",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playcost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rarity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "attribute",
                      ["orig"] = "attribute",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "cardnumber",
                      ["orig"] = "cardnumber",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "dpcost",
                      ["orig"] = "dpcost",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "level",
                      ["orig"] = "level",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "playcost",
                      ["orig"] = "playcost",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "series",
                      ["orig"] = "series",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sortdirection",
                      ["orig"] = "sortdirection",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "stage",
                      ["orig"] = "stage",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search.php",
                ["parts"] = {
                  "search.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "attribute",
                    "card",
                    "cardnumber",
                    "color",
                    "dpcost",
                    "level",
                    "playcost",
                    "series",
                    "sort",
                    "sortdirection",
                    "stage",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
