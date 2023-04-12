import { useState } from 'react';

const Home = () => {


    const [blogs, stBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
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
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>

                    </div>
                ))}


        </div>
    );
}

export default Home;
