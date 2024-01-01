// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
Welcome contributions from the community! To contribute to this project, please follow these guidelines:
${data.contributing}

## Tests

To run tests for this project, follow these instructions:
${data.tests}

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: ${data.github}(https://github.com/${data.github})
- Email: ${data.email}
  `;

}

module.exports = generateMarkdown;
