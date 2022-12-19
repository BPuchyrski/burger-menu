const burgerBtn = document.querySelector(".burger");
const icon1 = document.querySelector(".star");
const icon2 = document.querySelector(".iks");
const nav = document.querySelector("nav ul");

const handleNav = () => {
  nav.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  icon1.classList.toggle("hide");
  icon2.classList.toggle("hide");
};
burgerBtn.addEventListener("click", handleNav);
