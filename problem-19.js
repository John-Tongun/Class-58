//Author: John Tongun Wani <John-Tongun-Wani>

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Select an option:

1 - Welcome message
2 - System status
3 - Exit
4 - Help
`);

rl.question("Enter your choose: ", (option) => {

    const choice = parseInt(option);

    switch (choice) {
        case 1:
            console.log("Welcome to the system");
            break;

        case 2:
            console.log("System status: Runing Correctly");
            break;

        case 3:
            console.log("Good bye");
            break;

        case 1:
            console.log("elp: Contact the system administrator");
            break;

        default:
            console.log("Invalid Option. Select a valid menu option");

    }
    rl.close();

});

