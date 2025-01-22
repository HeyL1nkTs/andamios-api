const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const api = require('../controllers/api.controller')

router.get('/obtenerArchivo/:origen',api.obtenerArchivo)

router.get('/navbar/:area',api.navbar)
//PANTALLA DE INICIO
router.get('/obtenerCarrusel',api.obtenerCarrusel)
router.get('/obtenerComunicados',api.obtenerComunicados)
router.get('/obtenerAnuncio', api.obtenerAnuncio)
//obtiene las categorias a mostrar
router.get('/obtenerInicio/:area', api.obtenerInicio)
//EXTRA PARA OBTENER EL TIPO DE CATEGORIA
router.get('/obtenerTipoCategoria/:url', api.obtenerTipoCategoria)

//PANTALLA DE SUCURSALES
router.get('/obtenerImagenSucursal/:division', api.obtenerImagenSucursal)
router.get('/obtenerSucursales/:division', api.obtenerSucursales)

//FORMULARIO DE UNIRSE AL TEAM
router.post('/crearSolicitud',upload.any(),api.crearSolicitud)

router.use(express.json())
//CATEGORIAS
router.post('/obtenerSecciones',api.obtenerSecciones)
//SECCIONES
router.get('/obtenerSeccion/:url',api.getSeccion)


module.exports = router;
