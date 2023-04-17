import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>My Blog </h1>
            <div className="links">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            {/* <a href="/create">New Blog</a> */}
        </div>
        </nav>
        

     );
}
 
export default Navbar ;