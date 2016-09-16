//string var

var petName = prompt("what is my pets name?", "Type name here.");

switch (petName) {
    case "Rover":
        alert("My dog is named " + petName);
        break;

    case "Lassy":
        alert("My friends dog is named " + petName);
        break;

    case "Captain lipstick":
        alert("A dog named " + petName + " bit my toes off");

    default:
        alert("That is not my pets name.")
        break; 1
}

var gameLevel = 1;
var password = "mellon";

var userName = prompt("Enter your name");
var passwordCheck;

function CheckPassword() {

    switch (gameLevel) {
        case 1:
            passwordCheck = prompt(userName + " speak friend and enter.");
            if (password == passwordCheck) {
                gameLevel = 2;
            }
            CheckPassword();
            break;

        case 2:
            alert(gameLevel);
            break;

        case 3:

            break;

        default:
            break;
    }
}

CheckPassword ();