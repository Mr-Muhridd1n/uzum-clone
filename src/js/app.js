import { products } from "./data.js";
import formatNumber from "./formatNumber.js";
import "./search.js";

const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");

document.getElementById("year").textContent = new Date().getFullYear();

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme == "light" ? true : false;
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "coffee" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme == "light" ? true : false;
});

const template = document.querySelector("template");
const productList = document.querySelector(".product-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  const {
    id,
    title,
    description: _description,
    thumbnail,
    price: _price,
    discountPercentage,
    reating: _reating,
    reviews,
  } = product;

  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const reating = clone.querySelector(".reating");
  const card = clone.querySelector(".card");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const sharxlar = clone.querySelector(".sharxlar");
  const discountPrice = clone.querySelector(".discount-price");

  card.dataset.id = id;
  cardTitle.textContent = title;
  reating.textContent = _reating;
  description.textContent = _description;
  cardImage.src = thumbnail;
  price.textContent = formatNumber(_price);
  discountPrice.textContent = formatNumber(_price, discountPercentage);
  sharxlar.textContent = reviews.length;
  productList.appendChild(clone);
});

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.contains("fa-regular")
      ? like.classList.replace("fa-regular", "fa-solid")
      : like.classList.replace("fa-solid", "fa-regular");
  });
});
