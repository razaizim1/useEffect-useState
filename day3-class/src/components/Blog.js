import React from "react";
import "../App.css";



const Blog = ({ blogs, removePost }) => {
    return (
        <div className="blogStyle">
            {blogs.map(blog => <div>
                <div className="blog">
                    <h2>Name: {blog.title}</h2>
                    <h2>Author: {blog.body}</h2>
                    <button onClick={() => removePost(blog.id)}>Delete Blog</button>
                </div>
            </div>)}
        </div>
    );
};

export default Blog;