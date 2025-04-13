var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//for (var i = 0; i < numberOfDrumButtons; i++) {
    //document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //alert("I got clicked");
    //});
//}

document.addEventListener('keypress', gono);

function gono(event) {
    let key = event.key;
    switch (key) {
        case "w":
        case "W":
            let sound = new Audio("floor-tom.mp3");
            sound.play();
            break;
        case "a":
        case "A":
            let sound1 = new Audio("tom-2.mp3");
            sound1.play();
            break;
        case "s":
        case "S":
            let sound2 = new Audio("tsnare-drum.mp3");
            sound2.play();
            break;
        case "d":
        case "D":
            let sound3 = new Audio("whoosh-drum.mp3");
            sound3.play();
            break;
        case "J":
        case "j":
            let sound4 = new Audio("tr707-crash-cymbal.mp3");
            sound4.play();
            break;
        case "k":
        case "K":
            let sound5 = new Audio("long-ride-cymbal.mp3");
            sound5.play();
            break;
        case "L":
        case "l":
            let sound6 = new Audio("kick-drum.mp3");
            sound6.play();
            break;
    }
}