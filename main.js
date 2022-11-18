window.addEventListener("DOMContentLoaded", main); 

/**
 * array som sparar användar input 
 * @type {Array} 
 */
 let inventory= [];
 /**
  * hårdkodade värden 
  * @type {Array} 
  */
 let desiredItems = ["apple", "bread", "pear"];
 
function main() {
    changingDiv(); 
} 

/**
 * Startinnehåll 
 * 
 */
function changingDiv() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 

    ///rensa changing-div samt fylla i den

    h1.textContent = "welcome"; 
    p.textContent = "entrance to store"; 
    button.textContent = "enter"; 
    button.onclick = fruitSection; 

    document.getElementById("changing-div").innerHTML = "";
    document.getElementById("changing-div").append(h1, p, button); 
}

function fruitSection() {
    const h1 = document.createElement("h1"); 
    const p = document.createElement("p"); 
    const button = document.createElement("button"); 
    const returnButton= document.createElement("button"); 

    button.classList = "all-buttons"
    returnButton.classList = "return-button all-buttons"

    h1.textContent = "fruit section"; 
    p.textContent = "available fruitsavailable fruitsavailable fruitsavailable fruitsavailable fruitsavailable fruitsavailable fruitsavailable fruits"; 
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
/**
 * Statiska knapp-funktioner 
 * Funktion som tar emot värdet av "inventory" och "desiredItems" och jämför dessa arrays med 
 * varandra. 
 */
function printSame() {

  found = inventory.filter((val, index) => {
    return desiredItems.includes(val)
  })
  document.getElementById("hitta").innerHTML = "hittade: " + found; 
}

/**
 * Tar emot input från form, sparar värdet i "inventory."
 */
const addItem = (x)=>{ //////lägg i varukorg
    x.preventDefault();  
    let addedItem = document.getElementById('addtoinventory').value

    inventory.push(addedItem);
    document.forms[0].reset(); 

    localStorage.setItem('MyItemList', JSON.stringify(inventory));
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('formbutton').addEventListener('click', addItem);
});

function showItemList() { ///////visa inköpslista 
    var k = (desiredItems); 
    x = document.getElementById("itemlist");

    document.getElementById("itemlist").innerHTML = "item list: " + k; 

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }

    found = inventory.filter((val, index) => { /////visa vilka produkter från inköpslistan som finns i varukorgen 
      console.log('index', index) 
      return desiredItems.includes(val)
    })
    console.log(found)
  
    document.getElementById("hitta").innerHTML = "hittade: " + found; 
  }
 
/**
 * * Knappfunktion där innehåll gömmer sig bakom en knapp till man klickar på den. 
 * Skriver ut nuvarande innehåll av "inventory."
 * 
 */
function showCart() { //////visa varukorg
    var cart = (inventory); 
    x = document.getElementById("showcart");

    document.getElementById("showcart").innerHTML = "your cart: " + cart; 

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  }