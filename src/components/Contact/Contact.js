import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [validated, setValidated] = useState(false);
  const [feedback, setFeedback] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }

      const params = {
        user_id: process.env.REACT_APP_PUBLIC,
        service_id: process.env.REACT_APP_SERVICEID,
        template_id: process.env.REACT_APP_TEMPLATEID,
        template_params: {
          user_name: name,
          user_email: email,
          message: textArea,
        },
      };

      const req = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (req.ok === true) {
        setName('');
        setEmail('');
        setTextArea('');
        setValidated(true);
        setFeedback('Message succesfully sent!');
      } else if (req.ok === false) {
        setValidated(false);
        setFeedback('Something went wrong, try again!');
      }
    } catch (error) {
      console.log('FAILED...', error, error.text);
    }
  };

  return (
    <section id='contact'>
      <h3>
        Contact <span className='dot' />
      </h3>

      <div className='container'>
        <div className='row gap-4'>
          <form className='col-12' onSubmit={onSubmit}>
            <div className='d-flex justify-content-between'>
              <div className='mb-3 col-5'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>

                <input
                  type='text'
                  className='form-control rounded-0 p-2'
                  id='name'
                  placeholder='Matei'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className='mb-3 col-5'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>

                <input
                  type='email'
                  className='form-control rounded-0 p-2'
                  id='email'
                  placeholder='matei@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern='^[^ ]+@[^ ]+\.[a-z]{2,6}$'
                  required
                />
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='textArea' className='form-label'>
                Message
              </label>

              <textarea
                className='form-control rounded-0 p-2'
                id='textArea'
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
                rows='3'
                placeholder='Your message'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='btn btn-primary rounded-0 w-25 p-2'
            >
              Submit
            </button>

            <p
              className='mt-2'
              style={{
                color: validated ? '#14b49c' : '#e31b6d',
                fontWeight: '600',
              }}
            >
              {feedback}
            </p>
          </form>

          <div className='col-12 d-flex justify-content-center align-items-center'>
            <a
              href='https://github.com/Matei87'
              className='btn btn-outline-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github' />
            </a>

            <a
              href='https://www.linkedin.com/in/mateimircea/'
              className='btn btn-outline-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in' />
            </a>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Made by <span>Matei Mircea</span> @ 2020 - {new Date().getFullYear()}{' '}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
