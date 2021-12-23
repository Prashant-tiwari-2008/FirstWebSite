// const user = require('../Models/user');
const user = require('../Models/user');

exports.singUp =(req) =>{
    // const data = req
    if(data.isEmpty){
        return res.status(400).json({
            message:"Data is not correct"
        })
    }
    const data = new data(req)
    data.save((err,data) =>{
        if(err){
            return res.status(400).json({
                error:"not able to save user data"
            })
        }
        res.json({
            name:data.name,
            email:data.email,
            id:data.id,
            phone_no:data.phone_no,
            message:"user save succesffflly"

        })
    })
}