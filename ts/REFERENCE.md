# DigimonTcg TypeScript SDK Reference

Complete API reference for the DigimonTcg TypeScript SDK.


## DigimonTcgSDK

### Constructor

```ts
new DigimonTcgSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DigimonTcgSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = DigimonTcgSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `DigimonTcgSDK` instance in test mode.


### Instance Methods

#### `GetAllCard(data?: object)`

Create a new `GetAllCard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetAllCardEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `DigimonTcgSDK.test()`.

**Returns:** `DigimonTcgSDK` instance in test mode.


---

## GetAllCardEntity

```ts
const get_all_card = client.GetAllCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No |  |
| `cardnumber` | `string` | No |  |
| `cardset` | `string` | No |  |
| `color` | `string` | No |  |
| `digivolve1cost` | `number` | No |  |
| `digivolve1level` | `string` | No |  |
| `digivolve2cost` | `number` | No |  |
| `digivolve2level` | `string` | No |  |
| `dp` | `number` | No |  |
| `dpcost` | `number` | No |  |
| `effect` | `string` | No |  |
| `image_url` | `string` | No |  |
| `level` | `number` | No |  |
| `name` | `string` | No |  |
| `playcost` | `number` | No |  |
| `rarity` | `string` | No |  |
| `stage` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GetAllCard().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetAllCardEntity` instance with the same client and
options.

#### `client()`

Return the parent `DigimonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute` | `string` | No |  |
| `cardnumber` | `string` | No |  |
| `cardset` | `string` | No |  |
| `color` | `string` | No |  |
| `digivolve1cost` | `number` | No |  |
| `digivolve1level` | `string` | No |  |
| `digivolve2cost` | `number` | No |  |
| `digivolve2level` | `string` | No |  |
| `dp` | `number` | No |  |
| `dpcost` | `number` | No |  |
| `effect` | `string` | No |  |
| `image_url` | `string` | No |  |
| `level` | `number` | No |  |
| `name` | `string` | No |  |
| `playcost` | `number` | No |  |
| `rarity` | `string` | No |  |
| `stage` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `DigimonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new DigimonTcgSDK({
  feature: {
    test: { active: true },
  }
})
```

