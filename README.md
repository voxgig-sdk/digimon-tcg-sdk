# DigimonTcg SDK

Look up Digimon Trading Card Game cards by name, colour, type, attribute, pack and more

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Digimon TCG API

The [Digimon TCG API](https://digimoncard.io/api-public) is a public, community-facing service that exposes card data from the Digimon Trading Card Game. It lets you list every card or search for specific cards by their printed attributes.

What you get from the API:

- List of all cards, sortable by name and series
- Search by card name, colour, type, attribute, card ID, expansion pack and other printed fields
- Per-card details such as name, description, colour, card type, attribute, card number, expansion pack and rarity

The service is hosted at `https://digimoncard.io/api-public` with CORS enabled for browser use. No authentication is required, but requests are rate-limited to 15 per 10 seconds; exceeding that threshold temporarily blocks further access.

## Try it

**TypeScript**
```bash
npm install digimon-tcg
```

**Python**
```bash
pip install digimon-tcg-sdk
```

**PHP**
```bash
composer require voxgig/digimon-tcg-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/digimon-tcg-sdk/go
```

**Ruby**
```bash
gem install digimon-tcg-sdk
```

**Lua**
```bash
luarocks install digimon-tcg-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DigimonTcgSDK } from 'digimon-tcg'

const client = new DigimonTcgSDK({})

// List all getallcards
const getallcards = await client.GetAllCard().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o digimon-tcg-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "digimon-tcg": {
      "command": "/abs/path/to/digimon-tcg-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetAllCard** | Retrieves the full Digimon card catalogue, with options to sort by name or series. | `/getAllCards.php` |
| **Search** | Looks up specific cards by printed attributes such as name, colour, type, attribute, card ID or expansion pack. | `/search.php` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from digimontcg_sdk import DigimonTcgSDK

client = DigimonTcgSDK({})

# List all getallcards
getallcards, err = client.GetAllCard(None).list(None, None)
```

### PHP

```php
<?php
require_once 'digimontcg_sdk.php';

$client = new DigimonTcgSDK([]);

// List all getallcards
[$getallcards, $err] = $client->GetAllCard(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/digimon-tcg-sdk/go"

client := sdk.NewDigimonTcgSDK(map[string]any{})

// List all getallcards
getallcards, err := client.GetAllCard(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "DigimonTcg_sdk"

client = DigimonTcgSDK.new({})

# List all getallcards
getallcards, err = client.GetAllCard(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("digimon-tcg_sdk")

local client = sdk.new({})

-- List all getallcards
local getallcards, err = client:GetAllCard(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DigimonTcgSDK.test()
const result = await client.GetAllCard().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DigimonTcgSDK.test(None, None)
result, err = client.GetAllCard(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DigimonTcgSDK::test(null, null);
[$result, $err] = $client->GetAllCard(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetAllCard(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DigimonTcgSDK.test(nil, nil)
result, err = client.GetAllCard(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetAllCard(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Digimon TCG API

- Upstream: [https://digimoncard.io/api-public](https://digimoncard.io/api-public)

---

Generated from the Digimon TCG API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
