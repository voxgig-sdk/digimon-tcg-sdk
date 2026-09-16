"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DIGIMON_TCG_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DIGIMON_TCG_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DigimonTcgSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DIGIMON_TCG_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "attribute", "req": false, "short": "Digimon attribute (e.g., Vaccine, Virus, Data, Free)", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "cardnumber", "req": false, "short": "Unique card number identifier", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "cardset", "req": false, "short": "Card set or series this card belongs to", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "color", "req": false, "short": "Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "digivolve1cost", "req": false, "short": "First digivolution cost", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "digivolve1level", "req": false, "short": "Level required for first digivolution", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "digivolve2cost", "req": false, "short": "Second digivolution cost", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "digivolve2level", "req": false, "short": "Level required for second digivolution", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "dp", "req": false, "short": "Digimon power points", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "dpcost", "req": false, "short": "DP cost for evolution or abilities", "type": "`$INTEGER`", "index$": 9 }, { "active": true, "name": "effect", "req": false, "short": "Card effect text", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "image_url", "req": false, "short": "URL to the card image", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "level", "req": false, "short": "Card level", "type": "`$INTEGER`", "index$": 12 }, { "active": true, "name": "name", "req": false, "short": "Name of the card", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "playcost", "req": false, "short": "Cost to play the card", "type": "`$INTEGER`", "index$": 14 }, { "active": true, "name": "rarity", "req": false, "short": "Card rarity (e.g., Common, Uncommon, Rare, Super Rare)", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "stage", "req": false, "short": "Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "type", "req": false, "short": "Type of card (e.g., Digimon, Tamer, Option)", "type": "`$STRING`", "index$": 17 }], "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "attribute", "orig": "attribute", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "card", "orig": "card", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "cardnumber", "orig": "cardnumber", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "color", "orig": "color", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "dpcost", "orig": "dpcost", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "level", "orig": "level", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "kind": "query", "name": "playcost", "orig": "playcost", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "kind": "query", "name": "series", "orig": "series", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "kind": "query", "name": "sortdirection", "orig": "sortdirection", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "kind": "query", "name": "stage", "orig": "stage", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 11 }] }, "contract": { "id": "GET /search.php", "json": "{\"operationId\":\"searchCards\",\"parameters\":[{\"description\":\"Card name to search for\",\"in\":\"query\",\"name\":\"card\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Card number to search for\",\"in\":\"query\",\"name\":\"cardnumber\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)\",\"in\":\"query\",\"name\":\"color\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Card type (e.g., Digimon, Tamer, Option)\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Digimon stage (e.g., Rookie, Champion, Ultimate, Mega)\",\"in\":\"query\",\"name\":\"stage\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Digimon attribute (e.g., Vaccine, Virus, Data, Free)\",\"in\":\"query\",\"name\":\"attribute\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Card level\",\"in\":\"query\",\"name\":\"level\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"DP cost\",\"in\":\"query\",\"name\":\"dpcost\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Play cost\",\"in\":\"query\",\"name\":\"playcost\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Sort field (e.g., name, cardnumber, color)\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort direction (asc or desc)\",\"in\":\"query\",\"name\":\"sortdirection\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Card series or set\",\"in\":\"query\",\"name\":\"series\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"attribute\":{\"description\":\"Digimon attribute (e.g., Vaccine, Virus, Data, Free)\",\"nullable\":true,\"type\":\"string\"},\"cardnumber\":{\"description\":\"Unique card number identifier\",\"type\":\"string\"},\"cardset\":{\"description\":\"Card set or series this card belongs to\",\"type\":\"string\"},\"color\":{\"description\":\"Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)\",\"type\":\"string\"},\"digivolve1cost\":{\"description\":\"First digivolution cost\",\"nullable\":true,\"type\":\"integer\"},\"digivolve1level\":{\"description\":\"Level required for first digivolution\",\"nullable\":true,\"type\":\"string\"},\"digivolve2cost\":{\"description\":\"Second digivolution cost\",\"nullable\":true,\"type\":\"integer\"},\"digivolve2level\":{\"description\":\"Level required for second digivolution\",\"nullable\":true,\"type\":\"string\"},\"dp\":{\"description\":\"Digimon power points\",\"nullable\":true,\"type\":\"integer\"},\"dpcost\":{\"description\":\"DP cost for evolution or abilities\",\"nullable\":true,\"type\":\"integer\"},\"effect\":{\"description\":\"Card effect text\",\"nullable\":true,\"type\":\"string\"},\"image_url\":{\"description\":\"URL to the card image\",\"type\":\"string\"},\"level\":{\"description\":\"Card level\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"playcost\":{\"description\":\"Cost to play the card\",\"nullable\":true,\"type\":\"integer\"},\"rarity\":{\"description\":\"Card rarity (e.g., Common, Uncommon, Rare, Super Rare)\",\"type\":\"string\"},\"stage\":{\"description\":\"Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"Type of card (e.g., Digimon, Tamer, Option)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with card data\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded - too many requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/search.php", "segments": [{ "lit": "search.php" }], "select": { "exist": ["attribute", "card", "cardnumber", "color", "dpcost", "level", "playcost", "series", "sort", "sortdirection", "stage", "type"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 1 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DigimonTcgSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DIGIMON_TCG_TEST_SEARCH_ENTID': idmap,
        'DIGIMON_TCG_TEST_LIVE': 'FALSE',
        'DIGIMON_TCG_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DIGIMON_TCG_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.DIGIMON_TCG_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DIGIMON_TCG_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DigimonTcgSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DIGIMON_TCG_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map