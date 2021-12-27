const userModel = require('../Models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.singUp = async (req, res) => {
    const { name, email_id, phone_no, password } = req.body;
    if (!(name && email_id && phone_no && password)) {
        return res.status(400).json({
            message: "Data is not correct"
        })
    } else {
        const existingUser = await userModel.findOne({ email_id: email_id })
        console.log("existingUser", existingUser)
        if (existingUser) {
            return res.status(409).json({ status: 409, message: "User already Exits Please login...." });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email_id,
            phone_no,
            password: encryptedPassword
        }).then((user) => {
            console.log("User Created Successfully")
            return res.status(201).json({
                id: user._id,
                name: user.name,
                email_id: user.email_id,
                phone_no: user.phone_no
            });
        }).catch((err) => {
            console.log("Can not create user", err)
            return res.status(400).json({
                err: "not able to save user in DB"
            })

        })
    }
}

exports.singIn = async (req, res) => {
    const { email, password, phone } = req.body;

    //verifying user data
    if (!(email_id && phone_no)) {
        return res.status(400).json({
            message: "Email id or Phone_no missing.."
        })
    } else if (!(password)) {
        return res.status(400).json({
            message: "Password missing.."
        })
    }

    //checking for presence in database
    userModel.findOne({$or: [
        {email_id:email},
        {phone_no:phone}
    ]}).then((res) =>{
      return res.status(400).json({
            message:"email_id and Phone Number does not exist please Register..."
        })
    })

    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET,{expiresIn : "2h"});

    ///putting token in cookies
    res.cookie("token", token, { expire: new Date() + 999 })

     //send response to frontend
     const { _id, name, email_id,phone_no } = userModel;
     return res.json({
         token, user: {
             _id, name, email, email_id,phone_no
         }
     })
}
