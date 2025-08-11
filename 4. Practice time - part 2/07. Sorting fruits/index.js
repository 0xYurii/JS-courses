let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
function put(){
    for (let i=0;i<fruit.length;i++){
        if (fruit[i]==="🍎"){
            appleShelf.textContent+=fruit[i]
        } else{
            orangeShelf.textContent+=fruit[i]
        }

    }
    
}

put()
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

