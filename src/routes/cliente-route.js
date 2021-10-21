'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');

//Busca pelos dados no banco
router.get('/:id', controller.get);
//insere dados no banco
router.post('/cadastro', controller.post);
//delete dados do banco
router.post('/delete', controller.delete);
//update dados banco
router.post('/update', controller.update);

module.exports = router;   