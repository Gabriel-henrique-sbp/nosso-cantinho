
function moverLista(direcao) {
    const lista = document.getElementById("cardList");

    const card = lista.querySelector(".card");

    if (!card) return;

    const espacamento = 20;
    const largura = card.offsetWidth + espacamento;

    lista.scrollBy({
        left: direcao * largura,
        behavior: "smooth"
    });
}
