"use restrict";
/*============== Recommended section slider ==============*/
const recommendContainer = [
  ...document.querySelectorAll(".recommended-container"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

recommendContainer.forEach((item, i) => {
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

/*================ Pop-Up in reviews section ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const popupOverlay = document.getElementById("popupOverlay");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const emailInput = document.getElementById("emailInput");
  // open fn
  function openPopup() {
    popupOverlay.style.display = "block";
  }
  // close fn
  function cancelForm() {
    popupOverlay.style.display = "none";
  }
  // send fn
  function sendForm() {
    const email = emailInput.value;
    console.log(`Your review sent successfully!`);
    cancelForm();
  }
  // Trigger the popup to open (you can call this function on a btn click or any event)
  openPopup();
  closePopup.addEventListener("click", cancelForm);

  // close when clicking outside the popup
  popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      cancelForm();
    }
  });
});
