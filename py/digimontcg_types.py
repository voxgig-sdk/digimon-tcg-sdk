# Typed models for the DigimonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetAllCard:
    attribute: Optional[str] = None
    cardnumber: Optional[str] = None
    cardset: Optional[str] = None
    color: Optional[str] = None
    digivolve1cost: Optional[int] = None
    digivolve1level: Optional[str] = None
    digivolve2cost: Optional[int] = None
    digivolve2level: Optional[str] = None
    dp: Optional[int] = None
    dpcost: Optional[int] = None
    effect: Optional[str] = None
    image_url: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    playcost: Optional[int] = None
    rarity: Optional[str] = None
    stage: Optional[str] = None
    type: Optional[str] = None


@dataclass
class GetAllCardListMatch:
    attribute: Optional[str] = None
    cardnumber: Optional[str] = None
    cardset: Optional[str] = None
    color: Optional[str] = None
    digivolve1cost: Optional[int] = None
    digivolve1level: Optional[str] = None
    digivolve2cost: Optional[int] = None
    digivolve2level: Optional[str] = None
    dp: Optional[int] = None
    dpcost: Optional[int] = None
    effect: Optional[str] = None
    image_url: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    playcost: Optional[int] = None
    rarity: Optional[str] = None
    stage: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Search:
    attribute: Optional[str] = None
    cardnumber: Optional[str] = None
    cardset: Optional[str] = None
    color: Optional[str] = None
    digivolve1cost: Optional[int] = None
    digivolve1level: Optional[str] = None
    digivolve2cost: Optional[int] = None
    digivolve2level: Optional[str] = None
    dp: Optional[int] = None
    dpcost: Optional[int] = None
    effect: Optional[str] = None
    image_url: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    playcost: Optional[int] = None
    rarity: Optional[str] = None
    stage: Optional[str] = None
    type: Optional[str] = None


@dataclass
class SearchListMatch:
    attribute: Optional[str] = None
    cardnumber: Optional[str] = None
    cardset: Optional[str] = None
    color: Optional[str] = None
    digivolve1cost: Optional[int] = None
    digivolve1level: Optional[str] = None
    digivolve2cost: Optional[int] = None
    digivolve2level: Optional[str] = None
    dp: Optional[int] = None
    dpcost: Optional[int] = None
    effect: Optional[str] = None
    image_url: Optional[str] = None
    level: Optional[int] = None
    name: Optional[str] = None
    playcost: Optional[int] = None
    rarity: Optional[str] = None
    stage: Optional[str] = None
    type: Optional[str] = None

