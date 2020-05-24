// elements of the readme page
    // # makes a header // more pounds, smaller heading (like the h tags)
    // * is a list item and tab in to make list inside list
    // ```sh [content] ``` creates a.. box? lol
    // to make a link   
        // put your hyperlink text in []
        // copy and paste the link in ()

    
//require files here
const fs = require("fs");
const { questions } = require("./assets/questions");
const inquirer = require("inquirer");
const util = require("util");
const { generateReadMe } = require("./assets/filegenerate")
// const { questions } = require("./assets/questions")
// create a promise for writing to a file
const asyncWriteFile = util.promisify(fs.writeFile)

async function askQuestions() {
    try {
        // await the questions and save them to variables (remember, they can be called by thier values)
        const response = await inquirer.prompt(questions);
        // write them to a file
        await asyncWriteFile("README.md/abc", generateReadMe(response));
        console.log("Sucessfully wrote to file! (hopefully lol)")
    }
    catch(error) {
        console.log(error)
    }
}

askQuestions()