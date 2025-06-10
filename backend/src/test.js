const bcrypt = require('bcrypt');
const password = "admin"

bcrypt.hash(password, 10).then((si) => {
    console.log(si)
})
