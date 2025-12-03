import express from "express"
import 'dotenv/config' 


const app= express();
const port= 3000;


app.get('/', (req ,res) =>{
    console.log("tudo ok")
    res.json({message:'sucesso'})
})
app.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})