
const usuarioCtrl={}

const Usuario=require('../models/Usuario')


usuarioCtrl.getUsu=async(req,res)=>{
    const usuarios=await Usuario.find()
    res.json(usuarios)
}




usuarioCtrl.createUsu=async(req,res)=>{
    const {nombre,apellido,correo,telefono, edad}=req.body
    const newUsu =new Usuario({
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        telefono:telefono,
         edad:edad})
    await newUsu.save();
    res.json({message:'Usuario a sido creado'})
    
}





usuarioCtrl.getUsuario=async(req,res)=>{
const usuario=await Usuario.findById(req.params.id)
res.json(usuario);
}


usuarioCtrl.deleteUsu=async(req,res)=>{
await Usuario.findByIdAndDelete(req.params.id)
res.json({message:'Usuario eliminado'})
}

usuarioCtrl.updateUsu=async(req,res)=>{
    const {nombre,apellido,correo,telefono, edad}=req.body
    await Usuario.findByIdAndUpdate(req.params.id,{
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        telefono:telefono,
         edad:edad
    })
    res.json({message:'Usuario actualizado'})
}


module.exports=usuarioCtrl;