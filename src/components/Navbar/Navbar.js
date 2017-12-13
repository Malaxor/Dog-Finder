
import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => 

<nav className="navbar navbar-default">
	<div className="container-fluid">
		<div className="navbar-header">
			<Link to="/" className="navbar-brand">Dogs</Link>
    	</div>
    
    	<ul className="nav navbar-nav">
    		<li className={window.location.pathname === "/" || window.location.pathname === "/about" ? "active" : ""}>
     			<Link to="/">About</Link>
    		</li>

    		<li className={window.location.pathname === "/discover" ? "active" : ""}>
    			<Link to="/discover">Discover</Link>
    		</li>
    		
    		<li className={window.location.pathname === "/search" ? "active" : ""}>
    			<Link to="/search">Search</Link>
    		</li>
    	</ul>
    </div>
</nav>;    				    

export default Navbar;