const searchEl = document.getElementById("search");

searchEl.addEventListener("input", () => {
  const searchText = searchEl.value.toLowerCase();
  document.querySelectorAll(".card-title").forEach((title) => {
    if (title.textContent.toLowerCase().includes(searchText)) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  });
});
