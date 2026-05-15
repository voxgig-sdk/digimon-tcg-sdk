
import { Context } from './Context'


class DigimonTcgError extends Error {

  isDigimonTcgError = true

  sdk = 'DigimonTcg'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DigimonTcgError
}

