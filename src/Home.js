import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
   
    // let name = 'mario'

    // hook (this is called use states) it start with the name Use , it is way to make a reactive value
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = (e) => {
    //     // this value is reactive that if above value changes it change in template as well
    //     setName('jksdfkjsdfh');
    //     setAge(45);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello' +name, e.target);
    // }
    return (
        <div className="home">
            {/* <h1>Home Page</h1> */}
            {/* <p>{name} is {age} old</p>
            <button onClick={handleClick}>  Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
           
            {/* in this blogs is used as props  */}
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')}  title="Mario's Blogs" /> */}
            {/* <button onClick={() => setName('luigi')}>Change name</button> */}
            {/* <p>{ name }</p> */}

        </div>
    );
}

export default Home;
