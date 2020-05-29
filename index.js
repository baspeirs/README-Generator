//require files here
const fs = require("fs");
const { questions } = require("./assets/questions");
const inquirer = require("inquirer");
const util = require("util");
const { generateReadMe } = require("./assets/filegenerate")

// create a promise for writing to a file
const asyncWriteFile = util.promisify(fs.writeFile)

async function askQuestions() {
    try {
        // await the questions and save them to variables (remember, they can be called by thier values)
        const response = await inquirer.prompt(questions);
        // write them to a file
        await asyncWriteFile("./assets/README.MD", generateReadMe(response));
        console.log("Sucessfully wrote to file! (hopefully lol)")
    }
    catch(error) {
        console.log(error)
    }
}

askQuestions()