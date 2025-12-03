import express from "express"
import User from "../models/Users";

const router =express.Router();


router.post('/registro', async (req,res)=>{
    const{usuario , senha} =req.body;
    try{
        const novoUsuario= await User.create({usuario , senha})
        res.status(201).json({
            message:'usuario registrado (Arq Rotas)',
            usuario:novoUsuario.usuario
        });
    }catch (error){
        if(error.code === 11000){
            return res.status(409).json({message :'Usuario ja esta cadastrado'})
        }
        res.status(500).json({message:'Erro interno!!'})

    }

    
    
})