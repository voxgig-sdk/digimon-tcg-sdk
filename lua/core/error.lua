-- DigimonTcg SDK error

local DigimonTcgError = {}
DigimonTcgError.__index = DigimonTcgError


function DigimonTcgError.new(code, msg, ctx)
  local self = setmetatable({}, DigimonTcgError)
  self.is_sdk_error = true
  self.sdk = "DigimonTcg"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DigimonTcgError:error()
  return self.msg
end


function DigimonTcgError:__tostring()
  return self.msg
end


return DigimonTcgError
