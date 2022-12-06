const User = require('../models/user');

const login = (req, res) => {
    User.findOne()
        .then((result) => {
            if(result.username === req.body.username && result.password === req.body.password){
                res.sendStatus(200);
            }
            else{
                res.sendStatus(400);
            }
        })
        .catch((err) => console.error(err));
}

module.exports = {login};