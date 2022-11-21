window.addEventListener("DOMContentLoaded", main); 

/**
 * Lista som sparar input från användaren.
 * Inputen är varor användaren valt att lägga i varukorgen/inventory. 
 * @type {Array} 
 */
 let inventory = []; 

 /**
 * Main funktionen körs direkt då sidan laddats och kör i sin tur changingDiv och addItem funktionerna. 
 */
function main() {
    changingDiv(), addItem(); 
} 

/**
 * Tömmer och fyller på div med id: "changing-div". 
 * Scen 1 / Startinnehåll med allmän information till användaren, hur sidan kommmer att fungera. 
 * Alla kommande funktioner kommmer utgå från samma "changing-div" ID. 
 * Innehållet kommer förändras beroende på val användaren gör, men all information töms och skrivs ut i "changing-div."
 */
function changingDiv() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const buttonInformation = document.createElement("p"); 
    const button = document.createElement("button"); 

    h1.textContent = "welcome to our grocery store!"; 
    p.textContent = 'to view your shopping cart press "show cart", to add items simply write them in the input field below and press add. if you have recently added an item you must close the cart and open it once more, to see the newly added item.';  
    buttonInformation.textContent = "if you wish to enter the store press the button below"; 
    button.textContent = "enter"; 
    button.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, buttonInformation, button); 
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
     let availableItems = ["apple", "banana", "kiwi", "pear"];

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "fruit section"; 
    p.textContent = "you have arrived at the fruit section, here are the available fruits for purchase: " + availableItems; 
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
    let availableItems = ["pastries", "crackers", "toast", "sourdough bread"];

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "bakery products"; 
    p.textContent = "you have arrived at the bakery product section of the store. here are the bakery type items we have for sale: " + availableItems; 
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
    /**
     * Array containing the available items 
     * @type {Array}
     */
    let availableItems = ["coca cola", "coffee", "sprite", "wine"]; 

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "beverages"; 
    p.textContent = "you have arrived at the section that sells beverages, cold and hot! here are the available items for sale: " + availableItems; 
    button.textContent = "continue"; 
    returnButton.textContent ="return"; 

    button.onclick = paymentSection; 
    returnButton.onclick = breadSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

/**
 * Scen 5. 
 * Skriver ut en scen som utspelar sig i kassan. 
 * Samlad input i listan "inventory" skrivs som varukorgsinnehåll och det slumpmässiga talet i "total" skrivs ut som priset på varorna. 
 */
function paymentSection() {
    /**
     * Sparar värdet av funktionen "getRandom" i variabeln "total."
     */
    let total = getRandomNum(); 

    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton = document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "register"; 
    p.textContent = "hi, thank you for shopping at our store, you have: " + inventory + " in your cart. your total is: " + total + "kr, how would you like to pay?"; 
    button.textContent = "cash"; 
    returnButton.textContent ="card"; 

    button.onclick = end; 
    returnButton.onclick = end; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button, returnButton); 
}

/**
 * Scen 6. 
 * Sista scenen, frågar användaren om den vill spela om spelet från början. 
 * Samt tömmer "inventory" så att användaren börjar om utan tidigare sparad input. 
 */
function end() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 

    button.classList = "all-buttons"

    h1.textContent = "thank you!"; 
    p.textContent = "would you like to visit the store again?"; 
    button.textContent = "yes"; 

    button.onclick = changingDiv; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button); 

    inventory = []
}

/**
 * Knappfunktion som tar emot användarens input och leder vidare till funktionen "addToInventory" som hanterar inputen då 
 * användaren klickar på knappen "add". 
 */
function addItem() {
    const button = document.getElementById("inputButton"); 
    const input = document.getElementById("input"); 
    
    inputButton.textContent = "add";
    inputButton.onclick = addToInventory; 
}

/**
 * Hanterar inputen från "addItem" funktionen. 
 * Lägger till vad användaren skrivit i "inventory" OM denna artikel finns bland "allItems"-listan. 
 * Användaren får ett meddelande om att artikeln lagts till i deras varukorg. 
 * Om artikeln inte finns tillgänglig får användaren ett meddelande som informerar om detta. 
 * Tömmer även input fältet efter varje ny input. 
 */
function addToInventory() {
    /** 
     * Array som innehåller det sammanfattade innehållet av alla tidigare "availableItems"-arrays.  
     * @type {Array}
     */
    let allItems = ["apple", "banana", "kiwi", "pear", "pastries", "crackers", "toast", 
    "sourdough bread", "coca cola", "coffee", "sprite", "wine" ];
    pickedItem = input.value

    if(allItems.includes(pickedItem)){
        inventory.push(pickedItem);
        input.value = "";
        document.getElementById("error").innerHTML = "item added to cart!"; 

    } else{
        input.value = "";
        document.getElementById("error").innerHTML = "article not available!"; 
    }
} 

/**
 * Knappfunktion där användarens varukorg visas då man klickar på knappen
 * Varukorgen göms såvida man inte klickar på den. 
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

/**
 * Genererar ett slumpat nummer mellan 0 och 100. 
 */
function getRandomNum() {
    return Math.floor(Math.random() * 101);
}

