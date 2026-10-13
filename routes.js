const express = require('express');
const router = express.Router();
const db = require('./db');

// GET /veiculo - Listar todos os veículos
router.get('/veiculo', (req, res) => {
    db.query('SELECT * FROM veiculo', (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro no servidor' });
        res.json(results);
    });
});

// GET /veiculo/:id - Buscar veículo por ID
router.get('/veiculo/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM veiculo WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro no servidor' });
        if (results.length === 0) return res.status(404).json({ mensagem: 'Veículo não encontrado' });
        res.json(results[0]);
    });
});

// POST /veiculo - Cadastrar novo veículo
router.post('/veiculo', (req, res) => {
    const { placa, modelo, proprietario } = req.body;
    if (!placa || !modelo || !proprietario) {
        return res.status(400).json({ erro: 'Preencha todos os campos' });
    }
    const query = 'INSERT INTO veiculo (placa, modelo, proprietario) VALUES (?, ?, ?)';
    db.query(query, [placa, modelo, proprietario], (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao cadastrar' });
        res.status(201).json({ mensagem: 'Cadastrado com sucesso!', id: result.insertId, placa, modelo, proprietario });
    });
});

// PUT /veiculo/:id - Atualizar veículo
router.put('/veiculo/:id', (req, res) => {
    const { id } = req.params;
    const { placa, modelo, proprietario } = req.body;
    const query = 'UPDATE veiculo SET placa = ?, modelo = ?, proprietario = ? WHERE id = ?';
    db.query(query, [placa, modelo, proprietario, id], (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao atualizar' });
        if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Veículo não encontrado' });
        res.json({ mensagem: 'Atualizado com sucesso!' });
    });
});

// DELETE /veiculo/:id - Excluir veículo
router.delete('/veiculo/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM veiculo WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao excluir' });
        if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Veículo não encontrado' });
        res.json({ mensagem: 'Excluído com sucesso!' });
    });
});

module.exports = router;