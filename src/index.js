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