import React from 'react';

const Header = () => {
    return (
        <div className='container header'>
            <div className='logo'>
            <h2>My Blog</h2>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/blogs">Add New Blog</a>
            </nav>
        </div>
    );
};

export default Header;