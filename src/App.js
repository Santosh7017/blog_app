
import Home from './Home';
import Navbar from './Navbar';


function App() {
  // const link = "https://www.google.com";
  // const title = "welcome to the new blog";
  // const likes = 50;
  return (
    <div className="App">
     <div className="content">
      
    <Navbar></Navbar>
    <Home />
      {/* <h1> {title} </h1>
      <p>Liked {likes} times </p> */}

      {/* <p> {person} </p> */}
      {/* <p> {10} </p>
      <p> {"helllo world"} </p>
      <p> {Math.random() *1000  } </p>
      <a href={link}>Google </a> */}

     </div>
    </div>
  );
}

export default App;
