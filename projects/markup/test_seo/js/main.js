'use strict'
const menuBtn = document.querySelector("[data-menu-button]");
const modalBtn = document.querySelector("[data-modal-open]");

const toggleOpen = function (dataAttribute){
  return function (event) {
    const open = document.querySelector(dataAttribute);
    open.classList.toggle("is-open");
    event.currentTarget.classList.toggle("is-open")
  }
}
menuBtn.addEventListener("click", toggleOpen("[data-menu]"));

modalBtn.addEventListener("click", toggleOpen("[data-modal]"));
