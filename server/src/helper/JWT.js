const jwt = require('jsonwebtoken')

function createToken (user){
const secret = 'ivan'

return jwt.sign(user[0], secret)
}

module.exports = createToken