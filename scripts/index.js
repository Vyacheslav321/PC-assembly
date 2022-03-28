const modalWindow = document.querySelector(".modal");
const buttonModals = document.querySelectorAll(".modal__button");
const modalClose = document.querySelector(".modal__close");
const body = document.querySelector("body");

buttonModals.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.style.display = "flex";
    body.classList.add('noscroll');
  });
});

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");

  if (!isModal) {
    modalWindow.style.display = "none";
    body.classList.remove('noscroll');
  }
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.a.remove('noscroll');
});


