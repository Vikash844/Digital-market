import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="companyname" id="companyname" pattern="[^ @]*@[^ @]*" placeholder="Your Company Name" required="" />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                  </fieldset>
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
  )
}

export default Contact