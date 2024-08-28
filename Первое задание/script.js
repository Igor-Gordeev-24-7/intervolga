const wrapperEl = document.querySelector(".wrapper");
const slideFirstEl = document.querySelector(".side-1");
const slideSecondtEl = document.querySelector(".side-2");

document.addEventListener("DOMContentLoaded", () => {
  const slidesEl = document.createElement("div");
  slidesEl.classList.add("slides");
  wrapperEl.append(slidesEl);

  slidesEl.append(slideFirstEl, slideSecondtEl);

  function readSize() {
    if (window.innerWidth <= 768) {
      slidesEl.remove();
      wrapperEl.append(slideFirstEl, slideSecondtEl);
    }
  }
  readSize();
});
