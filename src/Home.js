import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";


// Stateless functional component
const Home = (e) => {

    // let name = 'Darshan';

    const [name, setName] = useState('Ghorpade');

    const [age, setAge] = useState(22);

    const handleClick = () => {
        // console.log('hello, world', e);
        // to change the name after clicking button use hook that is useState
        setName('Darshan');
        setAge('23');
        // console.log(name);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello, ' + name, e.target);
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect hook is way to run code on every render
    // re-render triggers this function
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // });

    // you don't want to run a function after every renders but at certain renders
    // to do that we can use dependency array
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // }, [name]);
    // [] will allow to run useEffect after the first render only

    // use props to pass blogs because
    // 1. it gonna make our BlogList component more reusable
    // 2. it allows me still use blogs in home component in the future
    // 3. it allows me to show how to use props

    // const [blogs, setBlogs] = useState([
    //     {title: 'My new Website', body: 'lorem ipsum...', author: 'Darshan', id: 1},
    //     {title: 'Welcome to party!', body: 'lorem ipsum...', author: 'Dhananjay', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Dashrath', id: 3},
    // ]);

    // custom hook
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            {/* <h1>HomePage</h1> */}

            { error && <div>{ error }</div> }

            {/* conditional loading message */}
            {isPending && <div>Loading...</div>}

            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

            {/* use of filter method to show blogs of Darshan only */}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'Darshan') } title= "Darshan's Blogs!" handleDelete={handleDelete}/> */}

            {/* { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>   
                </div>
            )) } */}

            {/* <p>{ name } is { age } years old.</p>
        <button onClick={ handleClick }>Click me</button> */}
            {/* <button onClick={ (e) => handleClickAgain('Darshan', e) }>Click me again</button> */}

            {/* <button onClick={() => setName('Darshan')}> Change Name</button>
            <p>{ name }</p> */}
        </div>
    );
}

export default Home;