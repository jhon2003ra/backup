const Gasto = require('../models/gastos');
const gastosController = {};

//Metodo POST
gastosController.addGasto= async(req,res)=>{
    const gasto=new Gasto({
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}


//Metodos GET
gastosController.getGastos= async(req, res)=> 
{ 
    const gastos= await Gasto.find(); 
    res.json(gastos); 
} 

gastosController.getGasto=async(req,res)=>{ 
    console.log(req.params.id); 
    const gasto= await Gasto.findById(req.params.id); 
    res.json(gasto); 
} 

//Metodo UPDATE
gastosController.editGasto=async(req,res)=>{ 
    const {id}=req.params; 
    const gasto={ 
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    }; 
    await Gasto.findByIdAndUpdate(id, {$set:gasto},{new: true}); 
    res.json('status: Gasto actualizado'); 
} 

//Metodo PUT
gastosController.createGastos= async(req,res)=>{ 
    const gasto=new Gasto(req.body); 
    console.log(gasto); 
    await gasto.save(); 
    res.json('status: Gasto guardado'); 
} 

//Metodo DELETE
gastosController.deleteGasto=async(req,res)=>{
    const {id}=req.params; 
    await Gasto.findByIdAndDelete(id); 
    res.json('status: Gasto eliminado'); 
}

module.exports = gastosController;