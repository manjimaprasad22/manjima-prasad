import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/style.css';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8m43nlm', 'template_2a27qec', form.current, {
        publicKey: '-v2OTR5kHJ7Ia7Nxc',
      })
      .then(
        () => {
          toast.success('Email sent successfully');
        },
        (error) => {
          toast.error('Something went wrong');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-shell">
      <div className="contact-card">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something exceptional.</h2>
          <p>Open to thoughtful product work, frontend collaborations, and high-impact opportunities.</p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail size={18} />
              <span>manjimaprasad22@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 9400666191</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Colaba, Mumbai</span>
            </div>
          </div>
        </div>

        <div className="form-body">
          <div className="getintouch">Get in touch</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="from_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
            </div>
            <button type="submit" className="primary-button form-submit">
              <Send size={18} /> Send message
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};