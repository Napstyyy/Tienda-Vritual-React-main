import UserModel from "../models/UserModel.js";

export const getAllUsers = async (req,res) => {
    try {
        const Users  = await UserModel.findAll()
        res.json(Users)
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear un registro
export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
