const hamburger = document.querySelector('.hamburger');
const meni = document.querySelector('.glavni-nav-lista');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  meni.classList.toggle('active');
});

document.querySelectorAll(".nav-element").forEach(n => n.addEventListener('click',() =>{
  hamburger.classList.remove("active");
  meni.classList.remove("active")
}))