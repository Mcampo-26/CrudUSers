const {Router}= require ('express')
const router = Router()

const {getUsu, createUsu, getUsuario, updateUsu, deleteUsu} = require('../controller/usuario.controller.js')

router.route('/')
.get(getUsu)
.post(createUsu)

router.route('/:id')
.get(getUsuario)
.put(updateUsu)
.delete(deleteUsu)


module.exports = router;