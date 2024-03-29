import React from 'react';
import './about.css';

import me from '../../img/me.jpg';

const About = () => {
  return (
    <section id='about'>
      <h3>
        About <span className='dot' />
      </h3>
      <div className='container'>
        <div className='row'>
          <div className=' col-sm-6 col-md-3 wow animate__animated animate__fadeIn animate__slower '>
            <div>
              <i className='fa fa-heart' />
            </div>
            <div>
              <h4>Dedicated</h4>
              <p>I'm dedicated to everything I do.</p>
            </div>
          </div>

          <div className=' col-sm-6 col-md-3 wow animate__animated animate__fadeIn animate__slower'>
            <div>
              <i className='fas fa-thumbs-up' />
            </div>
            <div>
              <h4>Optimistic</h4>
              <p>I'm not getting discouraged when I hit an obstacle.</p>
            </div>
          </div>

          <div className=' col-sm-6 col-md-3 wow animate__animated animate__fadeIn animate__slower'>
            <div>
              <i className='fas fa-dumbbell' />
            </div>
            <div>
              <h4>Worker</h4>
              <p>I think that work makes life meaningful.</p>
            </div>
          </div>

          <div className='col-sm-6 col-md-3 wow animate__animated animate__fadeIn animate__slower'>
            <div>
              <i className='fas fa-users' />
            </div>
            <div>
              <h4>Team player</h4>
              <p>A team achieves more if everyone is commited.</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-6 about-me wow animate__animated animate__fadeInLeft animate__fast'>
            <img src={me} alt='me' />
            <h4>Who's this guy?</h4>
            <p>
              My name is <span className='name'>Mircea</span> and I'm a
              front-end developer. I enjoy spending my free time increasing my
              knowledge of Web Development and building new and challenging
              projects.
            </p>
          </div>

          <div className='col-sm-12 col-md-6 skills wow animate__animated animate__fadeInRight animate__fast '>
            <span className='item1'>HTML5</span>
            <span className='item2'>CSS3</span>
            <span className='item3'>SASS</span>
            <span className='item4'>JavaScript</span>
            <span className='item5'>React</span>
            <span className='item6'>Redux</span>
            <span className='item7'>NextJS</span>
            <span className='item8'>NodeJS</span>
            <span className='item9'>TypeScript</span>
            <span className='item10'>NPM</span>
            <span className='item11'>Yarn</span>
            <span className='item12'>Git</span>
            <span className='item13'>JIRA</span>
            <span className='item14'>Bootstrap</span>
            <span className='item15'>Ant Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
