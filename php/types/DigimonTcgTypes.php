<?php
declare(strict_types=1);

// Typed models for the DigimonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetAllCard entity data model. */
class GetAllCard
{
    public ?string $attribute = null;
    public ?string $cardnumber = null;
    public ?string $cardset = null;
    public ?string $color = null;
    public ?int $digivolve1cost = null;
    public ?string $digivolve1level = null;
    public ?int $digivolve2cost = null;
    public ?string $digivolve2level = null;
    public ?int $dp = null;
    public ?int $dpcost = null;
    public ?string $effect = null;
    public ?string $image_url = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?int $playcost = null;
    public ?string $rarity = null;
    public ?string $stage = null;
    public ?string $type = null;
}

/** Match filter for GetAllCard#list (any subset of GetAllCard fields). */
class GetAllCardListMatch
{
    public ?string $attribute = null;
    public ?string $cardnumber = null;
    public ?string $cardset = null;
    public ?string $color = null;
    public ?int $digivolve1cost = null;
    public ?string $digivolve1level = null;
    public ?int $digivolve2cost = null;
    public ?string $digivolve2level = null;
    public ?int $dp = null;
    public ?int $dpcost = null;
    public ?string $effect = null;
    public ?string $image_url = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?int $playcost = null;
    public ?string $rarity = null;
    public ?string $stage = null;
    public ?string $type = null;
}

/** Search entity data model. */
class Search
{
    public ?string $attribute = null;
    public ?string $cardnumber = null;
    public ?string $cardset = null;
    public ?string $color = null;
    public ?int $digivolve1cost = null;
    public ?string $digivolve1level = null;
    public ?int $digivolve2cost = null;
    public ?string $digivolve2level = null;
    public ?int $dp = null;
    public ?int $dpcost = null;
    public ?string $effect = null;
    public ?string $image_url = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?int $playcost = null;
    public ?string $rarity = null;
    public ?string $stage = null;
    public ?string $type = null;
}

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?string $attribute = null;
    public ?string $cardnumber = null;
    public ?string $cardset = null;
    public ?string $color = null;
    public ?int $digivolve1cost = null;
    public ?string $digivolve1level = null;
    public ?int $digivolve2cost = null;
    public ?string $digivolve2level = null;
    public ?int $dp = null;
    public ?int $dpcost = null;
    public ?string $effect = null;
    public ?string $image_url = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?int $playcost = null;
    public ?string $rarity = null;
    public ?string $stage = null;
    public ?string $type = null;
}

