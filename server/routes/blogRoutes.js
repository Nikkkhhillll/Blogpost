const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new blog
router.post('/', async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
