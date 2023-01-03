import React from 'react';
import logo from '../../Assets/images/logo.png';
// import {Link} from 'react-router-dom'
const Header = () => {
  
  return (
    <div className="our-story-header-wrapper">
      <div className="our-story-header">
        <div className="logo">
         <img src={logo} />
        </div>
        
r
        <div className="lang-selection-containe">
          <button>English</button>
          <button>Signin</button>
           {/* <Link to="/Signin"><button>Sign in</button></Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
