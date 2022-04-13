import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

let categories = {};

menuItems.forEach((item) => {
  let type = item.type;
  if (!categories[type]) {
    categories[type] = [item];
  } else {
    categories[type].push(item);
  }
  categories[type].sort((a, b) => a.menuOrder - b.menuOrder);
});

const makeItemElement = (item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("items");

  const nameElem = document.createElement("h3");
  const priceElem = document.createElement("h3");
  const descriptionElem = document.createElement("p");

  priceElem.classList.add("price");

  const name = document.createTextNode(item.name);
  const price = document.createTextNode("$" + item.price.toFixed(2));
  const description = document.createTextNode(item.description);

  nameElem.appendChild(name);
  priceElem.appendChild(price);
  descriptionElem.appendChild(description);

  itemDiv.innerHTML +=
    nameElem.outerHTML + priceElem.outerHTML + descriptionElem.outerHTML;

  if (item.spicy) {
    itemDiv.classList.add("spicy");
  }

  return itemDiv;
};

Object.keys(categories).forEach((type) => {
  const parent = document.getElementById(type);

  categories[type].forEach((item) => {
    parent.appendChild(makeItemElement(item));
  });
});

const spicyOptions = () => {
  const spicyItems = document.getElementsByClassName("spicy");

  for (let item of spicyItems) {
    item.classList.toggle("hide");
  }
};

const spicyCheckbox = document.getElementById("spicy-options");
spicyCheckbox.addEventListener("change", spicyOptions);
