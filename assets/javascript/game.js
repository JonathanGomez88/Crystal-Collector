//   Variables

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = Math.floor(Math.random() * 100) + 20;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

$("#randomNumber").html("Random Number" + "<br><hr>" + randomNumber);
$("#totalScore").html("Total Score" + "<br><hr>" + totalScore);
$("#winslosses").html("Wins" + "<br>" + wins + "<hr>" + "Losses" + "<br>" + losses)

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
}



// Each Crystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.



// Each time user clicks on the crystal that many pts need to be added to the total score

$("#crystal1").on("click", function () {
    totalScore = totalScore + crystal1
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);

}
)

$("#crystal2").on("click", function () {
    totalScore = totalScore + crystal2
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);

}
)

$("#crystal3").on("click", function () {
    totalScore = totalScore + crystal3
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);

}
)

$("#crystal4").on("click", function () {
    totalScore = totalScore + crystal4
    $("#totalScore").html("Total Score" + "<br><hr>" + totalScore);

}
)

// If total score === random number increase wins++ and reset
if (randomNumber === totalScore) {
    wins++;
    reset();
}


// If total score > random number losses++ and reset

else if (totalScore > randomNumber) {
    console.log("if statement working")
    losses++;
    reset();

}


