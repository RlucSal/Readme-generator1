const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0',],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];
// function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  fs.writeFile(fileName, markdownContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}
// function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const outputFileName = "README.md"; 
    writeToFile(outputFileName, answers);
    console.log(`Successfully generated ${outputFileName}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
// function call to initialize program
init();
