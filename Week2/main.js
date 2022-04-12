
// // How to make a countdown
// let value = 1000
// setInterval(() => {
//     let turn = document.getElementById("turn");
//     turn.innerHTML = value
//     value -= 2
// }, 2);


// // How to find and change an ellemnt
// (function(){
// let turn = document.getElementById("turn");
// turn.innerHTML = "X";}
// , 2)


let Turn = 'O';
names = [["one", "two", "three"],["four", "five", "six"], ["seven", "eight", "nines"]]

function setListeners(){
    for(let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
        {
            const temp = document.getElementsByClassName(names[i][j]);
            console.log(temp)
            // temp[0].innerHTML = "X";
            // console.log(temp);
            temp[0].addEventListener('click', function(){
                play(i, j)
             });
            
        }

}

window.setTimeout(setListeners, 100); //since the elements are not loaded at the beggining 


function play(i,j) {
    alert(i + " " + j)

}

function newGame() {
}


function reset() {
}

function calculateWinner(){
    // Check Rows

    // Check Columns

    // Check Diags

}

function isOver(){

}