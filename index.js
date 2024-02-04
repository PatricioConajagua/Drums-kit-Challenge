// Detecta la pulsación de botón
var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumsButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Detecta la pulsación del teclado
document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});
    
// Función para reproducir el sonido según la tecla o botón
function makeSound(key) {
    
    // Utilizar un switch para determinar qué sonido reproducir según la tecla
    switch (key) {
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "g":
            var snear = new Audio('sounds/snare.mp3');
            snear.play();
            break;
        case "h":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

 
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
