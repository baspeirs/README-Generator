 module.exports = {
    generateReadMe: ({githubUser, email, projectUrl, projectName, description, license, installCommand, knowToUse}) => (
`# ${projectName}
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

Check out the repo [here](${projectUrl})!
 
${description}

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Useage](#useage)
* [Contribute](#contribute)

## Installation
Use the package manager 
\`\`\`bash
${installCommand}
\`\`\`

## Useage
\`\`\`bash
${knowToUse}
\`\`\`

## Contribute
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
For any additional questions about the repo, contact [${githubUser}](undefined) at ${email}
`)
}