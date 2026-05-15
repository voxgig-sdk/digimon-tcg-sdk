package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetAllCardEntityFunc func(client *DigimonTcgSDK, entopts map[string]any) DigimonTcgEntity

var NewSearchEntityFunc func(client *DigimonTcgSDK, entopts map[string]any) DigimonTcgEntity

