import { products } from "./data.js";
import "./search.js";
import { renderUI } from "./renderUI.js";

const priceSort = document.getElementById("price-sort");
const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");

document.getElementById("year").textContent = new Date().getFullYear();

renderUI(products);

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme == "light" ? true : false;
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "coffee" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme == "light" ? true : false;
});

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.contains("fa-regular")
      ? like.classList.replace("fa-regular", "fa-solid")
      : like.classList.replace("fa-solid", "fa-regular");
  });
});

priceSort.addEventListener("change", (e) => {
  const price =
    e.target.options[e.target.selectedIndex].getAttribute("data-price");
  const productsForSorting = [...products];

  if (price == "low") {
    const newSort = productsForSorting.sort((a, b) => {
      return a.price - b.price;
    });
    renderUI(newSort);
  } else {
    const newSort = productsForSorting.sort((a, b) => {
      return b.price - a.price;
    });
    renderUI(newSort);
  }
});
