document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".btn__menu");
  const closeBtn = document.querySelector(".menu__close"); // add a close button inside menu
  const body = document.body;

  openBtn.addEventListener("click", () => {
    body.classList.add("menu--open");
  });

  closeBtn.addEventListener("click", () => {
    body.classList.remove("menu--open");
  });
});
