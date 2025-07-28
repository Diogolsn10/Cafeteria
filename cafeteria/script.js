const modal = document.querySelector(".modal");
const mascara  = document.querySelector(".mascara-endereco");
function clicou() {
    modal.style.left = "50%";
    mascara.style.visibility = "visible";
}

function escondermodal() {
    modal.style.left = "-30%";
    mascara.style.visibility = "hidden";
}


