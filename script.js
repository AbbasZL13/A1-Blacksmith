// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// I will check if the forge has enough heat.
// If it has enough heat, I will use 30 heat to make a sword.
// I will increase the number of swords made by one.
// I will update the page to show the new heat and sword count.


// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.getElementById("forge")
const heatText = document.getElementById("heat-value")
const swordCountText = document.getElementById("sword-count")
const forgeStatus = document.getElementById("forge-status")
const forgeImage = document.getElementById("forge-image")
const messageText = document.getElementById("action-message")


// 2. Create the two state variables: heat and swords made.
let heat = 20
let swordsMade = 0


// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too cold to craft"
    } else if (heatValue < 70) {
        return "Ready to forge"
    } else {
        return "Roaring fire. Keep crafting!"
    }
}


// // 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

function updateForge() {
    const status = getForgeStatus(heat)

    forgeStatus.textContent = status
    heatText.textContent = heat
    swordCountText.textContent = swordsMade

    forge.classList.remove("is-cold", "is-ready", "is-roaring")

    if (heat < 30) {
        forge.classList.add("is-cold")
        forgeImage.setAttribute("src", "assets/forge-cold.svg")
        forgeImage.setAttribute("alt", "A stone forge with dark coals and no flames")
    } else if (heat < 70) {
        forge.classList.add("is-ready")
        forgeImage.setAttribute("src", "assets/forge-ready.svg")
        forgeImage.setAttribute("alt", "A stone forge with a small orange fire")
    } else {
        forge.classList.add("is-roaring")
        forgeImage.setAttribute("src", "assets/forge-roaring.svg")
        forgeImage.setAttribute("alt", "A stone forge with tall bright flames and sparks")
    }
}

// 5. Write resetForge(). Restore the state, message, and display.

function resetForge() {
    heat = 20
    swordsMade = 0
    messageText.textContent = "Welcome to the forge. Add heat to begin."
    updateForge()
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

function heatForge(amount) {
    heat = heat + amount

    if (heat > 100) {
        heat = 100
    }

    messageText.textContent = "Heating complete. The forge is at " + heat + " heat."
    updateForge()
}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
    if (heat >= 30) {
        heat = heat - 30
        swordsMade = swordsMade + 1
        messageText.textContent = "Sword successfully crafted!"
    } else {
        messageText.textContent = "Not enough heat. The forge needs at least 30 heat."
    }

    updateForge()
}

// 8. Call resetForge() once to start the game.

resetForge()

// Use the tests in ASSIGNMENT.md to check your work.