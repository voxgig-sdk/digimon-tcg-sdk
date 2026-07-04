# DigimonTcg PHP SDK Reference

Complete API reference for the DigimonTcg PHP SDK.


## DigimonTcgSDK

### Constructor

```php
require_once __DIR__ . '/digimon-tcg_sdk.php';

$client = new DigimonTcgSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DigimonTcgSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = DigimonTcgSDK::test();
```


### Instance Methods

#### `GetAllCard($data = null)`

Create a new `GetAllCardEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GetAllCardEntity

```php
$get_all_card = $client->GetAllCard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | ``$STRING`` | No |  |
| `cardnumber` | ``$STRING`` | No |  |
| `cardset` | ``$STRING`` | No |  |
| `color` | ``$STRING`` | No |  |
| `digivolve1cost` | ``$INTEGER`` | No |  |
| `digivolve1level` | ``$STRING`` | No |  |
| `digivolve2cost` | ``$INTEGER`` | No |  |
| `digivolve2level` | ``$STRING`` | No |  |
| `dp` | ``$INTEGER`` | No |  |
| `dpcost` | ``$INTEGER`` | No |  |
| `effect` | ``$STRING`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `level` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `playcost` | ``$INTEGER`` | No |  |
| `rarity` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->GetAllCard()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetAllCardEntity`

Create a new `GetAllCardEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | ``$STRING`` | No |  |
| `cardnumber` | ``$STRING`` | No |  |
| `cardset` | ``$STRING`` | No |  |
| `color` | ``$STRING`` | No |  |
| `digivolve1cost` | ``$INTEGER`` | No |  |
| `digivolve1level` | ``$STRING`` | No |  |
| `digivolve2cost` | ``$INTEGER`` | No |  |
| `digivolve2level` | ``$STRING`` | No |  |
| `dp` | ``$INTEGER`` | No |  |
| `dpcost` | ``$INTEGER`` | No |  |
| `effect` | ``$STRING`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `level` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `playcost` | ``$INTEGER`` | No |  |
| `rarity` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Search()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new DigimonTcgSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

