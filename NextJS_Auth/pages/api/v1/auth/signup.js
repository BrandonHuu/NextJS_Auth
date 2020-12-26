import {User} from '../../../../models/v1'
import dbConnect from '../../../../utils/dbConnect'
import JWT from 'jsonwebtoken';
import {Auth} from '../../../../config';
import {serialize} from 'cookie'

export default async function signup(req, res) {
    //Only accept post requests
    if (req.method !== 'POST') return res.redirect('/')
    const {Username,Email,Password} = req.body;

    await dbConnect();

    let user = await User.findOne({"Email_address" : Email});
    if(user)  return finish(res,200,'User already exits') 

    //Creates new users
    const newAccount = User.create({
        Username: Username,
        Email_address : Email,
        Password: Password
    });

    //Return as a sucess with JWT token
    return finish(res,200,'Account Created...',{
       JWT: JWT.sign({
           _ID: newAccount._ID,
           Username: Username,
           Email: Email
       },Auth.JWT_Secret,{
        expiresIn: '7d'
       })
    })
}

function finish(res,status = 200, message = 'complete', data = {}){
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        status,
        message,
        data
    }))
}