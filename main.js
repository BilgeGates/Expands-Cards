const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  console.log(card);
  card.addEventListener("click", () => {
    removeAllActiveClass();
    card.classList.add("active");
  });
});

const removeAllActiveClass = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};
