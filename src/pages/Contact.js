import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_bx8gfsv', 'template_8j1d9ud', form.current, 'user_tROl8PrUano4UII32nyMJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='section'>
        <div className='section-title'>
            <h1>Let's Get in Touch</h1>
            {/* <a href = "mailto:purtha.shaariyaar@ontariotechu.net">shoot me an email</a> */}
                <form ref={form} onSubmit={sendEmail} className='contact'>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className='button'/>
                </form>
        </div>
    </section>
  );
};

export default Contact;

