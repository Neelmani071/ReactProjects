import React from 'react';
import classes from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                 <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
           </button> */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       
        <Link to="/dashboard"activeStyle={{
                                    color: 'white',
                                    borderBottom: '3px solid white'
                                }} >Dashboard</Link>
        <Link to="/kem"activeStyle={{
                                    color: 'white',
                                    borderBottom: '3px solid white'
                                }} >Kem</Link>
         <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
