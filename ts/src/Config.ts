
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://digimoncard.io/api-public',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_all_card: {
      },

      search: {
      },

    }
  }


  entity = {
    "get_all_card": {
      "fields": [
        {
          "name": "attribute",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "cardnumber",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "cardset",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "color",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "digivolve1cost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "digivolve1level",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "digivolve2cost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "digivolve2level",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "dp",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "dpcost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 9
        },
        {
          "name": "effect",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "image_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "level",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 12
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        },
        {
          "name": "playcost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        },
        {
          "name": "rarity",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 15
        },
        {
          "name": "stage",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 16
        },
        {
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 17
        }
      ],
      "name": "get_all_card",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "sortdirection",
                    "orig": "sortdirection",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/getAllCards.php",
              "parts": [
                "getAllCards.php"
              ],
              "select": {
                "exist": [
                  "sort",
                  "sortdirection"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "attribute",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "cardnumber",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "cardset",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "color",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "digivolve1cost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "digivolve1level",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "digivolve2cost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "digivolve2level",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "dp",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "dpcost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 9
        },
        {
          "name": "effect",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "image_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "level",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 12
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        },
        {
          "name": "playcost",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        },
        {
          "name": "rarity",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 15
        },
        {
          "name": "stage",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 16
        },
        {
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 17
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "attribute",
                    "orig": "attribute",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "card",
                    "orig": "card",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "cardnumber",
                    "orig": "cardnumber",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "color",
                    "orig": "color",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "dpcost",
                    "orig": "dpcost",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "level",
                    "orig": "level",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "playcost",
                    "orig": "playcost",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "series",
                    "orig": "series",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "sortdirection",
                    "orig": "sortdirection",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "stage",
                    "orig": "stage",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/search.php",
              "parts": [
                "search.php"
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
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

