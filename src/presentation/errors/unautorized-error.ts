export class Unauthorized extends Error {
  constructor () {
    super('Passwords does not match')
    this.name = 'Unauthorized'
  }
}
