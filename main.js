window.addEventListener("DOMContentLoaded", main); 

/**
 * Array som sparar användar input 
 * @type {Array} 
 */
 let inventory= []

 /**
 * Startinnehåll 
 * 
 */
function main() {
    changingDiv(), addItem(); 
} 

/**
 * Startinnehåll med allmän information till användaren.
 * Funktionen utgår från changing-div klassen i HTML och tömmer denna och fyller den med nytt innehåll 
 * beroende på val användaren gjort. 
 * Detta innehållet är automatiskt och startinnehållet på sidan om användaren väljer att klicka sig vidare. 
 * 
 */
function changingDiv() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 

    h1.textContent = "welcome"; 
    p.textContent = "entrance to store"; 
    button.textContent = "enter"; 
    button.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button); 
}

/**
 * Scen 2 / fruktsektionen i butiken 
 * 
 */
function fruitSection() {

    /** 
     * Array containing the available items 
     * @type {Array}
     */
    let availableItems = ["apple", "pear", "banana", "kiwi"]

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "fruit section"; 
    p.textContent = "here are the available fruits: " + availableItems; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = breadSection; 
    returnButton.onclick = changingDiv; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

function breadSection() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "bread section"; 
    p.textContent = "available bread"; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = sweetsSection; 
    returnButton.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

function sweetsSection() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "sweets section"; 
    p.textContent = "available sweets"; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = breadSection; 
    returnButton.onclick = breadSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

function addItem() {
    const button = document.getElementById("inputButton"); 
    const input = document.getElementById("input"); 
    
    inputButton.textContent = "add";
    inputButton.onclick = addToInventory; 
}

/**
 * Adds user input onto inventory list. 
 * 
 */
function addToInventory() {
    x = input.value //sparar 
    inventory.push(x);
    input.value = ""; //tömmer 
}

/**
 * * Visa varukorg 
 * nappfunktion där användarens varukorg visas då man klickar på knappen
 */
function showCart() {
    let addedItem = (inventory); 
    showInventory = document.getElementById("showcart");

    document.getElementById("showcart").innerHTML = "your cart: " + addedItem; 

    if (showInventory.style.display === "block") {
      showInventory.style.display = "none";
    } 
    else {
      showInventory.style.display = "block";
    }
  }
  
