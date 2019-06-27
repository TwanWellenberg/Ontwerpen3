var scanner = document.querySelector('.scanner');
var papiertje = document.querySelector('section');

papiertje.addEventListener('click', function() {
  scanner.classList.toggle('letsgo');
  papiertje.classList.toggle('kleuren');
})
