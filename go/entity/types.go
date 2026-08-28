// Typed models for the DigimonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/digimon-tcg-sdk/go/core"
)

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
	Sort *string `json:"sort,omitempty"`
	Sortdirection *string `json:"sortdirection,omitempty"`
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
	Card *string `json:"card,omitempty"`
	Cardnumber *string `json:"cardnumber,omitempty"`
	Color *string `json:"color,omitempty"`
	Dpcost *int `json:"dpcost,omitempty"`
	Level *int `json:"level,omitempty"`
	Playcost *int `json:"playcost,omitempty"`
	Series *string `json:"series,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Sortdirection *string `json:"sortdirection,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
