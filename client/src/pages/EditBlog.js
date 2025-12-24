import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/blogs/${id}`).then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
        });
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/blogs/${id}`, { title, content });
        navigate('/');
    };

    return (
        <div>
            <h2>Edit Blog</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBlog;
