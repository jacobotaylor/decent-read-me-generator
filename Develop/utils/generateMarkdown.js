// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![license](https://img.shields.io/badge/license-MIT-green)

  ## Description
 ${data.description}
 
 ## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Instructions](#instructions)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Installation
 ${data.installation}
 
 ## Instructions
 ${data.instructions}
 
 ## Contributing
 ${data.contributing}
 
 ## Tests
 ${data.tests}
 
 ## Questions
 ${data.questions}
 
 `};



module.exports = generateMarkdown;

