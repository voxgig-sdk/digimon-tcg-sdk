package voxgigdigimontcgsdk

import (
	"github.com/voxgig-sdk/digimon-tcg-sdk/core"
	"github.com/voxgig-sdk/digimon-tcg-sdk/entity"
	"github.com/voxgig-sdk/digimon-tcg-sdk/feature"
	_ "github.com/voxgig-sdk/digimon-tcg-sdk/utility"
)

// Type aliases preserve external API.
type DigimonTcgSDK = core.DigimonTcgSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DigimonTcgEntity = core.DigimonTcgEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DigimonTcgError = core.DigimonTcgError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetAllCardEntityFunc = func(client *core.DigimonTcgSDK, entopts map[string]any) core.DigimonTcgEntity {
		return entity.NewGetAllCardEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.DigimonTcgSDK, entopts map[string]any) core.DigimonTcgEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDigimonTcgSDK = core.NewDigimonTcgSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
