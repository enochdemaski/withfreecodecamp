// const video = document.getElementById("video");
// const menuBtn = document.getElementById("toggle-btn");
// const mobileMenu = document.getElementById("menu");
// const darkMode = document.getElementById("dark-mode-btn");
// const nav = document.getElementById("nav");
// const logo = document.querySelector("#nav a #logo");
// const icon = darkMode.querySelector("i");
// const icons = menuBtn.querySelector("i");
// const greetCustomer = document.querySelector("#greet-customers");
// const contact = document.getElementById("reach");
// const know = document.getElementById("know");
// const track = document.querySelector(".carousel-container");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

//MENU BTN
// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("show");
//   if (icons.classList.contains("fa-bars")) {
//     icons.classList.replace("fa-bars", "fa-xmark");
//   } else {
//     icons.classList.replace("fa-xmark", "fa-bars");
  // }
// //   icons.classList.toggle("fa-bars");
// //   icons.classList.toggle("fa-xmark");
// });

// document.addEventListener("click", (e) => {
//   if (mobileMenu.contains(e.target) || !menuBtn.contains(e.target)) {
//     mobileMenu.classList.remove("show");
//     icons.classList.replace("fa-xmark", "fa-bars");
//   }
// });

// FOR DARK AND LIGHT MODE
// let isDark = false;
// darkMode.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   isDark = !isDark;

//   if (isDark) {
//     icon.classList.replace("fa-moon", "fa-sun");
//     darkMode.style.backgroundColor = "#fff";
//     darkMode.style.color = "#000";
//     nav.style.backgroundColor = "#fff";
//     logo.style.color = "#000";
//     contact.style.color = "#fff";
//     know.style.color = "#fff";
//     know.style.backgroundColor = "#000";
//   } else {
//     icon.classList.replace("fa-sun", "fa-moon");
//     darkMode.style.backgroundColor = "#000";
//     darkMode.style.color = "#fff";
//     nav.style.backgroundColor = "#000";
//     logo.style.color = "#fff";
//     contact.style.color = "#000";
//     know.style.color = "#000";
//     know.style.backgroundColor = "#fff";
//   }
// });

// TIME GREETING/MAKE SURE YOU ADD LOOP LATER ON
// setTimeout(() => {
//   const currentHour = new Date().getHours();
//   let welcomeText = "";

//   if (currentHour < 12) {
//     welcomeText = "Good Morning, welcome to my portfolio.";
//   } else if (currentHour < 18) {
//     welcomeText = "Good Afternoon, welcome to my portfolio.";
//   } else {
//     welcomeText = "Good Evening, welcome to my portfolio.";
//   }
//   greetCustomer.textContent = welcomeText;

//   setTimeout(() => {
//     greetCustomer.remove();
//   }, 2000);
// }, 1000);

/*CAROUSEL____________________________________------_______--- */

// nextBtn.addEventListener("click", () => {
//   track.scrollBy({ left: track.offsetWidth, behavior: "smooth" });
// });

// prevBtn.addEventListener("click", () => {
//   track.scrollBy({ left: -track.offsetWidth, behavior: "smooth" });
// });


//FOR FORM VALIDATION

const form = document.getElementById("registration-form")
const name = document.getElementById("user-name")
const phone = document.getElementById("num-phone")
const errorMessage = document.getElementById("errorMessage")
const nameMessage = document.getElementById("nameMessage")
const phoneMessage = document.getElementById("phoneMessage")
const btn = document.getElementById("send")

// Global funtion to get the trimmed name value
const getNameValue = ()=> 
name.value.trim()

const getPhoneValue = ()=> 
phone.value.trim()

// Helper function to check if a string contains only letters
const namePattern = /^[A-Za-z\s]+$/
const phonePattern = /^\d{11}$/



form.addEventListener("submit", (e)=>{
  let isValid = true;

// FIRST STEP IS TO CLEAR PREVIOUS MESSAGES
errorMessage.textContent= ""
nameMessage.textContent= ""
phoneMessage.textContent= ""
errorMessage.classList.remove("messages")
nameMessage.classList.remove("messages")
phoneMessage.classList.remove("messages")
name.classList.remove("error.border-line", "accept-border-line")
phone.classList.remove("error.border-line", "accept-border-line")

//CHECK EMPTY NAME
if(getNameValue() === ""){
  isValid = false
  nameMessage.textContent= "Name is needed"
  nameMessage.classList.add("messages")
  name.classList.add("error-border-line")
}

//CHECK NAME FORMAT
else if(!namePattern.test(getNameValue())){
isValid = false;
nameMessage.textContent= "Only letters are allowed"
nameMessage.classList.add("messages")
name.classList.add("error-border-line")
}else{
nameMessage.textContent= ""
nameMessage.classList.remove("messages")
name.classList.add("accept-border-line")
}

if(getPhoneValue() === ""){
  isValid = false
  phoneMessage.textContent= "Phone number is needed."
  phoneMessage.classList.add("messages")
  phone.classList.add("error-border-line")
}

//CHECK NUMBER FORMAT
else if(!phonePattern.test(getPhoneValue())){
isValid = false;
phoneMessage.textContent= "Only 11 digits are allowed"
phoneMessage.classList.add("messages")
phone.classList.add("error-border-line")
}
else{
phoneMessage.textContent= ""
phoneMessage.classList.remove("messages")
phone.classList.add("accept-border-line")
}

//IF FORM IS NOT VALID, DONT SUBMIT
if(!isValid){
e.preventDefault()
errorMessage.textContent= "Form is empty, please fill all spaces."
errorMessage.classList.add("messages")
}
 
})

name.addEventListener("input", ()=>{
  const value = getNameValue()
  if(value === ""){
  nameMessage.textContent= "Name is needed"
  nameMessage.classList.add("messages")
  name.classList.remove("accept-border-line")
  name.classList.add("error-border-line")
  }

  else if(!namePattern.test(value)){
    nameMessage.textContent= "Only letters are allowed"
    nameMessage.classList.add("messages")
    name.classList.remove("accept-border-line")
    name.classList.add("error-border-line")
  }else{ 
    errorMessage.textContent= ""
    errorMessage.classList.remove("messages")
    nameMessage.textContent= ""
    nameMessage.classList.remove("messages")
    name.classList.add("accept-border-line")
    name.classList.remove("error-border-line")
  }
})

phone.addEventListener("input", ()=>{

  let phoneNumber = getPhoneValue()

if(phoneNumber === ""){
  phoneMessage.textContent= "Phone is needed, and must be 11 digits"
  phoneMessage.classList.add("messages")
  phone.classList.add("error-border-line")
}

else if(!phonePattern.test(phoneNumber)){
phoneMessage.textContent= "Please enter 11 digits only"
phoneMessage.classList.add("messages")
phone.classList.add("error-border-line")
}


else{ 
    errorMessage.textContent= ""
    errorMessage.classList.remove("messages")
    phoneMessage.textContent= ""
    phoneMessage.classList.remove("messages")
    phone.classList.add("accept-border-line")
    phone.classList.remove("error-border-line")
  }
})


// NEXT IS CAPITALIZING EACH INITIAL ALPHEBET IN THE NAME ELEMENT










/*--------------------------------------------------------------------------------------------------------------------------------------------------- */

// const input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//   if (!e.target.validity.badInput()) {
//     e.target.setCustomValidity("Please my people, match as required.");
//   }
//   console.log(e.target.rangeOverflow());
// });

/*MODEL */

// const model = document.getElementById("model");
// const modelBtn = document.getElementById("modelbtn");
// const closeButton = document.getElementById("close-modal-btn");

// modelBtn.addEventListener("click", () => {
//   model.show();
// });

// closeButton.addEventListener("click", () => {
//   model.close();
// });

/*ANIMATION */
// const playBtn = document.querySelector("#playBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const square = document.querySelector("#square");

// const animation = square.animate(
//   [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],

//   {
//     duration: 2000,
//     iterations: Infinity,
//     direction: "alternate",
//     easing: "ease-in-out",
//   },
// );

// animation.onfinish = () => {
//   console.log("FINISHED");
// };

// playBtn.addEventListener("click", () => {
//   animation.play();
//   console.log("Played");
// });

// pauseBtn.addEventListener("click", () => {
//   animation.pause();
//   console.log("Paused");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const currentHour = new Date().getHours();
//   let welcomeText = "";

//   if (currentHour < 12) {
//     welcomeText = "Good Morning, welcome to my portfolio.";
//   } else if (currentHour < 18) {
//     welcomeText = "Good Afternoon, welcome to my portfolio.";
//   } else {
//     welcomeText = "Good Evening, welcome to my portfolio.";
//   }

//   greetCustomer.textContent = welcomeText;
// });

// if (isLight) {
//   nav.style.backgroundColor = "#000";
//   logo.color = "#fff";
// } else {
//   nav.style.backgroundColor = "#fff";
//   logo.color = "#000";
// }
// });

// DONT GO DOWN

// const fruits = ["apple", "banana", "orange"];
// const [first, , third] = fruits;

// console.log(first);
// // console.log(second);
// console.log(third);

// let str = "Hello";
// let charArray = str.split("");
// charArray.reverse();
// console.log(charArray.join("-"));

// Build A Shopping List
// console.log("Grocery shopping list");
// const shoppingList = [];
// console.log("It will be nice to have some fruit to eat.");
// shoppingList.push("Apples");
// shoppingList.push("Grapes", "Popcorn", "Beef Jerky", "Potato Chip");
// shoppingList.unshift("Vegetable Oil");

// const getShoppingListMsg = (arry) => {
//   return `Current Shopping List: ${arry}`;
// };

// console.log(getShoppingListMsg(shoppingList));
// console.log("It looks like we need to get some cooking oil.");
// console.log("This looks like too much junk food.");

// shoppingList.pop();

// console.log(getShoppingListMsg(shoppingList));

// console.log("It might be nice to get a dessert.");

// shoppingList.unshift("Chocolate Cake");

// console.log(getShoppingListMsg(shoppingList));

// console.log("On second thought, maybe we should be more health conscious.");

// shoppingList.shift();
// console.log(getShoppingListMsg(shoppingList));

// shoppingList[0] = "Canola Oil";
// console.log(getShoppingListMsg(shoppingList));

/* How to add and remove Nodes

const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");
const listItems = document.createElement("li");
const listI = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);

listItems.textContent = "Mango";
dessertsList.appendChild(listItems);

listI.textContent = "Sugar";
dessertsList.appendChild(listI);
// dessertsList.removeChild(listI);

console.log(dessertsList);*/

/* How Do the Navigator, Window, and Document Work?

const para = document.getElementById("para");
para.setAttribute("class", "my-class");
// para.setAttribute("class", "att"); updating it
// console.log(para);
console.log(`${para.outerHTML}`);*/

// What is the Event Object?

//addEventListener

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Button clicked!!!");
// });

// console.log(btn);

//input

// const input = document.getElementById("input");

// input.addEventListener("input", () => {
//   console.log(input.value);
// });

// const bodyEl = document.querySelector("body");
// const btn = document.getElementById("btn");

// let isBgColorGrey = true;

// function toggleBgColor() {
//   bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
//   isBgColorGrey = !isBgColorGrey;
// }
// btn.addEventListener("click", toggleBgColor);

// const para = document.getElementById("para");
// para.style.color = "#fff";
// para.style.backgroundColor = "red";

// para.addEventListener("mouseover", () => {
//   btn.removeEventListener("click", toggleBgColor);
// });

//MAIN
// const paraEl = document.getElementById("para");
// paraEl.classList.add("highlight");

// const menu = document.getElementById("menu");
// const toggleBtn = document.getElementById("toggle-btn");
// toggleBtn.addEventListener("click", () => {
//   menu.classList.toggle("show");
// });
