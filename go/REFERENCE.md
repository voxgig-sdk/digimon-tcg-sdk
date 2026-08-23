# DigimonTcg Golang SDK Reference

Complete API reference for the DigimonTcg Golang SDK.


## DigimonTcgSDK

### Constructor

```go
func NewDigimonTcgSDK(options map[string]any) *DigimonTcgSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DigimonTcgSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DigimonTcgSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `GetAllCard(data map[string]any) DigimonTcgEntity`

Create a new `GetAllCard` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) DigimonTcgEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GetAllCardEntity

```go
getAllCard := client.GetAllCard(nil)
fmt.Println(getAllCard.GetName()) // "get_all_card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | No | Unique card number identifier |
| `cardset` | `string` | No | Card set or series this card belongs to |
| `color` | `string` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | No | First digivolution cost |
| `digivolve1level` | `string` | No | Level required for first digivolution |
| `digivolve2cost` | `int` | No | Second digivolution cost |
| `digivolve2level` | `string` | No | Level required for second digivolution |
| `dp` | `int` | No | Digimon power points |
| `dpcost` | `int` | No | DP cost for evolution or abilities |
| `effect` | `string` | No | Card effect text |
| `image_url` | `string` | No | URL to the card image |
| `level` | `int` | No | Card level |
| `name` | `string` | No | Name of the card |
| `playcost` | `int` | No | Cost to play the card |
| `rarity` | `string` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GetAllCard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetAllCardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | No | Unique card number identifier |
| `cardset` | `string` | No | Card set or series this card belongs to |
| `color` | `string` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | No | First digivolution cost |
| `digivolve1level` | `string` | No | Level required for first digivolution |
| `digivolve2cost` | `int` | No | Second digivolution cost |
| `digivolve2level` | `string` | No | Level required for second digivolution |
| `dp` | `int` | No | Digimon power points |
| `dpcost` | `int` | No | DP cost for evolution or abilities |
| `effect` | `string` | No | Card effect text |
| `image_url` | `string` | No | URL to the card image |
| `level` | `int` | No | Card level |
| `name` | `string` | No | Name of the card |
| `playcost` | `int` | No | Cost to play the card |
| `rarity` | `string` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewDigimonTcgSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

