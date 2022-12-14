window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const currentImg = document.querySelector(".current");
const activeImg = document.querySelector(".active");
const dontclickEl = document.querySelector(".dontclick");
const navContainer = document.querySelector(".nav-container");
const wordChange = document.querySelector(".word-change");
const colorChange = document.getElementById("color-change");
window.addEventListener("mouseover", () => setInterval(changeColor, 2000));

function changeColor() {
  // console.log("sd");
  const colors = [
    "#e6adad",
    "#e4e486",
    "#80e58f",
    "#78c1ed",
    "#eea6ed",
    "#f49ba5",
  ];
  colorChange.style.color = colors[Math.floor(Math.random() * colors.length)];
  clearInterval(changeColor, 1000);
}

currentImg.addEventListener("click", () => {
  currentImg.classList.toggle("disable");
  activeImg.classList.add("able");
  dontclickEl.textContent = "{told you}";
});

// form js
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (ltr, idx) =>
        `<span style = "transition-delay:${idx * 80}ms">${ltr}</span>`
    )
    .join("");
});
