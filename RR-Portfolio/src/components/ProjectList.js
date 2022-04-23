import React, { useState } from "react";

const ProjectList = ({ title }) => {
    const [currentProject, setCurrentProject] = useState();
    
    const [projects] = useState([
        {
            title: 'Super Disco',
            description: 'This work day scheduler was built on the work of github user "Super-Disco" It incorporates the JQuery, Bootstrap, and Moment APIs This scheduler contains the current date and allows the user to input data into the text box and saves the data to local storage so when the user refreshes the page, the text stays in the field.',
            link: 'https://github.com/RyanRobCodes/super-disco'
        },
        {
            title: 'Team Profile Generator',
            description: 'The Team Profile Generator project takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
            link: 'https://github.com/RyanRobCodes/team-profile-generator/tree/main'
        },
        {
            title: 'The Social Network',
            description: 'This is a social network app where users can share their thoughts, react to friends thoughts, and create a friend list.',
            link: 'https://github.com/RyanRobCodes/The-Social-Network/tree/main'
        },
        {
            title: 'Password Generator',
            description: 'This app generates a password',
            link: 'https://ryanrobcodes.github.io/friendly-parakeet/'
        }
    ]);

    const currentProjects = projects.filter(project => project.title === title);
    
    
    
    return (
          <div className="flex-row">
            {currentProjects.map((image, i) => (
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
    };

export default ProjectList;