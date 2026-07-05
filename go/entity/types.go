// Typed models for the DigimonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetAllCard is the typed data model for the get_all_card entity.
type GetAllCard struct {
	Attribute *string `json:"attribute,omitempty"`
	Cardnumber *string `json:"cardnumber,omitempty"`
	Cardset *string `json:"cardset,omitempty"`
	Color *string `json:"color,omitempty"`
	Digivolve1cost *int `json:"digivolve1cost,omitempty"`
	Digivolve1level *string `json:"digivolve1level,omitempty"`
	Digivolve2cost *int `json:"digivolve2cost,omitempty"`
	Digivolve2level *string `json:"digivolve2level,omitempty"`
	Dp *int `json:"dp,omitempty"`
	Dpcost *int `json:"dpcost,omitempty"`
	Effect *string `json:"effect,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Playcost *int `json:"playcost,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetAllCardListMatch is the typed request payload for GetAllCard.ListTyped.
type GetAllCardListMatch struct {
	Attribute *string `json:"attribute,omitempty"`
	Cardnumber *string `json:"cardnumber,omitempty"`
	Cardset *string `json:"cardset,omitempty"`
	Color *string `json:"color,omitempty"`
	Digivolve1cost *int `json:"digivolve1cost,omitempty"`
	Digivolve1level *string `json:"digivolve1level,omitempty"`
	Digivolve2cost *int `json:"digivolve2cost,omitempty"`
	Digivolve2level *string `json:"digivolve2level,omitempty"`
	Dp *int `json:"dp,omitempty"`
	Dpcost *int `json:"dpcost,omitempty"`
	Effect *string `json:"effect,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Playcost *int `json:"playcost,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Attribute *string `json:"attribute,omitempty"`
	Cardnumber *string `json:"cardnumber,omitempty"`
	Cardset *string `json:"cardset,omitempty"`
	Color *string `json:"color,omitempty"`
	Digivolve1cost *int `json:"digivolve1cost,omitempty"`
	Digivolve1level *string `json:"digivolve1level,omitempty"`
	Digivolve2cost *int `json:"digivolve2cost,omitempty"`
	Digivolve2level *string `json:"digivolve2level,omitempty"`
	Dp *int `json:"dp,omitempty"`
	Dpcost *int `json:"dpcost,omitempty"`
	Effect *string `json:"effect,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Playcost *int `json:"playcost,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Attribute *string `json:"attribute,omitempty"`
	Cardnumber *string `json:"cardnumber,omitempty"`
	Cardset *string `json:"cardset,omitempty"`
	Color *string `json:"color,omitempty"`
	Digivolve1cost *int `json:"digivolve1cost,omitempty"`
	Digivolve1level *string `json:"digivolve1level,omitempty"`
	Digivolve2cost *int `json:"digivolve2cost,omitempty"`
	Digivolve2level *string `json:"digivolve2level,omitempty"`
	Dp *int `json:"dp,omitempty"`
	Dpcost *int `json:"dpcost,omitempty"`
	Effect *string `json:"effect,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Playcost *int `json:"playcost,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
