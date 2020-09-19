let comentario = document.getElementById("enviar");
let escrever = document.getElementById("comentario");
let comentarios = [];
let posicao_comen = 0
comentario.onclick = function () {
    if (escrever.value != " ") {
        comentarios.push(escrever.value);
        console.log(comentarios);
        let li = document.createElement("li");
        li.innerHTML = comentarios[posicao_comen];
        document.getElementById("area_comentario").append(li);
        posicao_comen++;
        escrever.value = " ";
    }
}