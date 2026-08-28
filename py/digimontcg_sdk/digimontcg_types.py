# Typed models for the DigimonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetAllCard(TypedDict, total=False):
    attribute: str
    cardnumber: str
    cardset: str
    color: str
    digivolve1cost: int
    digivolve1level: str
    digivolve2cost: int
    digivolve2level: str
    dp: int
    dpcost: int
    effect: str
    image_url: str
    level: int
    name: str
    playcost: int
    rarity: str
    stage: str
    type: str


class GetAllCardListMatch(TypedDict, total=False):
    sort: str
    sortdirection: str


class Search(TypedDict, total=False):
    attribute: str
    cardnumber: str
    cardset: str
    color: str
    digivolve1cost: int
    digivolve1level: str
    digivolve2cost: int
    digivolve2level: str
    dp: int
    dpcost: int
    effect: str
    image_url: str
    level: int
    name: str
    playcost: int
    rarity: str
    stage: str
    type: str


class SearchListMatch(TypedDict, total=False):
    attribute: str
    card: str
    cardnumber: str
    color: str
    dpcost: int
    level: int
    playcost: int
    series: str
    sort: str
    sortdirection: str
    stage: str
    type: str
