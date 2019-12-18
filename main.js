let good;
let order = [];
let win;

const upArrow = document.querySelector("#arrowUp");
const downArrow = document.querySelector("#arrowDown");
const leftArrow = document.querySelector("#arrowLeft");
const rightArrow = document.querySelector("#arrowRight");

function play() {
    win = false;
    order = [];
    for (var i = 0; i < 20; i++){
        order.push(Math.floor(Math.random() * 4) * 1);
    }
}

if (compTurn){{
 if (order == 1) one();
 if (order == 2) two();
 if (order == 3) three();
 if (order == 4) four();
}

compTurn();
upArrow.addEventListener('click', (event) => {
    // check();
    one();
    // if(!win) {
    //     document.getElementById("alertMsg").innerHTML = "Incorrect";
    // }
})



function check(){

    if (playerArrow[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
    good = false;

    if (playerOrder.length == 20 && good){
        winGame();
    
    }

    if (good == false) {
        document.getElementById("alertMsg").innerHTML = "Incorrect";
    })

}