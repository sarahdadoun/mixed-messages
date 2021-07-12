/*  
    
    Mixed messages is a program that prints out random messages 
    from the tv show Friends.

    Everytime the program prints a new message, it will prompt 
    the user for a response to either print a new one or not.
    
*/

// DONE create an array with all messages. 
// create a function that randomly prints one of the index's
// create a function that prompts the user for an answer.
// create a function that quits the program.

// 28 indexes, each containing a quote from 'Friends'
let quotes = [  "\"We were on a BREAK!\"", 
                "\"See? He's her lobster.\"", 
                "\"Hi, I'm Chandler. I make jokes when I'm uncomfortable.\"",
                "\"I wish I could, but I don't want to.\"",
                "\"PIVOT!\"", 
                "\"Could I be wearing any more clothes?\"", 
                "\"I don't even have a \'pla\'\"", 
                "\"How you doin'?\"", 
                "\"OHHHH. MYYYY. GODDDD.\"", 
                "\"Okay, you have to stop the Q-tip when there's resistance!\"", 
                "\"Oh, come on, Will, just take off your shirt and tell us.\"", 
                "\"They don't know that we know they know we know.\"", 
                "\"You cant just give up.. is that what a dinosaur would do?\"", 
                "\"Come on ross, you're a palaeontologist. Dig a little deeper.\"",
                "Rachel: \“I’m not someone who goes after a guy five minutes after he’s divorced.\"\nMonica: \"No, you go after them five minutes before they get married.\"", 
                "\"Marriage — not for everybody.\"", 
                "Joey: \"It’s never taken me a week to get over a relationship.\"\nMonica: \“It’s never taken you more than a shower to get over a relationship.\"", 
                "\"You're over see? When were you... under me?\"", 
                "Reporter: \"I like that. What’s your name?\"\nPhoebe: \"Phoebe. That’s, P, as in Phoebe, H, as in hoebe, O as in oebe, E, as in ebe, B, as in bebe, and E as in… Ello there mate.\"", 
                "Joey: \"Could you close that window? My nipples could cut glass over here.\"\nPhoebe: \"Really? Mine get me out of tickets.\"",
                "\"Oh, are you setting Ross up with someone? Does she have a wedding dress?\"",
                "\"Oh, no. I think you've mistaken me for the amazing Chandler.\"",
                "\"Oh, no. I think you've mistaken me for the amazing Chandler.\"",
                "\"I\'m not so good with the advice. Can I interest you in a sarcastic comment?\"",
                "Janice: \"What a small world!\"\nChandler: \"And yet I never run into Beyoncé!\"",
                "\"Hi. I’m Chandler. I make jokes when I’m uncomfortable.\"",
                "\"I can handle this. ‘Handle’ is my middle name. Actually, ‘handle’ is the middle of my first name.\" — Chandler",
                "\"You can’t fire me! I make your decisions and I say, \‘I\’m not fired.\’ Ha.\" — Monica"];


// Picks random quote from the array 'quotes'
// Picks random number to choose from the 'quote' array and returns it.
function randomMessage(){
    let randomNum = Math.floor(Math.random() * 27);
    return randomNum;
}

// Uses the function 'randomMessage to print a random message.
function printMessage(){
    console.log("\n\n" + quotes[randomMessage()] + "\n\n");
}

// Takes in user's response and returns it if valid
/* const userResponse = () => {
    let valid = false;

    do{ // Repeat until you get a valid response
        const prompt = require('prompt-sync')({sigint: true});
        let response = prompt('\n( y / n )\n');

        if (response === 'y' || 'n') { // if they answer with y or n
            valid = true;
            return response;
        }
        else{
            console.log(`Oops! Looks like you're made a mistake.\nPlease respond with 'y' for yes, and 'n' for no.`);
        }
    }while(valid === false)
    
}; */
function userResponse(){
    let valid = false;

    do{ // Repeat until you get a valid response
        const prompt = require('prompt-sync')({sigint: true});
        let response = prompt('\n( y / n )\n');

        if (response === 'y' || 'n') { // if they answer with y or n
            valid = true;
            return response;
        }
        else{
            console.log(`Oops! Looks like you're made a mistake.\nPlease respond with 'y' for yes, and 'n' for no.`);
        }
    }while(valid === false)
    
};


// Opening message that only appears when the programm starts
function welcomeMessage(response){
    console.log("\n\nWelcome to the Friends program.\nTo print a quote, respond with either \'y\' or \'n\'.");
}

welcomeMessage();
if (userResponse()) {
    printMessage();
}

//console.log(quotes[27]);