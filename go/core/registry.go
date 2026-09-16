package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewGetAllCardEntityFunc func(client *DigimonTcgSDK, entopts map[string]any) DigimonTcgEntity

var NewSearchEntityFunc func(client *DigimonTcgSDK, entopts map[string]any) DigimonTcgEntity

