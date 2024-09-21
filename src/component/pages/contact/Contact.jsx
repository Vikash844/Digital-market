import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    companyname: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send('service_iiiuxsc', 'template_n0tftth', formData, 'cPdDx-9eL6kCV-9SK');
      console.log('Email successfully sent!', result.text);
      setSuccessMessage('Your message has been sent successfully!'); // Set success message
      setFormData({  // Clear form
        name: '',
        surname: '',
        email: '',
        companyname: '',
        message: ''
      });

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setSuccessMessage('There was an error sending the message. Please try again.'); // Set error message

      // Hide the error message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading  wow bounceIn my-5" data-wow-duration="1s" data-wow-delay="0.2s">
              <h2 className=' text-center'>Contact <span>us</span></h2>
            </div>
          </div>
          <div className="col-lg-12 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
            {/* Display the success or error message */}
            {successMessage && (
              <div role="alert" className="alert alert-success" style={{ color: successMessage.includes('error') ? 'red' : 'green', fontWeight: 'bold' }}>
                {successMessage}
              </div>
            )}
            <form id="contact" action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="name" id="name" placeholder="Name" autoComplete="on" required value={formData.name} onChange={handleChange} />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="surname" id="surname" placeholder="Surname" autoComplete="on" required value={formData.surname} onChange={handleChange} />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="companyname" id="companyname" placeholder="Your Company Name" required value={formData.companyname} onChange={handleChange} />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" className="form-control" id="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="main-button">Send Message</button>
                </div>
              </div>
              <div className="contact-dec">
                <img src="assets/images/contact-decoration.png" alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
