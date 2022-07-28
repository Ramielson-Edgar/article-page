const sidebarMenu = document.querySelector(".main-article__sidebar-menu");
const hideModalMenu = document.querySelector(".icon-close");
const links = document.querySelectorAll(".main-article__sidebar-item");
const overlay = document.querySelector(".main-article__overlay");

const buttonShowMenu = document
  .querySelector(".icon-menu")
  .addEventListener("click", () => {
    sidebarMenu.classList.add("show-menu");
    overlay.classList.add("show-menu");
  });

function onHandleCloseModal() {
  hideModalMenu.addEventListener("click", () => {
    sidebarMenu.classList.remove("show-menu");
    overlay.classList.remove("show-menu");
  });
}

onHandleCloseModal();

function onHandleCloseModalLink() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      sidebarMenu.classList.remove("show-menu");
      overlay.classList.remove("show-menu");
    });
  });
}

onHandleCloseModalLink();

function onHandleCloseOverlay() {
  overlay.addEventListener("click", () => {
    sidebarMenu.classList.remove("show-menu");
    overlay.classList.remove("show-menu");
  });
}

onHandleCloseOverlay();
