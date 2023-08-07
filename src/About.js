import React from 'react';

const About = () => {
  return (
    <div className="container my-3" id='about'>
      <div className="row">
        {/* Content on the left */}
        <div className="col-md-6">
          <div className="about-content">
            <h2>About us</h2>
            <h1>Welcome to TimberHub - Your One-Stop Timber Yard in Embu!</h1>
            <p>
              At TimberHub, we take pride in being Embu's leading timber yard,
              offering an extensive range of high-quality timber products and
              exceptional services to meet all your construction and woodworking needs.
              With decades of experience in the industry, our team is dedicated to providing
              you with the best timber solutions and excellent customer service.
            </p>
            <p>
              At TimberHub, we understand the importance of quality timber for any project.
              That's why we offer a wide selection of timber products sourced from sustainable forests and trusted suppliers.
              From rough-cut timber to finished lumber, we have everything you need for your construction, renovation, and crafting projects
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="tt3.jpeg" 
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
