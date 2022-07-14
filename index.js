const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([ 
    {
        type: "input",
        name:"projectName",
        message: "What is the name of your project:",
    },
    {
        type: "input",
        name:"desciption",
        message: "Desciption of the project:",
    },
    {
        type: "input",
        name:"usage",
        message: "'What is the usage information of this project?",
    },
    {
        type: "list",
        name:"license",
        message: "What license:",
        choices: ['osl-3.0', 'mit', 'Apache-2.0', ],
    }, 
    {
        type: "input",
        name:"installation",
        message: "How do you install your project step by step:",
    },
        {
        type: "input",
        name:"contributionGuidelines",
        message: "Is there any contribution guidelines:",
    },
    {
        type: "input",
        name:"contributionGuidelines",
        message: "Is there any contribution guidelines:",
    },
    {
        type: "input",
        name:"githubName",
        message: "What is your GitHub username?",
    }, {
        type: "input",
        name:"githubURL",
        message: "What is your GitHub profile URL?",
    }
  ])
  .then(({projectName,desciption,license,installation,contributionGuidelines,githubName,githubURL,usage}) => {
    let file =  `
# ${projectName}

## Content
Navigation  
 ---------------- 
 [1. Desciption](###Desciption) 

 [2. Usage](#Usage)         
 
 [3. License](#License)        
 
 [5. Test Instruction](#How-to-install-the-project) 
 
 [4. Contribution](#Contribution-Guidelines)      
  
 [6. GitHub Name](#What-is-your-github-Name)   
 
 [7. GitHub Link](#What-is-your-link-to-your-github-URL)   

### Desciption
${desciption}

### Usage
${usage} 

### License
${license} 

### How to install the project 
${installation}

### Contribution Guidelines 
${contributionGuidelines}

### What is your github Name 
${githubName}

### What is your link to your github URL 
[GitHub URL](${githubURL})
`;

    fs.writeFile("README.md", file  , err => {
        if (err) {
        console.error(err); }

    })

})
 