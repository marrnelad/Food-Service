import express from 'express';

// import * as db from '../utils/databaseUtils.js';

const router = new express.Router();

router.get('/', (req, res) => {
    res.send("sadasdsa");
});

module.exports = router;