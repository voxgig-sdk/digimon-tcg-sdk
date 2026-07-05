// Typed models for the DigimonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetAllCard {
  attribute?: string
  cardnumber?: string
  cardset?: string
  color?: string
  digivolve1cost?: number
  digivolve1level?: string
  digivolve2cost?: number
  digivolve2level?: string
  dp?: number
  dpcost?: number
  effect?: string
  image_url?: string
  level?: number
  name?: string
  playcost?: number
  rarity?: string
  stage?: string
  type?: string
}

export interface GetAllCardListMatch {
  attribute?: string
  cardnumber?: string
  cardset?: string
  color?: string
  digivolve1cost?: number
  digivolve1level?: string
  digivolve2cost?: number
  digivolve2level?: string
  dp?: number
  dpcost?: number
  effect?: string
  image_url?: string
  level?: number
  name?: string
  playcost?: number
  rarity?: string
  stage?: string
  type?: string
}

export interface Search {
  attribute?: string
  cardnumber?: string
  cardset?: string
  color?: string
  digivolve1cost?: number
  digivolve1level?: string
  digivolve2cost?: number
  digivolve2level?: string
  dp?: number
  dpcost?: number
  effect?: string
  image_url?: string
  level?: number
  name?: string
  playcost?: number
  rarity?: string
  stage?: string
  type?: string
}

export interface SearchListMatch {
  attribute?: string
  cardnumber?: string
  cardset?: string
  color?: string
  digivolve1cost?: number
  digivolve1level?: string
  digivolve2cost?: number
  digivolve2level?: string
  dp?: number
  dpcost?: number
  effect?: string
  image_url?: string
  level?: number
  name?: string
  playcost?: number
  rarity?: string
  stage?: string
  type?: string
}

