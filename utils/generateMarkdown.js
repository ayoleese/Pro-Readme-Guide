// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

return `## License

This project is licensed under the [${license} license](${renderLicenseLink('./LICENSE/')}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const questionsSection = `## Questions
- **Email:** ${data.email}
- **GitHub Username:** ${data.userName}`

  return `# ${data.title} 
  ${licenseBadge}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation

${data.dependencies}

## Usage

${data.repos}

## Test

${data.test}

${questionsSection}

## Contribution

${data.contribution}


${licenseSection}
`;
}

module.exports = generateMarkdown;

