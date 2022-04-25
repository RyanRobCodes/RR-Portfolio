import React from 'react';
import ResumeDocument from '../assets/resume/Sample-Resume.jpeg';

function Resume() {

  return (
    <section className="my-5">
      Download my <a href={ResumeDocument}>Resume</a>
      <div className="my-2">
          <h2>Front-end Proficiencies</h2>
            <ol>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>JavaScript</ul>
                <ul>jQuery</ul>
                <ul>responsive design</ul>
                <ul>React</ul>
                <ul>Bootstrap</ul>
            </ol>
        <h2>Back-end Proficiencies</h2>
            <ol>
                <ul>APIs</ul>
                <ul>Node</ul>
                <ul>Express</ul>
                <ul>MySQL, Sequelize</ul>
                <ul>MongoDB,Mongoose</ul>
                <ul>REST</ul>
                <ul>GraphQL</ul>
            </ol>    
      </div>
    </section> 
  );
}

export default Resume;
