import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBlog from './pages/EditBlog';

function App() {
    return (
        <div className="App">
            <h1>Blogpost</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:id" element={<EditBlog />} />
            </Routes>
        </div>
    );
}

export default App;
