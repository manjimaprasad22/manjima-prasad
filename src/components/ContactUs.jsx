import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/style.css'
import toast, { Toaster } from 'react-hot-toast';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8m43nlm', 'template_2a27qec', form.current, {
        publicKey: 'KyDaCqx_aDXsDxfGq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email mail set successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Something went wrong')
        },
      );
  };

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="form-body col-md-6">
        <div className="getintouch text-center">Get in touch 🚀</div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="from_name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Subject</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="message" required></textarea>
          </div>
          <button type="submit" className="btn send col-12">Send</button>
        </form>
      </div>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </div>
  
  );
};