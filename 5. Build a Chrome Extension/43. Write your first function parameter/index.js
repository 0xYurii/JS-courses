const welcomeEl = document.getElementById("welcome-el")

let name="yuri"
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(name) {
    welcomeEl.textContent = "Welcome back "+name +"👋"    
}

greetUser(name)