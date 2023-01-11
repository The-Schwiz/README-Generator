// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'List your collaborators to whom you would like to give credit.',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'What is your GitHub username (case sensitive)',
        name: 'github',
      },
      {
        type: 'checkbox',
        message: 'Choose a license for your project.',
        name: 'license',
        choices: ["None","MIT", "Unlicense", "Apache_2.0","GPLv3", "BSD_2--Clause", "BSD_3--Clause", "Boost_1.0", "EPL_1.0", "AGPL_v3", "GPL_v2", "LGPL_v3", "MPL_2.0"]
      },
      {
        type: 'input',
        message: 'What is your email address so people can contact you to gather information about you project?',
        name: 'contact',
      },
  ])

  

  .then ((data) => {
    const readMePageContent = generateREADME(data);
    
    fs.writeFile('README.md', readMePageContent, (err) =>
    err ? console.error(err) : console.log("data stored")
    
    )});
    
    
    const generateREADME = ({title, description, usage, installation, credits, github, license, contact}) => {
        return `
        
![License](https://img.shields.io/badge/License-${license}-blue.svg)
        
# ${title} 

## Table of Contents

1. [Description](#description)
2. [Usage](#usage)
3. [Installation](#installation)
4. [Credits](#credits)
5. [GitHub](#github)
6. [License](#license) 
7. [Contact](#contact)

## Description 
        
${description}
        
## Usage 
        
${usage}
        
## Installation 
        
${installation}
        
## Credits 
        
${credits}
        
## GitHub 
        
My GitHub Link: https://github.com/${github}
        
## License 

${license}

## Contact 

${contact}

`
}

