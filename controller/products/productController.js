import Product from "../../models/productSchema.js"


export const demo=async(req,res)=>{
    
    try{

       const {product,title,price,category} =  req.body

     const newProduct =  await Product.create({product,title,price,category})

     if(!newProduct  || newProduct==null){
       return  res.send({message:"product not added ",success:false})
     }else{ 
               res.send({message:"product addedd successfully",success:true})
     }


    }catch(error){
        res.send(error.message)
    }

}

export const product=async(req,res)=>{
    try {
      const allProducts = await Product.find()
        
      if(allProducts==null || !allProducts ){
        return res.send({message:"empty products",success:false})
      }else{
         res.send({message:allProducts,success:true})
      }
    
    } catch (error) {
        return res.send({message:error.message,success:false})
    }
}

export const deleteproducts=async(req,res)=>{
    try {
       const {id} =  req.query
        const DProduct = await Product.findByIdAndDelete({_id:id})
    
        if(DProduct==null || !DProduct ){
            return res.send({message:"product not deleted",success:false})
          }else{
             res.send({message:"product deleted",success:true})
          }
        
    } catch (error) {
        return res.send({message:error.message,success:false})
    }
}
export const updateproducts=async(req,res)=>{
    try {
           const {id} =  req.query
            const {category,title,price,product} = req.body
          const update =   Product.findByIdAndUpdate({_id:id},{product,title,price,category})
          if(update==null || !update ){
            return res.send({message:"product not updated",success:false})
          }else{
             res.send({message:"product update",success:true})
          }
            
  
        } catch (error) {
            return res.send({message:error.message,success:false})
    }
}
const singleproduct=async(req,res)=>{
    try {
        const {id}=req.query
      const data = await  Product.findById({_id:id})
      if(data==null || !data ){
        return res.send({message:"no data",success:false})
      }else{
         res.send({message:data,success:true})
      }
    
    } catch (error) {
        
    }
}



