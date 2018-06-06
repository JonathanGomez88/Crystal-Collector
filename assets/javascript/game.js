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

// A function that resets the game

function Reset() {

    var totalScore = 0;

    var randomNumber = Math.floor(Math.random() * 100) + 20;
    console.log(randomNumber);

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);

    var crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal2);

    var crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal3);

    var crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal4);
}



// Each Crystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.



// Each time user clicks on the crystal that many pts need to be added to the total score

$("#crystal1").on("click", function () {
    $("#totalScore").html("Total Score" + "<br><hr>" + crystal1 + totalScore);

}




    // If total score === random number increase wins++ and reset
    //     if(randomNumber === totalScore) {
    //     wins++;
    //     reset;
    // }


    // If total score > random number losses++ and reset

    // if (totalScore > randomNumber) {
    //     losses++;
    // //     reset;
)
