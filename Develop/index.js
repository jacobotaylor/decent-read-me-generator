// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//link for developing read me
const createDoc = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      name: 'title',
      message: 'What would you like to title project?'
    },
    {
      name: 'description',
      message: 'Give a description for the ReadMe.',
    },
    {
      name: 'installation',
      message: 'Tell us what you will need to install.',
    },
    {
      name: 'instructions',
      message: 'Please provide instructions for use.',
    },
    {type: 'list',
    message: 'What license is this project under?',
    name: 'License',
    choices:
      ['BSD', 'GPL','MIT'],
    },
    {
      name: 'contributing',
      message: 'Who were all contributing parties?',
    },
    {  
      name: 'tests',
      message: 'What were the tests?',
    },
    {  
      name: 'questions',
      message: 'What is the link to your GitHub account?',
    },
    {  
      name: 'questions',
      message: 'What is your email address?',
    },
  ])};


const writeFile = data => {
  fs.writeFile('./dist/README.md', data, err => {
      if (err) {
          console.log(err);
          return; 
      } else {
          console.log('nice')
      }
  })
}; 


questions()

.then(answers => {return createDoc(answers);})
.then(data => {return writeFile(data);})
.catch(err => {console.log(err)})


