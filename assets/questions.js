// this file is for the questions object which we will be exporting to the program
// dont forget to use module.exports  

module.exports = {
    questions: [
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "githubUser"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the URL to your project?",
            name: "projectUrl"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Give a brief discription of your app",
            name: "description"
        },
        {
            type: "list",
            message: "What license should your project have?",
            choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
            name: "license"
            // MIT, APACHE 2.0 , GPL 3.0, BSD 3, None 
            // ------------ later, find a way to create a multiple choise option in the terminal ------------------
        },
        {
            type: "input",
            message: "what command should be run to install dependencies?",
            default: "npm i",
            name: "installCommand"
        },
        {
            type: "input",
            message: "what does the user need to know about using the repo?",
            name: "knowToUse"
        },
    ]
}