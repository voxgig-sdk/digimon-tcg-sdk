

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DigimonTcgSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetAllCardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DIGIMON_TCG_TEST_LIVE=TRUE.
  afterEach(liveDelay('DIGIMON_TCG_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DigimonTcgSDK.test()
    const ent = testsdk.GetAllCard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DIGIMON_TCG_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_all_card.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"attribute","req":false,"short":"Digimon attribute (e.g., Vaccine, Virus, Data, Free)","type":"`$STRING`","index$":0},{"active":true,"name":"cardnumber","req":false,"short":"Unique card number identifier","type":"`$STRING`","index$":1},{"active":true,"name":"cardset","req":false,"short":"Card set or series this card belongs to","type":"`$STRING`","index$":2},{"active":true,"name":"color","req":false,"short":"Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)","type":"`$STRING`","index$":3},{"active":true,"name":"digivolve1cost","req":false,"short":"First digivolution cost","type":"`$INTEGER`","index$":4},{"active":true,"name":"digivolve1level","req":false,"short":"Level required for first digivolution","type":"`$STRING`","index$":5},{"active":true,"name":"digivolve2cost","req":false,"short":"Second digivolution cost","type":"`$INTEGER`","index$":6},{"active":true,"name":"digivolve2level","req":false,"short":"Level required for second digivolution","type":"`$STRING`","index$":7},{"active":true,"name":"dp","req":false,"short":"Digimon power points","type":"`$INTEGER`","index$":8},{"active":true,"name":"dpcost","req":false,"short":"DP cost for evolution or abilities","type":"`$INTEGER`","index$":9},{"active":true,"name":"effect","req":false,"short":"Card effect text","type":"`$STRING`","index$":10},{"active":true,"name":"image_url","req":false,"short":"URL to the card image","type":"`$STRING`","index$":11},{"active":true,"name":"level","req":false,"short":"Card level","type":"`$INTEGER`","index$":12},{"active":true,"name":"name","req":false,"short":"Name of the card","type":"`$STRING`","index$":13},{"active":true,"name":"playcost","req":false,"short":"Cost to play the card","type":"`$INTEGER`","index$":14},{"active":true,"name":"rarity","req":false,"short":"Card rarity (e.g., Common, Uncommon, Rare, Super Rare)","type":"`$STRING`","index$":15},{"active":true,"name":"stage","req":false,"short":"Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)","type":"`$STRING`","index$":16},{"active":true,"name":"type","req":false,"short":"Type of card (e.g., Digimon, Tamer, Option)","type":"`$STRING`","index$":17}],"name":"get_all_card","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"sortdirection","orig":"sortdirection","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /getAllCards.php","json":"{\"operationId\":\"getAllCards\",\"parameters\":[{\"description\":\"Sort field\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort direction (asc or desc)\",\"in\":\"query\",\"name\":\"sortdirection\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"attribute\":{\"description\":\"Digimon attribute (e.g., Vaccine, Virus, Data, Free)\",\"nullable\":true,\"type\":\"string\"},\"cardnumber\":{\"description\":\"Unique card number identifier\",\"type\":\"string\"},\"cardset\":{\"description\":\"Card set or series this card belongs to\",\"type\":\"string\"},\"color\":{\"description\":\"Card color (e.g., Red, Blue, Yellow, Green, Black, Purple, White)\",\"type\":\"string\"},\"digivolve1cost\":{\"description\":\"First digivolution cost\",\"nullable\":true,\"type\":\"integer\"},\"digivolve1level\":{\"description\":\"Level required for first digivolution\",\"nullable\":true,\"type\":\"string\"},\"digivolve2cost\":{\"description\":\"Second digivolution cost\",\"nullable\":true,\"type\":\"integer\"},\"digivolve2level\":{\"description\":\"Level required for second digivolution\",\"nullable\":true,\"type\":\"string\"},\"dp\":{\"description\":\"Digimon power points\",\"nullable\":true,\"type\":\"integer\"},\"dpcost\":{\"description\":\"DP cost for evolution or abilities\",\"nullable\":true,\"type\":\"integer\"},\"effect\":{\"description\":\"Card effect text\",\"nullable\":true,\"type\":\"string\"},\"image_url\":{\"description\":\"URL to the card image\",\"type\":\"string\"},\"level\":{\"description\":\"Card level\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"playcost\":{\"description\":\"Cost to play the card\",\"nullable\":true,\"type\":\"integer\"},\"rarity\":{\"description\":\"Card rarity (e.g., Common, Uncommon, Rare, Super Rare)\",\"type\":\"string\"},\"stage\":{\"description\":\"Digimon evolution stage (e.g., Rookie, Champion, Ultimate, Mega)\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"Type of card (e.g., Digimon, Tamer, Option)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all cards\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded - too many requests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/getAllCards.php","segments":[{"lit":"getAllCards.php"}],"select":{"exist":["sort","sortdirection"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_all_card","name__orig":"get_all_card","Name":"GetAllCard","name_":"get_all_card","name-":"get-all-card","NAME":"GET_ALL_CARD","index$":0}, {"active":true,"entity":"get_all_card","key$":"BasicGetAllCardFlow","kind":"basic","name":"BasicGetAllCardFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"get_all_card_ref01"}}],"index$":0}]}, 'GetAllCard')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_all_card_ref01_data = Object.values(setup.data.existing.get_all_card)[0] as any

    // LIST
    const get_all_card_ref01_ent = client.GetAllCard()
    const get_all_card_ref01_match: any = {}

    const get_all_card_ref01_list = (await get_all_card_ref01_ent.list(get_all_card_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_all_card/GetAllCardTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DigimonTcgSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_all_card01','get_all_card02','get_all_card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DIGIMON_TCG_TEST_GET_ALL_CARD_ENTID': idmap,
    'DIGIMON_TCG_TEST_LIVE': 'FALSE',
    'DIGIMON_TCG_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DIGIMON_TCG_TEST_GET_ALL_CARD_ENTID']

  const live = 'TRUE' === env.DIGIMON_TCG_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DIGIMON_TCG_TEST_GET_ALL_CARD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DigimonTcgSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
