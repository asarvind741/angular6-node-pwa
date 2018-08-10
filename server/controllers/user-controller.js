const User = require('../models/user.model');

let signupUser = (req, res) => {
    if(!!req.body ){
        User.findOne({emai: req.body.email}).then((user, error) => {
            if(!!error){
                res.status(401).json({Error: 'Some error occured'});
            }
            else if(!!user){
                console.log("user", user)
                res.status(402).json({ Error: 'User already exists with this email'})
            }
            else {
                User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                })
                .then((user, err) => {
                    if(err){
                        res.status(401).json({Error: 'User not created...'})
                    }
                    else if(!!user){
                        res.status(200).json(user);
                    }
                })
            }
        })
    }
    else {
        res.status(400).json({ Message: 'Some fields are missing...'})
    }
}

module.exports = {
    signupUser
}