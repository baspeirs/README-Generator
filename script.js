// elements of the readme page
    // # makes a header // more pounds, smaller heading (like the h tags)
    // * is a list item and tab in to make list inside list
    // ```sh [content] ``` creates a.. box? lol
    // to make a link   
        // put your hyperlink text in []
        // copy and paste the link in ()
    //


// we will need
    // Title (#)
    // Description (just regular text)
    // Table of Contents (links)
    // Installation (use the box thing)
    // Usage (use the box thing)
    // License ()
    // Contributing 
    // Tests
    // Questions (provide links to your github username and your email) 
    
//require files here
const fs = require("fs")
const { questions } = require("./assets/questions")
const inquirer = require("inquirer")

async function askQuestions() {
    try {
        await inquirer.prompt(questions);
    }
    catch(error) {
        console.log(error)
    }
}

askQuestions()