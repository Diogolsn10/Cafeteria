const modal = document.querySelector(".modal");
const mascara  = document.querySelector(".mascara-endereco");
function clicou() {
    modal.style.left = "50%";
    mascara.style.visibility = "visible";
}

function escondermodal() {
    modal.style.left = "-90%";
    mascara.style.visibility = "hidden";
}

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


