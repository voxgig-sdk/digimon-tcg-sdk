-- DigimonTcg SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DigimonTcg",
      slug = "digimon-tcg",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
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
            ["short"] = "Digimon attribute (e.g., Vaccine, Virus, Data, Free)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardnumber",
            ["short"] = "Unique card number identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardset",
            ["short"] = "Card set or series this card belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "color",
            ["short"] = "Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve1cost",
            ["short"] = "First digivolution cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve1level",
            ["short"] = "Level required for first digivolution",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve2cost",
            ["short"] = "Second digivolution cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve2level",
            ["short"] = "Level required for second digivolution",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dp",
            ["short"] = "Digimon power points",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dpcost",
            ["short"] = "DP cost for evolution or abilities",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "effect",
            ["short"] = "Card effect text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image_url",
            ["short"] = "URL to the card image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["short"] = "Card level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playcost",
            ["short"] = "Cost to play the card",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rarity",
            ["short"] = "Card rarity (e.g., Common, Uncommon, Rare, Super Rare)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["short"] = "Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of card (e.g., Digimon, Tamer, Option)",
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
            ["short"] = "Digimon attribute (e.g., Vaccine, Virus, Data, Free)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardnumber",
            ["short"] = "Unique card number identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cardset",
            ["short"] = "Card set or series this card belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "color",
            ["short"] = "Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve1cost",
            ["short"] = "First digivolution cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve1level",
            ["short"] = "Level required for first digivolution",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "digivolve2cost",
            ["short"] = "Second digivolution cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "digivolve2level",
            ["short"] = "Level required for second digivolution",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dp",
            ["short"] = "Digimon power points",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dpcost",
            ["short"] = "DP cost for evolution or abilities",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "effect",
            ["short"] = "Card effect text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image_url",
            ["short"] = "URL to the card image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["short"] = "Card level",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playcost",
            ["short"] = "Cost to play the card",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rarity",
            ["short"] = "Card rarity (e.g., Common, Uncommon, Rare, Super Rare)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["short"] = "Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of card (e.g., Digimon, Tamer, Option)",
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
