package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DigimonTcg",
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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "cardnumber",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "cardset",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "color",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "digivolve1cost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "digivolve1level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "digivolve2cost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "digivolve2level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "dp",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "dpcost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "effect",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "image_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "level",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "playcost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "rarity",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "stage",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
				},
				"name": "get_all_card",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "sortdirection",
											"orig": "sortdirection",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "cardnumber",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "cardset",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "color",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "digivolve1cost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "digivolve1level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "digivolve2cost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "digivolve2level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "dp",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "dpcost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "effect",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "image_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "level",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "playcost",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "rarity",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "stage",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "attribute",
											"orig": "attribute",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "card",
											"orig": "card",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "cardnumber",
											"orig": "cardnumber",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "color",
											"orig": "color",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "dpcost",
											"orig": "dpcost",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "level",
											"orig": "level",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "playcost",
											"orig": "playcost",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "series",
											"orig": "series",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "sortdirection",
											"orig": "sortdirection",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "stage",
											"orig": "stage",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
