import formatNumber from "./formatNumber.js";
import { addBasket } from "./basket.js";

const template = document.querySelector("template");
const productList = document.querySelector(".product-list");

export function renderUI({ products }) {
  productList.textContent = "";
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
    const buyBtn = clone.querySelector(".buy-btn");

    card.dataset.id = id;
    cardTitle.textContent = title;
    reating.textContent = _reating;
    description.textContent = _description;
    cardImage.src = thumbnail;

    buyBtn.addEventListener("click", () => {
      console.log(product);

      addBasket({ ...product, amount: 1 });
    });

    price.textContent = formatNumber(_price);
    discountPrice.textContent = formatNumber(_price, discountPercentage);
    sharxlar.textContent = reviews.length;
    productList.appendChild(clone);
  });
}
