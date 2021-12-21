const Fornecedores = require('../models/fornecedoresModel');
const express = require('express');
const router = express.Router();
const path = require('path');

const controllerName = path.basename(__filename).split('Controller')[0];

router.get('/', async (req, res) => {

  try {
    const fornecedores = await Fornecedores.findAll();
    res.json(fornecedores);
  } catch (err) {
    res.status(400).json(err)
  }

})

router.post('/', async (req, res) => {
  const novoFornecedor = req.body;

  try {
    const result = await Fornecedores.create(novoFornecedor)
    res.json(result)
  } catch (err) {
    res.status(400).json(err)
  }

})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id)

  try {
    const fornecedor = await Fornecedores.findOne({
      where: { id }
    })

    if (fornecedor) {
      res.json(fornecedor)
      return;
    }

    res.status(400).send('Fornecedor não encontrado')

  } catch (err) {

    console.log(err)
    res.status(400).json(err)
  }

})

router.patch('/update/:id', async (req, res) => {
  const id = req.params.id;
  const usuarioAtualizado = req.body;

  try {
    const result = await Fornecedores.update(usuarioAtualizado, {
      where: { id }
    })

    res.end();

  } catch (err) {
    res.status(400).json(err);
  }
})

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Fornecedores.destroy({ where: { id } })
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ err })
  }


})


module.exports = app => {
  app.use('/' + controllerName, router)
}
