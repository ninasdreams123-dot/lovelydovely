const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainImage = document.getElementById("mainImage");
const question = document.getElementById("question");

// Wenn auf Ja geklickt wird
yesBtn.addEventListener("click", () => {
  mainImage.src = "bilder/ja.gif"; // zeigt das zweite Bild
  question.textContent = "Yay, you like me :D";
  yesBtn.style.display = "none";
    noBtn.style.display = "none";

  
});

// Wenn man über den Nein-Knopf geht
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = "left 0.2s, top 0.2s"; // hübscher Sprung
});
