const jwt = require("jsonwebtoken");

const verify = (req, res, next) =>{
    const header = req.headers.authorization;
    console.log("hhheeeeaaaadder!!", header);
    if(!header){
        return res.status(401).json("No autorizado")
    }
    // bearer 872391237412puo3i4u12o3u4o123iu4joi12u3
    const token = header.split(" ")[1];
    if(!token){
        return res.status(401).json("No autorizado")
    }
    jwt.verify(token, process.env.SECRET, (error, decoded) =>{
        if(error){
            return res.status(401).json("No Autorizado")
        }
        next();
    });
};
module.exports = verify;