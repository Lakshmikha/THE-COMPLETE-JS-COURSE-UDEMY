"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden"); //to close when clicked on the exit button
  overlay.classList.add("hidden"); //to close when clicked outside of modal
};

const openModal = function () {
  modal.classList.remove("hidden"); //to make the modal visible by removing the hidden class from style
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //for loop to make it available for all three buttons
  btnsOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" /*&& !modal.classList.contains('hidden')*/) {
      //without && conditon it still works the same
    }
    closeModal();
  });
}
