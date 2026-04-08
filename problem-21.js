//Auther: John Tongun Wani <John-Tongun-Wani>


const trafficLight = prompt("enter the trafic Light state:").toLowerCase();
let message = "";

switch (trafficLight) {
    case "red":
        message = "stop the Vehicle.";

    case "yellow":
        message = "prepare to stop/go.";

    case "green":
        message = "You can go.";

    default:
        message = "invalid traffic Light color"
}

alert(message);