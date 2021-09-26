'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');

//Busca pelos dados no banco
router.get('/:id', controller.get);
//insere dados no banco
router.post('/cadastro', controller.post);

module.exports = router;   