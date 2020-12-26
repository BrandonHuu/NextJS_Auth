import {User} from '../../../../models/v1'
import dbConnect from '../../../../utils/dbConnect'
import JWT from 'jsonwebtoken';
import {Auth} from '../../../../config';

export default async function login(req, res) {
    //Only accept post requests
    if (req.method !== 'POST') return res.redirect('/')
    const {Email,Password} = req.body;

    await dbConnect();

    const user = await User.findOne({"Email_address" : Email});
    if(!user) return finish(res,401,'Invalid Credentials',{errors:'Email_Adress'})

    const isMatch = await user.comparePassword(Password);
    if(!isMatch) return finish(res,401,'Invalid Credentials',{errors:'Password'})

    //Return as a sucess with JWT token
    return finish(res,200,'Matching user found',{
        JWT: JWT.sign({
            _ID: user._ID,
            Username: user.Username,
            Email: user.Email_address
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