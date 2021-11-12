
const express = require('express');
const { epok } = require('../../db');
const router = express.Router();
router.get('/users', async (req, res) => {
    let result = await epok.query('SELECT NOW() as now')
    res.send(result.rows[0].now);
});

router.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
});

router.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
});

router.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
});
module.exports = router;