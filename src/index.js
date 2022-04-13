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

  const nameElem = document.createElement("h3");
  const descriptionElem = document.createElement("p");
  const priceElem = document.createElement("p");

  const name = document.createTextNode(item.name);
  const description = document.createTextNode(item.description);
  const price = document.createTextNode(item.price);

  nameElem.appendChild(name);
  descriptionElem.appendChild(description);
  priceElem.appendChild(price);

  itemDiv.innerHTML +=
    nameElem.outerHTML + descriptionElem.outerHTML + priceElem.outerHTML;

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