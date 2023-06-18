document.addEventListener('click', musicPlay);
function musicPlay() {
  document.getElementById('playAudionhac').play();
  document.removeEventListener('click', musicPlay);
}