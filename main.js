const menuBtn = document.getElementById("toggle-btn");
// const mobileMenuL = document.getElementById("menu a");
const mobileMenu = document.getElementById("menu");
const darkMode = document.getElementById("dark-mode-btn");
const nav = document.getElementById("nav");
const logo = document.querySelector("#nav a #logo");
const icon = darkMode.querySelector("i");
const icons = menuBtn.querySelector("i");

//MENU BTN
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  if (icons.classList.contains("fa-bars")) {
    icons.classList.replace("fa-bars", "fa-xmark");
  } else {
    icons.classList.replace("fa-xmark", "fa-bars");
  }

  // icons.classList.toggle("fa-bars");
  // icons.classList.toggle("fa-xmark");
});

document.addEventListener("click", (e) => {
  if (mobileMenu.contains(e.target) || !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("show");
    icons.classList.replace("fa-xmark", "fa-bars");
  }
});

// FOR DARK AND LIGHT MODE
let isDark = false;
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;

  if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun");
    darkMode.style.backgroundColor = "#fff";
    darkMode.style.color = "#000";

    nav.style.backgroundColor = "#fff";
    logo.style.color = "#000";
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    darkMode.style.backgroundColor = "#000";
    darkMode.style.color = "#fff";

    nav.style.backgroundColor = "#000";
    logo.style.color = "#fff";
  }

  // if (isLight) {
  //   nav.style.backgroundColor = "#000";
  //   logo.color = "#fff";
  // } else {
  //   nav.style.backgroundColor = "#fff";
  //   logo.color = "#000";
  // }
});

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
