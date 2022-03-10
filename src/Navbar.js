// component is just a function that return jsx element

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The DOJO Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                {/* Router Links */}
                <Link to="/">Home</Link>

                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>New Blog</Link>
            </div>    
        </nav>
    );
}
 
export default Navbar;