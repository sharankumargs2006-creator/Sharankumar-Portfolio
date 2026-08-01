const words = [
  "Web Developer",
  "BCA Student",
  "UI Designer",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const target = document.getElementById("typing");

function typeEffect() {
  const current = words[wordIndex];

  if (deleting) {
    target.textContent = current.substring(0, charIndex--);
  } else {
    target.textContent = current.substring(0, charIndex++);
  }

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

window.addEventListener("DOMContentLoaded", typeEffect);