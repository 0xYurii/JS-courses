// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEL=document.getElementById("welcome-el")


// Create two variables (name & greeting) that contains your name

let name = "Yuri"
let greeting="Welcome Honey!!"
// and the greeting we want to render on the page


let welcome=greeting+name
console.log(welcome)

// Render the welcome message using welcomeEl.innerText


welcomeEL.innerText=welcome

