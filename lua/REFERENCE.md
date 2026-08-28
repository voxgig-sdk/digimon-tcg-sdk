# DigimonTcg Lua SDK Reference

Complete API reference for the DigimonTcg Lua SDK.


## DigimonTcgSDK

### Constructor

```lua
local sdk = require("digimon-tcg_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `GetAllCard(data)`

Create a new `GetAllCard` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GetAllCardEntity

```lua
local get_all_card = client:GetAllCard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | No | Unique card number identifier |
| `cardset` | `string` | No | Card set or series this card belongs to |
| `color` | `string` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `number` | No | First digivolution cost |
| `digivolve1level` | `string` | No | Level required for first digivolution |
| `digivolve2cost` | `number` | No | Second digivolution cost |
| `digivolve2level` | `string` | No | Level required for second digivolution |
| `dp` | `number` | No | Digimon power points |
| `dpcost` | `number` | No | DP cost for evolution or abilities |
| `effect` | `string` | No | Card effect text |
| `image_url` | `string` | No | URL to the card image |
| `level` | `number` | No | Card level |
| `name` | `string` | No | Name of the card |
| `playcost` | `number` | No | Cost to play the card |
| `rarity` | `string` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GetAllCard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetAllCardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | No | Unique card number identifier |
| `cardset` | `string` | No | Card set or series this card belongs to |
| `color` | `string` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `number` | No | First digivolution cost |
| `digivolve1level` | `string` | No | Level required for first digivolution |
| `digivolve2cost` | `number` | No | Second digivolution cost |
| `digivolve2level` | `string` | No | Level required for second digivolution |
| `dp` | `number` | No | Digimon power points |
| `dpcost` | `number` | No | DP cost for evolution or abilities |
| `effect` | `string` | No | Card effect text |
| `image_url` | `string` | No | URL to the card image |
| `level` | `number` | No | Card level |
| `name` | `string` | No | Name of the card |
| `playcost` | `number` | No | Cost to play the card |
| `rarity` | `string` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Search():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

