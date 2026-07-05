# DigimonTcg Ruby SDK Reference

Complete API reference for the DigimonTcg Ruby SDK.


## DigimonTcgSDK

### Constructor

```ruby
require_relative 'DigimonTcg_sdk'

client = DigimonTcgSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DigimonTcgSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = DigimonTcgSDK.test
```


### Instance Methods

#### `GetAllCard(data = nil)`

Create a new `GetAllCard` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GetAllCardEntity

```ruby
get_all_card = client.GetAllCard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `String` | No |  |
| `cardnumber` | `String` | No |  |
| `cardset` | `String` | No |  |
| `color` | `String` | No |  |
| `digivolve1cost` | `Integer` | No |  |
| `digivolve1level` | `String` | No |  |
| `digivolve2cost` | `Integer` | No |  |
| `digivolve2level` | `String` | No |  |
| `dp` | `Integer` | No |  |
| `dpcost` | `Integer` | No |  |
| `effect` | `String` | No |  |
| `image_url` | `String` | No |  |
| `level` | `Integer` | No |  |
| `name` | `String` | No |  |
| `playcost` | `Integer` | No |  |
| `rarity` | `String` | No |  |
| `stage` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GetAllCard.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetAllCardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `String` | No |  |
| `cardnumber` | `String` | No |  |
| `cardset` | `String` | No |  |
| `color` | `String` | No |  |
| `digivolve1cost` | `Integer` | No |  |
| `digivolve1level` | `String` | No |  |
| `digivolve2cost` | `Integer` | No |  |
| `digivolve2level` | `String` | No |  |
| `dp` | `Integer` | No |  |
| `dpcost` | `Integer` | No |  |
| `effect` | `String` | No |  |
| `image_url` | `String` | No |  |
| `level` | `Integer` | No |  |
| `name` | `String` | No |  |
| `playcost` | `Integer` | No |  |
| `rarity` | `String` | No |  |
| `stage` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Search.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = DigimonTcgSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

