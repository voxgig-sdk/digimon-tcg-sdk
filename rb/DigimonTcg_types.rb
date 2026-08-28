# frozen_string_literal: true

# Typed models for the DigimonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetAllCard entity data model.
#
# @!attribute [rw] attribute
#   @return [String, nil]
#
# @!attribute [rw] cardnumber
#   @return [String, nil]
#
# @!attribute [rw] cardset
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] digivolve1cost
#   @return [Integer, nil]
#
# @!attribute [rw] digivolve1level
#   @return [String, nil]
#
# @!attribute [rw] digivolve2cost
#   @return [Integer, nil]
#
# @!attribute [rw] digivolve2level
#   @return [String, nil]
#
# @!attribute [rw] dp
#   @return [Integer, nil]
#
# @!attribute [rw] dpcost
#   @return [Integer, nil]
#
# @!attribute [rw] effect
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] playcost
#   @return [Integer, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetAllCard = Struct.new(
  :attribute,
  :cardnumber,
  :cardset,
  :color,
  :digivolve1cost,
  :digivolve1level,
  :digivolve2cost,
  :digivolve2level,
  :dp,
  :dpcost,
  :effect,
  :image_url,
  :level,
  :name,
  :playcost,
  :rarity,
  :stage,
  :type,
  keyword_init: true
)

# Request payload for GetAllCard#list.
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] sortdirection
#   @return [String, nil]
GetAllCardListMatch = Struct.new(
  :sort,
  :sortdirection,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] attribute
#   @return [String, nil]
#
# @!attribute [rw] cardnumber
#   @return [String, nil]
#
# @!attribute [rw] cardset
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] digivolve1cost
#   @return [Integer, nil]
#
# @!attribute [rw] digivolve1level
#   @return [String, nil]
#
# @!attribute [rw] digivolve2cost
#   @return [Integer, nil]
#
# @!attribute [rw] digivolve2level
#   @return [String, nil]
#
# @!attribute [rw] dp
#   @return [Integer, nil]
#
# @!attribute [rw] dpcost
#   @return [Integer, nil]
#
# @!attribute [rw] effect
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] playcost
#   @return [Integer, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Search = Struct.new(
  :attribute,
  :cardnumber,
  :cardset,
  :color,
  :digivolve1cost,
  :digivolve1level,
  :digivolve2cost,
  :digivolve2level,
  :dp,
  :dpcost,
  :effect,
  :image_url,
  :level,
  :name,
  :playcost,
  :rarity,
  :stage,
  :type,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] attribute
#   @return [String, nil]
#
# @!attribute [rw] card
#   @return [String, nil]
#
# @!attribute [rw] cardnumber
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] dpcost
#   @return [Integer, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] playcost
#   @return [Integer, nil]
#
# @!attribute [rw] series
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] sortdirection
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SearchListMatch = Struct.new(
  :attribute,
  :card,
  :cardnumber,
  :color,
  :dpcost,
  :level,
  :playcost,
  :series,
  :sort,
  :sortdirection,
  :stage,
  :type,
  keyword_init: true
)

