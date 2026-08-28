-- Typed models for the DigimonTcg SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetAllCard
---@field attribute? string
---@field cardnumber? string
---@field cardset? string
---@field color? string
---@field digivolve1cost? number
---@field digivolve1level? string
---@field digivolve2cost? number
---@field digivolve2level? string
---@field dp? number
---@field dpcost? number
---@field effect? string
---@field image_url? string
---@field level? number
---@field name? string
---@field playcost? number
---@field rarity? string
---@field stage? string
---@field type? string

---@class GetAllCardListMatch
---@field sort? string
---@field sortdirection? string

---@class Search
---@field attribute? string
---@field cardnumber? string
---@field cardset? string
---@field color? string
---@field digivolve1cost? number
---@field digivolve1level? string
---@field digivolve2cost? number
---@field digivolve2level? string
---@field dp? number
---@field dpcost? number
---@field effect? string
---@field image_url? string
---@field level? number
---@field name? string
---@field playcost? number
---@field rarity? string
---@field stage? string
---@field type? string

---@class SearchListMatch
---@field attribute? string
---@field card? string
---@field cardnumber? string
---@field color? string
---@field dpcost? number
---@field level? number
---@field playcost? number
---@field series? string
---@field sort? string
---@field sortdirection? string
---@field stage? string
---@field type? string

local M = {}

return M
