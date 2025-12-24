import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const res = await axios.get('http://localhost:5000/blogs');
        setBlogs(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/blogs', { title, content });
        setTitle('');
        setContent('');
        fetchBlogs();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/blogs/${id}`);
        fetchBlogs();
    };

    return (
        <div>
            <h2>All Blogs</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <Link to={`/edit/${blog._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(blog._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
}

export default Home;
