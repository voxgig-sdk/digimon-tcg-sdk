# DigimonTcg Python SDK Reference

Complete API reference for the DigimonTcg Python SDK.


## DigimonTcgSDK

### Constructor

```python
from digimontcg_sdk import DigimonTcgSDK

client = DigimonTcgSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DigimonTcgSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DigimonTcgSDK.test()
```


### Instance Methods

#### `GetAllCard(data=None)`

Create a new `GetAllCardEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GetAllCardEntity

```python
get_all_card = client.GetAllCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `str` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `str` | No | Unique card number identifier |
| `cardset` | `str` | No | Card set or series this card belongs to |
| `color` | `str` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | No | First digivolution cost |
| `digivolve1level` | `str` | No | Level required for first digivolution |
| `digivolve2cost` | `int` | No | Second digivolution cost |
| `digivolve2level` | `str` | No | Level required for second digivolution |
| `dp` | `int` | No | Digimon power points |
| `dpcost` | `int` | No | DP cost for evolution or abilities |
| `effect` | `str` | No | Card effect text |
| `image_url` | `str` | No | URL to the card image |
| `level` | `int` | No | Card level |
| `name` | `str` | No | Name of the card |
| `playcost` | `int` | No | Cost to play the card |
| `rarity` | `str` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `str` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `str` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GetAllCard().list()
for get_all_card in results:
    print(get_all_card)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetAllCardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `str` | No | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `str` | No | Unique card number identifier |
| `cardset` | `str` | No | Card set or series this card belongs to |
| `color` | `str` | No | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | No | First digivolution cost |
| `digivolve1level` | `str` | No | Level required for first digivolution |
| `digivolve2cost` | `int` | No | Second digivolution cost |
| `digivolve2level` | `str` | No | Level required for second digivolution |
| `dp` | `int` | No | Digimon power points |
| `dpcost` | `int` | No | DP cost for evolution or abilities |
| `effect` | `str` | No | Card effect text |
| `image_url` | `str` | No | URL to the card image |
| `level` | `int` | No | Card level |
| `name` | `str` | No | Name of the card |
| `playcost` | `int` | No | Cost to play the card |
| `rarity` | `str` | No | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `str` | No | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `str` | No | Type of card (e.g., Digimon, Tamer, Option) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list()
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DigimonTcgSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

