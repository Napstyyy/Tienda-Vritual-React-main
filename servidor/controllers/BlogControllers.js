//importamos el modelo

import BlogModel from "../models/BlogModel.js";

//mostrar todos los registros
export const getAllBlogs = async (req,res) => {
    try {
        const blogs  = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar un registro
export const getBlog =async (req,res) => {
    try {
       const blog = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(blog[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// crear un registro
export const createBlog = async (req,res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            'message': 'registro creado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//actualizar registro
export const updateBlog = async (req,res) =>{
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
//eliminar registro

export const deleteBlog = async (req,res) =>{
    try {
        await BlogModel.destroy(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro borrado'
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}