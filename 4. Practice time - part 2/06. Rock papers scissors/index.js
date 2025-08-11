let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function random(){
    let randomes=Math.floor(Math.random()*hands.length)
    return hands[randomes]
}

console.log(random())