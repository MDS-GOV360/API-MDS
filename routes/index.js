const express = require('express')
const router = express.Router()
const { Usuario } = require('../models')

// GET: listar todos
router.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.findAll()
  res.json(usuarios)
})

// POST: criar novo
router.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body)
    res.status(201).json(novoUsuario)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário', detalhes: err })
  }
})

module.exports = router
