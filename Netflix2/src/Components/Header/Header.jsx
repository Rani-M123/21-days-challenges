import React, { useContext } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { AppThemeContext } from '../ThemeProvider';
const Header1 = () => {
  const { setDarkMode } = useContext(AppThemeContext)
  return (

    <div className="our-story-container" dir="ltr">
      <div className="our-story-header-wrapper">
        <div className="our-story-header">
          <div className='opacitybackground3'></div>
          <div className='opacitybackground4'></div>
          <g id="netflix-logo">
          </g>
          {/* </svg> */}
          <div class="screen-reader-text" style={{ color: 'red' }}><img className='nlogo' src="/nlogo.png" alt='netflixlogo' /></div>
          {/* </span> */}
        </div>
        <div className="lang-selection-container" id="lang-switcher"></div>
        <div className="language-picker-header+contaner" class="ui-select-wrapper"></div>
        <label for="lang-switcher-heade-select" class="ui-label">

        </label>
        <div class=" select-arrow">
          <select data-uia="language-picker-header" class="ui-select" id="lang-switcher-header-select" tabindex="0" placeholder="lang-switcher">
            <option selected="" lang="en" value="/in/" data-language="en" data-
              country="IN" >English</option>
            <option lang="hi" value="/in-hi/" data-language="hi" data-country="IN">
              हिन्दी</option>
          </select>
        </div>

        {/* <a href="/login" class="authLinks redButton" data-uia="header-login-link">Sign In</a> */}


        {/* <button>English</button> */}
        {/* <button>Signin</button> */}
        <div class="signin">
          <Link to="/Signin"><button className='signinbtn'>Sign in</button></Link>
        </div>
      </div>
    </div>



  );
}

const Header = () => {
  const { setDarkMode } = useContext(AppThemeContext)
  return (

    <div className="our-story-container" dir="ltr">
      <div className="main_header">
        <div className="main_header_container">

          <div className="logo">
            <img src="/nlogo.png" alt='netflixlogo' />
          </div>

          <div className="header_right">
            <div class="">
              <label for="lang-switcher-heade-select" class="ui-label"> </label>
              <select data-uia="language-picker-header" class="ui-select" id="lang-switcher-header-select" tabindex="0" placeholder="lang-switcher">
                <option selected="" lang="en" value="/in/" data-language="en" data-
                  country="IN" >English</option>
                <option lang="hi" value="/in-hi/" data-language="hi" data-country="IN">
                  हिन्दी</option>
              </select>
            </div> 

            <Link to="/Signin"><button className='signinbtn'>Sign in</button></Link>

          </div>
        </div>

      </div>
    </div>



  );
}

export default Header;
