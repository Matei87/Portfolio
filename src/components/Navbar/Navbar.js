import React from 'react';
import './navbar.css';
import myresume from './../../myresume.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark' id='main-navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='header' spy={true} smooth={true} duration={500}>
            MM
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#mynav'
          aria-controls='mynav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='mynav'>
          <div className='navbar-nav ml-auto'>
            <div className='nav-item'>
              <Link
                activeClass='active'
                className='nav-link'
                to='header'
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                activeClass='active'
                className='nav-link'
                to='about'
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                activeClass='active'
                className='nav-link'
                to='projects'
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                activeClass='active'
                className='nav-link'
                to='interests'
                spy={true}
                smooth={true}
                duration={500}
              >
                Interests
              </Link>
            </div>
            <div className='nav-item'>
              <a href={myresume} className='nav-link'>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
