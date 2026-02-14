// Efek ketikan untuk YEAAYYY
window.onload = function () {
  const text = "YEAAYYY 💖";
  const yayElement = document.getElementById("yay-text");

  yayElement.innerHTML = ""; // reset biar gak double

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      yayElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();
};

// Tombol Next
function goNext() {
  window.location.href = "page2.html";
}
