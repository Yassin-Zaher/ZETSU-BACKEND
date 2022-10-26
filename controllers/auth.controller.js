const User = require("../models/user")
const bcrypt = require("bcrypt")


exports.signup = async (req, res, next) => {
      
        const {email, password} = req.body;
        console.log("email " + email, "password" + password);
      
        //const hashedPassword = await bcrypt.hash(password, 12);
    
        /* const userDetails = {
          name: name,
          email: email,
          password: hashedPassword,
        }; */
    
        //const result = await User.save(userDetails);
    
        //res.status(201).json({ message: 'User registered!' });

 }