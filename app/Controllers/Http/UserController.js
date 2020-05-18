'use strict'

const User = use('App/Models/User');
const Database = use('Database')
class UserController {
    async store ({ request }) {
        const data = request.only(["username", "email", "password"]);    
        const user = await User.create(data);
    
        return user;
    }

    async index ({ request }) {
        const user = await User.all();
    
        return user;
    }
}

module.exports = UserController
