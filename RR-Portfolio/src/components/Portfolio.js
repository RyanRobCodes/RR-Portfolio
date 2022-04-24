import React, { useState } from "react";
import Project from '../components/Project'

function Portfolio ()  {
    
    const [projects] = useState([
        {
            title: 'Super-Disco',
            description: 'This work day scheduler was built on the work of github user "Super-Disco" It incorporates the JQuery, Bootstrap, and Moment APIs This scheduler contains the current date and allows the user to input data into the text box and saves the data to local storage so when the user refreshes the page, the text stays in the field.',
            category: 'profiles',
            link: 'https://github.com/RyanRobCodes/super-disco',
            repo: 'https://ryanrobcodes.github.io/super-disco/'
        },
        {
            title: 'Team-Profile-Generator',
            description: 'The Team Profile Generator project takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
            category: 'profiles',
            link: 'https://drive.google.com/file/d/1wPyVL-pAui1B0H5Pk8bRSwJ6lCRUc7qf/view',
            repo: 'https://github.com/RyanRobCodes/team-profile-generator'
        },
        {
            title: 'The-Social-Network',
            description: 'This is a social network app where users can share their thoughts, react to friends thoughts, and create a friend list.',
            category: 'profiles',
            link: 'https://drive.google.com/file/d/17qh7BF9q2d8BQwt3kG6ME3DZfrHm_QeF/view',
            repo: 'https://github.com/RyanRobCodes/The-Social-Network'
        },
        {
            title: 'Password-Generator',
            description: 'This app generates a password',
            category: 'profiles',
            link: 'https://github.com/RyanRobCodes/friendly-parakeet',
            repo: 'https://github.com/RyanRobCodes/friendly-parakeet'
        }
    ]);    
    
    return (
      <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              // <img
              //   src={require(`../assets/profiles/${category}/${i}.png`).default}
              //   alt={image.title}
              //   className="img-thumbnail mx-1"
              //   key={image.title}
              // />
              <Project
              project = {project}
              key={"project" + idx}
              />
            ))}
          </div>
          </div>
      );
    };

export default Portfolio;