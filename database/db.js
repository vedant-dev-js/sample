import mongoose from "mongoose"

const con=()=>{

    mongoose.connect(`${process.env.DATABASE_URL}demo`).then(()=>{
        console.log("data base is connect");
    }).catch(()=>{
        console.log("database not connected");
    })

}

export default con