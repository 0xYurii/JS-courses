// template strings/literals

const recipient = "Yuri"
// Create a new variable, sender, and set its value to your name
const sender="Nyra"

// Use your sender variable instead of "Per"
const email = `
            Hey ${sender}! How is it going? ${recipient}
            `

console.log(email)