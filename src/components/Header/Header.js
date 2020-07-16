import React from 'react';
import './header.css'
import { Link } from 'react-scroll';

class Header extends React.Component {
    render() {
        return (
            <>
                <header id="header">
                    <h1 className="wow animate__animated animate__fadeInRight animate__faster">Hello, I'm <span>Matei Mircea</span>.</h1>
                    <h2 className="wow animate__animated animate__fadeInLeft animate__faster">I'm a front-end web developer</h2>
                    <Link
                        className="btn btn-outline-primary wow animate__animated animate__fadeInUp animate__faster"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        VIEW MY WORK <i className="fa fa-arrow-right" />
                    </Link>
                </header>
            </>
        );
    }
}

export default Header;