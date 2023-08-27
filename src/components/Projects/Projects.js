import React from 'react';
import './projects.css';

import movie_cloud from '../../img/cinema.png';
import made_clothing from '../../img/site2.png';
import natours from '../../img/Natours.jpg';
import world_countries from '../../img/world-countries.png';
import blog_boy from '../../img/blog.png';
import maogym from '../../img/maogym.png';

const Projects = () => {
  return (
    <section id='projects'>
      <h3>
        Projects <span className='dot' />
      </h3>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/movie-cloud/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={movie_cloud}
                    alt='movie-cloud'
                    className='card-img-top'
                  />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>React</div>
                <h4 className='card-title'>Movie Cloud</h4>
                <p className='card-text'>Discover Movies &amp; TV Shows</p>
                <p className='card-description'>
                  Movie Cloud is a React application where you can find
                  information about latest Movies, TV Shows or Crew.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/movie-cloud'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://matei87.github.io/movie-cloud/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp animate__delay-1s'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/made-clothing/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={made_clothing}
                    alt='made-clothing'
                    className='card-img-top'
                  />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>React</div>
                <h4 className='card-title'>Made Clothing</h4>
                <p className='card-text'>Browse Clothing Online</p>
                <p className='card-description'>
                  Made Clothing is a shopping MERN application for clothing.
                  Discover the latest fashion trends.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/made-clothing-FE-BE'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://made-clothing.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp animate__delay-2s'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/maogym/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={maogym} alt='maogym' className='card-img-top' />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>TypeScript</div>
                <h4 className='card-title'>Maogym</h4>
                <p className='card-text'>Fitness Website</p>
                <p className='card-description'>
                  MAOGYM is a Single Page Application website for Fitness
                  Lovers.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/maogym'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://matei87.github.io/maogym//'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp animate__delay-3s'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/countries/#/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={world_countries}
                    alt='world-countries'
                    className='card-img-top'
                  />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>React</div>
                <h4 className='card-title'>World Countries</h4>
                <p className='card-text'>Info about Countries</p>
                <p className='card-description'>
                  Discover some info about World Countries.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/countries'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://matei87.github.io/countries/#/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp animate__delay-4s'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/BlogBoy/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={blog_boy} alt='blog-boy' className='card-img-top' />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>Bootstrap</div>
                <h4 className='card-title'>BlogBoy</h4>
                <p className='card-text'>Blog for latest IT News</p>
                <p className='card-description'>
                  A responsive Bootstrap Blog theme with admin page.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/BlogBoy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://matei87.github.io/BlogBoy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-4 wow animate__animated animate__fadeInUp animate__delay-5s'>
            <div className='card'>
              <div className='card-header'>
                <a
                  href='https://matei87.github.io/Natours/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={natours} alt='natours' className='card-img-top' />
                </a>
              </div>

              <div className='card-body'>
                <div className='card-category'>React</div>
                <h4 className='card-title'>Natours</h4>
                <p className='card-text'>Travel Platform</p>
                <p className='card-description'>
                  Natours is a Travel Platform where you can browse your
                  favorite destination to visit and explore.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://github.com/Matei87/Natours'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  CODE
                  <i className='fab fa-github' />
                </a>
                <a
                  href='https://matei87.github.io/Natours/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary'
                >
                  LIVE
                  <i className='fas fa-rocket' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
