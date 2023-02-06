'use strict';
alert("Rules!!!!!!!\n\nRoll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.\nNote: \nIf the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.\n Hold: \nIf the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.");
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceel = document.querySelector('.dice');
const rolldice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const new1 = document.querySelector('.btn--new');
const current0ell = document.querySelector('#currrent--0');
const current1ell = document.querySelector('#current--1');

diceel.classList.add('hidden');

let scores, currentScore, activePlayer, playing1;

const newbtn = function () {
    scores = [0, 0];//holds the score of player 1 and 2 respectively
    currentScore = 0;
    activePlayer = 0;
    playing1 = true;
    score0.textContent = 0;
    score1.textContent = 0;
    const name2 = prompt("Contestant 1")
    const name3 = prompt("Contestant 2")
    console.log(name2);
    document.querySelector('#name--0').textContent = name2;
    document.querySelector('#name--1').textContent = name3;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current1ell.textContent = 0;

    diceel.classList.add('hidden');
    player0el.classList.remove('player--winner');
    player1el.classList.remove('player--winner');
    player0el.classList.add('player--active');
    player1el.classList.remove('player--active');


}

newbtn();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');

}

rolldice.addEventListener('click', function () {
    if (playing1) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceel.classList.remove('hidden');
        // diceel.src = "dice-${number1}.png";
        diceel.src = `dice-${dice}.png`;


        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }

    }
});

hold.addEventListener('click', function () {
    if (playing1) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];



        if (scores[activePlayer] >= 50) {
            diceel.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing1 = false;
        } else {
            switchPlayer();
        }

    }
})
new1.addEventListener('click', newbtn);
