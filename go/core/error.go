package core

type DigimonTcgError struct {
	IsDigimonTcgError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDigimonTcgError(code string, msg string, ctx *Context) *DigimonTcgError {
	return &DigimonTcgError{
		IsDigimonTcgError: true,
		Sdk:              "DigimonTcg",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DigimonTcgError) Error() string {
	return e.Msg
}
