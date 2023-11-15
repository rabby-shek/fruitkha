import React from "react";

const Contact = () => {
  return (
    <>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* contact form */}
      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have you any question?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                  alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                  esse natus!
                </p>
              </div>
              <div id="form_status" />
              <div className="contact-form">
                <form
                  type="POST"
                  id="fruitkha-contact"
                  onsubmit="return valid_datas( this );"
                >
                  <p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </p>
                  <input
                    type="hidden"
                    name="token"
                    defaultValue="FsWga4&@f6aw"
                  />
                  <p>
                    <input type="submit" defaultValue="Submit" />
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map" /> Shop Address
                  </h4>
                  <p>
                    34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country
                    Name
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock" /> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book" /> Contact
                  </h4>
                  <p>
                    Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end contact form */}
    
    </>
  );
};

export default Contact;
