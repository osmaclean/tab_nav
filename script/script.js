

let lista = document.querySelectorAll(".lista");

function ativacaoLink () {
    lista.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add("active");

}

lista.forEach((item) => 
item.addEventListener('click', ativacaoLink))