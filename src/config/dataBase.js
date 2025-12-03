import mongoose from "mongoose";


export const connectDB = async () =>{
    try{
        const conexao=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb conectado: ${conexao.connection.host}`);
    }catch (error){
        console.log("erro ao carregar o banco" ,error)
        process.exit(1);

    }
}