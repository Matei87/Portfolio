import React from 'react';
import './interests.css'

import coding from "../../img/coding.png";
import gym from "../../img/gym.jpeg";
import games from "../../img/games.png";


class Interests extends React.Component {
    render() {
        return (
            <section id="interests">
                <h3>Interests <span className="dot" /></h3>

                <div className="container">

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={coding} alt="coding-pic" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div>
                                <h4>Coding</h4>
                                <p>I’m passionate about coding. Because it is usable art. You can create something that people interact with, use, touch and work with.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 ">
                            <div>
                                <h4>Sports</h4>
                                <p>I always enjoy doing sports. Started with football when I was a child, athletics in high school and later in to martial arts. And now trying to live healthy by eating good food and going to the gym.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={gym} alt="gym-pic" />
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={games} alt="games-pic" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div>
                                <h4>Video Games</h4>
                                <p>I was pretty competitive in video games. Where I played for Romania in a sports game named FIFA and was in top 100 Romanians when FIFA 2017 was released. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Interests;