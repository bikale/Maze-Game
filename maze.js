/* eslint-disable no-inner-declarations */
/* eslint-disable require-jsdoc */
// Your code here
"use strict";
window.onload = mazeGame;
function mazeGame() {
    let start = document.getElementById("start");

    start.addEventListener("click", function () {


        let isgamelost = false;
        const mazeClass = document.getElementsByClassName("boundary");
        const gameEnd = document.getElementById("end");
        const mazeArea = document.getElementById("maze");
        for (let secondkey of mazeClass) {
            secondkey.style.backgroundColor = "#eeeeee";
        }

        for (let key of mazeClass) {
            key.onmouseover = changeMyColor;

            function changeMyColor() {
                isgamelost = true;

                for (let secondkey of mazeClass) {
                    secondkey.style.backgroundColor = "#ff8888";
                }

                document.getElementById("status").innerHTML = "You lose!";
            }
        }

        mazeArea.onmouseleave = function () {
            isgamelost = true;
            for (let secondkey of mazeClass) {

                secondkey.style.backgroundColor = "#ff8888";
            }
            document.getElementById("status").innerHTML = "You lose!";
        };

        gameEnd.onmouseover = function () {
            if (isgamelost === false) {
                document.getElementById("status").innerHTML = "Congrats!";
            }

        };
        gameEnd.onclick = function () {
           
            location.reload();
        };
        document.getElementById("status").innerHTML = "Started!";
    });
}