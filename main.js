window.addEventListener("DOMContentLoaded", main); 

/**
 * Lista som sparar input från användaren.
 * Inputen är varor användaren valt att lägga i varukorgen/inventory. 
 * @type {Array} 
 */
 let inventory = []; 
 let ramdomNum = getRandom 

 /**
 * Main funktionen körs direkt då sidan laddats och kör i sin tur changingDiv och addItem. 
 */
function main() {
    changingDiv(), addItem(); 
} 

/**
 * Tömmer och fyller på div från HTML med id: "changing-div". 
 * Scen 1 / Startinnehåll med allmän information till användaren, hur sidan kommmer att fungera. 
 * Alla kommande funktioner kommmer utgå från samma "changing-div" ID. 
 * Innehållet kommer förändras beroende på val användaren gör, men all information töms och skrivs ut i "changing-div."
 */
function changingDiv() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 

    h1.textContent = "welcome to our grocery store!"; 
    p.textContent = 'info on how the store works: to view your shopping cart press "show cart", to add items simply write them in the input field below and press add. if you wish to enter the store press the button below';  
    button.textContent = "enter"; 
    button.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button); 
}

/**
 * Scen 2 / Fruktsektionen i butiken om användaren valde "continue" under förra funktionen. 
 * Alternativt har användaren återkommit hit från scen 3. 
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
    p.textContent = "you have arrived at the fruit section, here are the available fruits for purchase: " + availableItems +  "enter what items you would like to add to your cart in the input field and press add."; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = breadSection; 
    returnButton.onclick = changingDiv; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

/**
 * Scen 3. 
 * Alternativt har användaren återkommit hit från scen 4. 
 */
function breadSection() {
    /** 
     * Array containing the available items 
     * @type {Array}
     */
    let availableItems = ["knäckebröd"];

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "bread section"; 
    p.textContent = "available bread" + availableItems; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = beverageSection; 
    returnButton.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}


/**
 * Scen 4. 
 */
function beverageSection() {
    let availableItems = ["coca cola", "coffee", "sprite", "wine"]; 

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "sweets section"; 
    p.textContent = "available sweets" + availableItems; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = paymentSection; 
    returnButton.onclick = breadSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

/**
 * Scen 5. 
 */
function paymentSection() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

   h1.textContent = "payment"; 
    p.textContent = "hi, your sum is how would you like to pay?"; 
    button.textContent = "cash"; 
    returnButton.textContent ="card"; 

    button.onclick = end; 
    returnButton.onclick = breadSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

function end() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 

    button.classList = "all-buttons"

    h1.textContent = "thank you"; 
    p.textContent = "would you like to visit the store again?"; 
    button.textContent = "yes"; 

    button.onclick = changingDiv; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button); 
}
/**
 * Knappfunktion som tar emot användarens input och leder vidare till funktionen som hanterar inputen. 
 */
function addItem() {
    const button = document.getElementById("inputButton"); 
    const input = document.getElementById("input"); 
    
    inputButton.textContent = "add";
    inputButton.onclick = addToInventory; 
}

/**
 * Hanterar inputen från föregående funktion. 
 * Lägger till vad användaren skrivit i "inventory" OM denna artikel finns bland "availableItems"-listan. 
 * Om inte får användaren ett felmeddelande. 
 */
function addToInventory() {
    const p = document.createElement("p"); 
    /** 
     * Array containing the available items 
     * @type {Array}
     */
    let allItems = ["apple", "banana", "bread", "pear"];
    pickedItem = input.value //sparar 

    for( let i = 0; i < allItems.length; i++){
        
        if(allItems[i] == pickedItem){
            inventory.push(pickedItem);

        } else {
            console.log("fel");
        }
/*         if (pickedItem !== allItems[i]){
            console.log("fel");
            //alert("fel")
            //input.value = ""; 

     } else {
        inventory.push(pickedItem);

       // input.value = ""; 
     }
    }
    console.log(inventory); */
} console.log(inventory);
}

/**
 * Visa varukorg 
 * Knappfunktion där användarens varukorg visas då man klickar på knappen
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
  
  function getRandom() {
    randomNum = Math.floor(Math.random() * 101);
    return random
    console.log (randomNum)
  }
