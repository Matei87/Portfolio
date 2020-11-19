import React from 'react';
import './contact.css';


class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <h3>Contact <span className="dot" /></h3>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <a href="mailto:mrc.matei@protonmail.com" className="btn btn-outline-primary">
                                <i className="far fa-envelope" />
                            </a>

                            <a href="https://github.com/Matei87" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>

                            <a href="https://www.linkedin.com/in/mateimircea/" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>

                    </div>
                </div>

                <footer> <p>Made by <span>Matei Mircea</span> @ {new Date().getFullYear()} </p></footer>
            </section>
        );
    }
}

export default Contact;