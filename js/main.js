"use restrict";
/*============== Recommended section slider ==============*/
const productContainers = [
  ...document.querySelectorAll(".recommended-container"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 382;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 382;
  });
});

/*================ Navbar responsiveness ===============*/
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
