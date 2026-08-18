# DigimonTcg SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DigimonTcg",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://digimoncard.io/api-public",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_all_card": {},
                "search": {},
            },
        },
        "entity": {
      "get_all_card": {
        "fields": [
          {
            "name": "attribute",
            "type": "`$STRING`",
          },
          {
            "name": "cardnumber",
            "type": "`$STRING`",
          },
          {
            "name": "cardset",
            "type": "`$STRING`",
          },
          {
            "name": "color",
            "type": "`$STRING`",
          },
          {
            "name": "digivolve1cost",
            "type": "`$INTEGER`",
          },
          {
            "name": "digivolve1level",
            "type": "`$STRING`",
          },
          {
            "name": "digivolve2cost",
            "type": "`$INTEGER`",
          },
          {
            "name": "digivolve2level",
            "type": "`$STRING`",
          },
          {
            "name": "dp",
            "type": "`$INTEGER`",
          },
          {
            "name": "dpcost",
            "type": "`$INTEGER`",
          },
          {
            "name": "effect",
            "type": "`$STRING`",
          },
          {
            "name": "image_url",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "playcost",
            "type": "`$INTEGER`",
          },
          {
            "name": "rarity",
            "type": "`$STRING`",
          },
          {
            "name": "stage",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "name": "get_all_card",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sortdirection",
                      "orig": "sortdirection",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/getAllCards.php",
                "parts": [
                  "getAllCards.php",
                ],
                "select": {
                  "exist": [
                    "sort",
                    "sortdirection",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "attribute",
            "type": "`$STRING`",
          },
          {
            "name": "cardnumber",
            "type": "`$STRING`",
          },
          {
            "name": "cardset",
            "type": "`$STRING`",
          },
          {
            "name": "color",
            "type": "`$STRING`",
          },
          {
            "name": "digivolve1cost",
            "type": "`$INTEGER`",
          },
          {
            "name": "digivolve1level",
            "type": "`$STRING`",
          },
          {
            "name": "digivolve2cost",
            "type": "`$INTEGER`",
          },
          {
            "name": "digivolve2level",
            "type": "`$STRING`",
          },
          {
            "name": "dp",
            "type": "`$INTEGER`",
          },
          {
            "name": "dpcost",
            "type": "`$INTEGER`",
          },
          {
            "name": "effect",
            "type": "`$STRING`",
          },
          {
            "name": "image_url",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "playcost",
            "type": "`$INTEGER`",
          },
          {
            "name": "rarity",
            "type": "`$STRING`",
          },
          {
            "name": "stage",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "attribute",
                      "orig": "attribute",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "card",
                      "orig": "card",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "cardnumber",
                      "orig": "cardnumber",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "color",
                      "orig": "color",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "dpcost",
                      "orig": "dpcost",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "level",
                      "orig": "level",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "playcost",
                      "orig": "playcost",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "series",
                      "orig": "series",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sortdirection",
                      "orig": "sortdirection",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "stage",
                      "orig": "stage",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search.php",
                "parts": [
                  "search.php",
                ],
                "select": {
                  "exist": [
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
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
