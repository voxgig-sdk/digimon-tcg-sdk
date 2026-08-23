# DigimonTcg Golang SDK



The Golang SDK for the DigimonTcg API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.GetAllCard(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/digimon-tcg-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/digimon-tcg-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/digimon-tcg-sdk/go=../digimon-tcg-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/digimon-tcg-sdk/go"
)

func main() {
    client := sdk.New()

    // List getAllCard records — the value is the array of records itself.
    getAllCards, err := client.GetAllCard(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range getAllCards.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
getallcards, err := client.GetAllCard(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = getallcards
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

getAllCard, err := client.GetAllCard(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(getAllCard) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewDigimonTcgSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DIGIMON_TCG_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewDigimonTcgSDK

```go
func NewDigimonTcgSDK(options map[string]any) *DigimonTcgSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *DigimonTcgSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DigimonTcgSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `GetAllCard` | `(data map[string]any) DigimonTcgEntity` | Create a GetAllCard entity instance. |
| `Search` | `(data map[string]any) DigimonTcgEntity` | Create a Search entity instance. |

### Entity interface (DigimonTcgEntity)

All entities implement the `DigimonTcgEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    getAllCard, err := client.GetAllCard(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // getAllCard is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### GetAllCard

| Field | Description |
| --- | --- |
| `"attribute"` | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `"cardnumber"` | Unique card number identifier |
| `"cardset"` | Card set or series this card belongs to |
| `"color"` | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `"digivolve1cost"` | First digivolution cost |
| `"digivolve1level"` | Level required for first digivolution |
| `"digivolve2cost"` | Second digivolution cost |
| `"digivolve2level"` | Level required for second digivolution |
| `"dp"` | Digimon power points |
| `"dpcost"` | DP cost for evolution or abilities |
| `"effect"` | Card effect text |
| `"image_url"` | URL to the card image |
| `"level"` | Card level |
| `"name"` | Name of the card |
| `"playcost"` | Cost to play the card |
| `"rarity"` | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `"stage"` | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `"type"` | Type of card (e.g., Digimon, Tamer, Option) |

Operations: List.

API path: `/getAllCards.php`

#### Search

| Field | Description |
| --- | --- |
| `"attribute"` | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `"cardnumber"` | Unique card number identifier |
| `"cardset"` | Card set or series this card belongs to |
| `"color"` | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `"digivolve1cost"` | First digivolution cost |
| `"digivolve1level"` | Level required for first digivolution |
| `"digivolve2cost"` | Second digivolution cost |
| `"digivolve2level"` | Level required for second digivolution |
| `"dp"` | Digimon power points |
| `"dpcost"` | DP cost for evolution or abilities |
| `"effect"` | Card effect text |
| `"image_url"` | URL to the card image |
| `"level"` | Card level |
| `"name"` | Name of the card |
| `"playcost"` | Cost to play the card |
| `"rarity"` | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `"stage"` | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `"type"` | Type of card (e.g., Digimon, Tamer, Option) |

Operations: List.

API path: `/search.php`



## Entities


### GetAllCard

Create an instance: `getAllCard := client.GetAllCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute` | `string` | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | Unique card number identifier |
| `cardset` | `string` | Card set or series this card belongs to |
| `color` | `string` | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | First digivolution cost |
| `digivolve1level` | `string` | Level required for first digivolution |
| `digivolve2cost` | `int` | Second digivolution cost |
| `digivolve2level` | `string` | Level required for second digivolution |
| `dp` | `int` | Digimon power points |
| `dpcost` | `int` | DP cost for evolution or abilities |
| `effect` | `string` | Card effect text |
| `image_url` | `string` | URL to the card image |
| `level` | `int` | Card level |
| `name` | `string` | Name of the card |
| `playcost` | `int` | Cost to play the card |
| `rarity` | `string` | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | Type of card (e.g., Digimon, Tamer, Option) |

#### Example: List

```go
getAllCards, err := client.GetAllCard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(getAllCards) // the array of records
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute` | `string` | Digimon attribute (e.g., Vaccine, Virus, Data, Free) |
| `cardnumber` | `string` | Unique card number identifier |
| `cardset` | `string` | Card set or series this card belongs to |
| `color` | `string` | Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White) |
| `digivolve1cost` | `int` | First digivolution cost |
| `digivolve1level` | `string` | Level required for first digivolution |
| `digivolve2cost` | `int` | Second digivolution cost |
| `digivolve2level` | `string` | Level required for second digivolution |
| `dp` | `int` | Digimon power points |
| `dpcost` | `int` | DP cost for evolution or abilities |
| `effect` | `string` | Card effect text |
| `image_url` | `string` | URL to the card image |
| `level` | `int` | Card level |
| `name` | `string` | Name of the card |
| `playcost` | `int` | Cost to play the card |
| `rarity` | `string` | Card rarity (e.g., Common, Uncommon, Rare, Super Rare) |
| `stage` | `string` | Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega) |
| `type` | `string` | Type of card (e.g., Digimon, Tamer, Option) |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(searchs) // the array of records
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/digimon-tcg-sdk/go/
├── digimon-tcg.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/digimon-tcg-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
getallcard := client.GetAllCard(nil)
getallcard.List(nil, nil)

// getallcard.Data() now returns the getallcard data from the last list
// getallcard.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
