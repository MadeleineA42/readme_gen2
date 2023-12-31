// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

This project is licensed under the terms of the ${license} license. ${renderLicenseLink(license)}`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)};
  ## Description
  ${data.description}
  
  ## Table Of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributors](#contributors)
  -[License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.credits}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;