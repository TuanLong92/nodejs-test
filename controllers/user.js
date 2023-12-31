import { response } from 'express';
import { body, validationResult } from 'express-validator';
const login = async (req,res) =>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    res.status(200).json({ 
        message: 'login successful', 
        data: 'details user here' 
    });    
}
const register = async (req,res) => {
    res.send('POST register user');
}
const getDetailUser = async (req,res) => {

}

//many other functions
export default {
    login,
    register,
    getDetailUser
}