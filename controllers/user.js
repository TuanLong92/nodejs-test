import { body, validationResult } from 'express-validator';
const login = async (req,res) =>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('POST login user');
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