const express = require('express');
const router = express.Router();

const serverFunctions = require("../controllers/controllers");

router.get('/', serverFunctions.get); // Defino la ruta GET y utilizo función 'get'

router.post('/', serverFunctions.post); // Defino la ruta POST y utilizo función 'post'

router.put('/', serverFunctions.put); // Defino la ruta PUT y utilizo función 'put'

router.delete('/', serverFunctions.deletee); // Defino la ruta DELETE y utilizo función 'delete'

module.exports = router; // Exportación del enrutador