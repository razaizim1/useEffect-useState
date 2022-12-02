import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
    // const [name, setName] = useState('Razai Zim');
    // const [age, setAge] = useState(10);

    const [blogs, setblogs] = useState([
        { title: 'Blog 1', writer: 'Razai Zim', id: 1 },
        { title: 'Blog 2', writer: 'Zim', id: 2 },
        { title: 'Blog 3', writer: 'Razai', id: 3 }
    ])

    // function changeName() {
    //     setName("Jenifa");
    // }

    function removePost(id) {
        let newPost = blogs.filter(blog => blog.id !== id);
        setblogs(newPost);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setblogs(data)
                });
        }, 1000)
    },);

    const [loading, setLoading] = useState(true);


    return (
        <div className="container">
            {/* <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={changeName}>Change</button>
            <button onClick={() => setAge (10 * 5)}> Change Age</button>
            {blogs.map(blog => <div>
                <li>{blog.title}</li>                <li>{blog.writer}</li>
                </div>)} */}
            {/* <h1>First Blog Post<Blog blogs={blogs.filter(blog => blog.title == "Blog 5")}></Blog></h1> */}

            <h1>All Blog:</h1>
            {
                loading && (
                    <div>
                        <h2>Loading.....</h2>
                    </div>
                )
            }
            <Blog blogs={blogs} removePost={removePost}></Blog>
        </div>

    );
};

export default Home;