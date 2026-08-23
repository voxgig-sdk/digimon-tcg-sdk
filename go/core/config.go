package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DigimonTcg",
			"slug": "digimon-tcg",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://digimoncard.io/api-public",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_all_card": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_all_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attribute",
						"short": "Digimon attribute (e.g., Vaccine, Virus, Data, Free)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardnumber",
						"short": "Unique card number identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardset",
						"short": "Card set or series this card belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "color",
						"short": "Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "digivolve1cost",
						"short": "First digivolution cost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "digivolve1level",
						"short": "Level required for first digivolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "digivolve2cost",
						"short": "Second digivolution cost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "digivolve2level",
						"short": "Level required for second digivolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dp",
						"short": "Digimon power points",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dpcost",
						"short": "DP cost for evolution or abilities",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "effect",
						"short": "Card effect text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_url",
						"short": "URL to the card image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"short": "Card level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "playcost",
						"short": "Cost to play the card",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rarity",
						"short": "Card rarity (e.g., Common, Uncommon, Rare, Super Rare)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"short": "Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of card (e.g., Digimon, Tamer, Option)",
						"type": "`$STRING`",
					},
				},
				"name": "get_all_card",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sortdirection",
											"orig": "sortdirection",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/getAllCards.php",
								"parts": []any{
									"getAllCards.php",
								},
								"select": map[string]any{
									"exist": []any{
										"sort",
										"sortdirection",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attribute",
						"short": "Digimon attribute (e.g., Vaccine, Virus, Data, Free)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardnumber",
						"short": "Unique card number identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardset",
						"short": "Card set or series this card belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "color",
						"short": "Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "digivolve1cost",
						"short": "First digivolution cost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "digivolve1level",
						"short": "Level required for first digivolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "digivolve2cost",
						"short": "Second digivolution cost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "digivolve2level",
						"short": "Level required for second digivolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dp",
						"short": "Digimon power points",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dpcost",
						"short": "DP cost for evolution or abilities",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "effect",
						"short": "Card effect text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_url",
						"short": "URL to the card image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"short": "Card level",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "playcost",
						"short": "Cost to play the card",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rarity",
						"short": "Card rarity (e.g., Common, Uncommon, Rare, Super Rare)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"short": "Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of card (e.g., Digimon, Tamer, Option)",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "attribute",
											"orig": "attribute",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "cardnumber",
											"orig": "cardnumber",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "dpcost",
											"orig": "dpcost",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "level",
											"orig": "level",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "playcost",
											"orig": "playcost",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "series",
											"orig": "series",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sortdirection",
											"orig": "sortdirection",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "stage",
											"orig": "stage",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search.php",
								"parts": []any{
									"search.php",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
