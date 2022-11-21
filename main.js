window.addEventListener("DOMContentLoaded", main); 

/**
 * Array som sparar användar input 
 * @type {Array} 
 */
 let inventory= []

 /**
 * Dessa funktioner körs direkt på sidan
 * 
 */
function main() {
    changingDiv(), addItem(); 
} 

/**
 * Startinnehåll med allmän information till användaren.
 * Funktionen utgår från changing-div klassen i HTML och tömmer denna och fyller den med nytt innehåll 
 * beroende på val användaren gjort. 
 * Detta innehållet är automatiskt och startinnehållet på sidan. 
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
 * Scen 2 / fruktsektionen i butiken om användaren valde "continue" under förra funktionen. 
 * Alternativt har användaren återkommit hit från scen 3 
 */
function fruitSection() {

    /** 
     * Array containing the available items 
     * @type {Array}
     */
     let availableItems = ["apple", "banana", "bread", "pear"];

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

/**
 * Scen 2 / fruktsektionen i butiken om användaren valde "continue" under förra funktionen. 
 * Alternativt har användaren återkommit hit från scen 3 
 */
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
 * Adds user input onto inventory list, if item is available. 
 * Otherwise error meddelande 
 * 
 */
function addToInventory() {
    const p = document.createElement("p"); 

    let availableItems = ["apple", "banana", "bread", "pear"];
    pickedItem = input.value //sparar 

    for( let i=0;i<=availableItems.length;i++)    
     {if (pickedItem === availableItems[i]) 
    {
        input.value = ""; 
        inventory.push(pickedItem);
         break;
    } }

    for( let i=0;i<=availableItems.length;i++)    
    {if (pickedItem !== availableItems[i]) 
   {
       input.value = ""; 
   } }
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
  
