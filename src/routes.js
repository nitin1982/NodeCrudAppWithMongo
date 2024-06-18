const express = require('express');
const Item = require('./models');

const router = express.Router();

// Create an item
router.post('/items', async (req, res) => {
    const { name, quantity, price } = req.body;
    const newItem = new Item({ name, quantity, price });
    try {
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read a single item
router.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an item
router.put('/items/:id', async (req, res) => {
    const { name, quantity, price } = req.body;
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, { name, quantity, price }, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
