import readline from "readline-sync"

import color from "cli-color"

import  fs from "fs/promises"
import { write } from "fs";
import { stringify } from "querystring";



async function Library(){

  try {

    let name = readline.question("Enter your name : ");
    let email = readline.questionEMail("Enter the email here : ")
    let favBook = readline.question("Enter the Book name : ")

    let data = {
        name,
        email,
        favBook
    }

     await fs.writeFile("DataBase.json", JSON.stringify(data));

    //  ReAD THE file for confirmation

    let show = await fs.readFile("DataBase.json", "utf-8");
    console.log(show);
    

      
    
  } catch (error) {

    throw error;
    
  }


}

  Library();