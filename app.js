// player 1 button updates the score
const player1scr = document.querySelector('#p1');
const player2scr = document.querySelector('#p2');
const player1btn = document.querySelector('#p1btn');
const player2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
const playto = document.querySelector('#plto');

let selectedValue = 5;

playto.addEventListener('change', function() {
    selectedValue = playto.value;
})

let count1 = 0;
let count2 = 0;
player1scr.value = 0;
player2scr.value = 0;


let countNum1 = () => {
    player1scr.value++;
    player1scr.innerText = player1scr.value;
    if ( player1scr.innerText == selectedValue) {
        player1btn.disabled = true;
        player2btn.disabled = true;
        player1scr.classList.add('winner');
        player2scr.classList.add('loser');
    } 
};

let countNum2 = () => {
    player2scr.value++; 
    player2scr.innerText = player2scr.value;
    if ( player2scr.innerText == selectedValue) {
        player2btn.disabled = true;
        player1btn.disabled = true;
        player2scr.classList.add('winner');
        player1scr.classList.add('loser');
    } 
};        

player1btn.addEventListener('click', countNum1);
player2btn.addEventListener('click', countNum2);

resetbtn.addEventListener('click', function() {
    player1btn.disabled = false;
    player2btn.disabled = false;
    player1scr.value = 0;
    player1scr.innerText = 0;
    player2scr.value = 0;
    player2scr.innerText = 0;
    player1scr.className = '';
    player2scr.className = '';
})







