import React from 'react';
import coverImage from '../assets/about-picture/man-shadow.jpg';
function About() {
    return (
      <section className="my-5">
        <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" />
        
        <div className="my-2">
          <p>
          I am an exceptionally creative and dependable Entry Level Web Developer with a 
          stellar customer service record and superb work ethic. Broadly and deeply 
          knowledgeable in a wide variety of computer languages as well as the principles 
          and techniques of website construction and maintenance. Highly adept at conveying 
          complex technical information to a variety of professional and lay audiences 
          in a clear and understandable manner.
          </p>
        </div>
      </section>
    );
  }

export default About;