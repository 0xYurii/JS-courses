// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEL=document.getElementById("count-el")

console.log(countEL)

let count = 0

function increment() {
    count = count + 1
    countEL.innerText=count
    console.log(count)
}


