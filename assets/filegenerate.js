// we will need
    // Title (#)
    // Description (just regular text)
    // Table of Contents (links)
    // Installation (use the box thing) ----------- this will be difficult using back tick literal
    // Usage (use the box thing)
    // License ()
    // Contributing 
    // Tests
    // Questions (provide links to your github username and your email) 

module.exports = {
    generateReadMe: ({githubUser, email, projectUrl, projectName, description, license, installCommand, knowToUse, knowToCont}) => (`
    # ${projectName}

    ${projectUrl}
    ${description}

    ## Installation
    Use the package manager [${installCommand}]

    ## Useage
    ${knowToUse}

    ## Contribute
    ${knowToCont}

    Licenses: ${license}

    If you have any questions about the repo, open an issue or contact ${githubUser} at ${email}
    `)
}