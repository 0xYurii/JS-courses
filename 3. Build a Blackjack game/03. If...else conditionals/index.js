let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard

if (sum<21) {
    console.log("do you wanna draw new card? ")
} else if (sum===21){
    console.log("Whoo! you got blackjack 🥳")
} else {
    console.log("You're out of the game 😔")
}