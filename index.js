// Variable Declaration

let homeGoalEl = document.getElementById("home-goal");
let awayGoalEl = document.getElementById("away-goal");

let homeGoalBtnOne = document.getElementById("home-goal-btn-1");
let homeGoalBtnTwo = document.getElementById("home-goal-btn-2");
let homeGoalBtnThree = document.getElementById("home-goal-btn-3");
let restartHomeGoal = document.getElementById("restart-home-goal");

let awayGoalBtnOne = document.getElementById("away-goal-btn-1");
let awayGoalBtnTwo = document.getElementById("away-goal-btn-2");
let awayGoalBtnThree = document.getElementById("away-goal-btn-3")
let restartAwayGoal = document.getElementById("restart-away-goal");

// Button 1 - Home

homeGoalBtnOne.addEventListener("click", function () {
    homeGoalEl.textContent++;
});

// Button 2 - Home
homeGoalBtnTwo.addEventListener("click", function () {
    homeGoalEl.textContent = Number(homeGoalEl.textContent) + 2;
});

// Button 3 - Home
homeGoalBtnThree.addEventListener("click", function (){
    homeGoalEl.textContent = Number(homeGoalEl.textContent) + 3;
});

// Home - Restart
restartHomeGoal.addEventListener("click", function () {
    homeGoalEl.textContent = 0;
})

// Button 1- Away
awayGoalBtnOne.addEventListener("click", function () {
    awayGoalEl.textContent++;
})

// Button 2 Away 
awayGoalBtnTwo.addEventListener("click", function (){
    awayGoalEl.textContent = Number(awayGoalEl.textContent) + 2;
});

// Button 3 Away
awayGoalBtnThree.addEventListener("click", function () {
    awayGoalEl.textContent = Number(awayGoalEl.textContent) + 3;
});

// Away - Restart 
restartAwayGoal.addEventListener("click", function () {
    awayGoalEl.textContent = 0;
})