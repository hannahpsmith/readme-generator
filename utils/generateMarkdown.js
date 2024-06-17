// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch(license) {
    case "MIT":
        licenseBadge = '[]';
        break;
    case "APACHE 2.0":
        licenseBadge = '[]';
        break;
    case "GPL 3.0":
        licenseBadge = '[]';
        break;
    case "BSD 3":
        licenseBadge = '[]';
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
        licenseLink = '';
        break;
    case "APACHE 2.0":
        licenseLink = '';
        break;
    case "GPL 3.0":
        licenseLink = '';
        break;
    case "BSD 3":
        licenseLink = '';
        break;
    case "None":
        licenseLink = '';
        break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

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
