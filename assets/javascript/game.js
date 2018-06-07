//   Variables

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = Math.floor(Math.random() * 100) + 20;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;



// A function that resets the game

function reset() {

    totalScore = 0;

    randomNumber = Math.floor(Math.random() * 100) + 20;
    console.log(randomNumber);

    crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);

    crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal2);

    crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal3);

    crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal4);

    displayTotals ()
}

function displayTotals () {
    $("#randomNumber").html("Random Number" + "<br><hr>" + randomNumber);
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
    $("#winslosses").html("Wins" + "<br>" + wins + "<hr>" + "Losses" + "<br>" + losses)
}


// This function checks to see the conditions of the game

function conditions() {

    if (randomNumber === totalScore) {
        wins++;
        reset();
    }

    else if (totalScore > randomNumber) {
        losses++;
        reset();

    }

    displayTotals()

}



// Each time user clicks on the crystal that many pts need to be added to the total score

$("#crystal1").on("click", function () {
    totalScore = totalScore + crystal1
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
    conditions()

}
)

$("#crystal2").on("click", function () {
    totalScore = totalScore + crystal2
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
    conditions()

}
)

$("#crystal3").on("click", function () {
    totalScore = totalScore + crystal3
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
    conditions()

}
)

$("#crystal4").on("click", function () {
    totalScore = totalScore + crystal4
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
    conditions()

}
)

reset()