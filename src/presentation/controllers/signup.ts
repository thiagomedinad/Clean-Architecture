import { MissingParamError } from '../errors/missing-param-error'
import { Unauthorized } from '../errors/unautorized-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest, unauthorized } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
      return unauthorized(new Unauthorized())
    }

    return {
      statusCode: 200,
      body: ''
    }
  }
}
