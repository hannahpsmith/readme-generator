// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch(license) {
    case "MIT":
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    case "APACHE 2.0":
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/license/apache-2-0)';
        break;
    case "GPL 3.0":
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
    case "BSD 3":
        licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/license/BSD-3-Clause)';
        break;
    case "None":
        licenseBadge = '';
        break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT":
        licenseLink = 'https://opensource.org/license/mit';
        break;
    case "APACHE 2.0":
        licenseLink = 'https://opensource.org/license/apache-2-0';
        break;
    case "GPL 3.0":
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
    case "BSD 3":
        licenseLink = 'https://opensource.org/license/BSD-3-Clause';
        break;
    case "None":
        licenseLink = '';
        break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``
  } else {
    return `This project is licensed under the ${license} license. Please feel free to read the license in full detail [here](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Credits
${data.credits}

## Questions
Please contact me with any additional questions.

Github: ${data.username} (https://github.com/${data.username})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
