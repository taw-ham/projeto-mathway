class Sala_Service {
    constructor(url) {
        this.url = url
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Nota {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica, perguntas_certas, perguntas_erradas) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica;
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}
class Nota_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica, tema, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica,perguntas_certas, perguntas_erradas),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Comentario {
    constructor(nome_aluno, comentario, id_aluno) {
        this.nome_aluno = nome_aluno;
        this.comentario = comentario;
        this.id_aluno = id_aluno
    }
}
class Comentario_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, comentario, id_aluno) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, comentario, id_aluno),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Pergunta_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Lista_Teorica_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
var id_login = localStorage.getItem('id');
var nome_login = localStorage.getItem('nome');
$("#escolha_de_sala").hide();
$("#area_escolha_lista_teorica").hide();
$("#fazer_exercicio_lista_teorica").hide();
$("#termino_exercicio").hide();
$("#salas_presentes").click(function () {
    $("#area_de_escolhas").hide("fast");
    $("#escolha_de_sala").show("fast");
    let sala_service = new Sala_Service(`http://localhost:3000/salas?q=${nome_login}`);
    sala_service.listar().then(resposta => {
        let ul = document.getElementById("salas_inseridas");
        for (let i = 0; i <= resposta.length - 1; i++) {
            let li = document.createElement("li");
            let button_acessar_sala = document.createElement("button");
            button_acessar_sala.innerHTML = resposta[i].nome;
            button_acessar_sala.setAttribute('id', resposta[i].id);
            li.append(button_acessar_sala);
            ul.append(li);
            button_acessar_sala.onclick = function () {
                $("#escolha_de_sala").hide("fast");
                $("#area_escolha_lista_teorica").show("fast");
                var id_sala = event.target.id;
                let lista_teorica_service = new Lista_Teorica_Service(`http://localhost:3000/lista_teoricas?id_sala =${id_sala}`);
                let ul = document.getElementById("listas_teoricas");
                lista_teorica_service.listar().then(resposta => {
                    for (let i = 0; i <= resposta.length - 1; i++) {
                        let li = document.createElement("li");
                        let button_acessar_lista = document.createElement("button");
                        button_acessar_lista.innerHTML = resposta[i].nome
                        button_acessar_lista.setAttribute('id', resposta[i].id);
                        li.append(button_acessar_lista);
                        ul.append(li);
                        button_acessar_lista.onclick = function () {
                            $("#area_escolha_lista_teorica").hide("fast");
                           
                            var id_lista_teorica = event.target.id;
                            let nota_service = new Nota_Service(`http://localhost:3000/notas?id_aluno=${id_login}&id_lista_teorica=${id_lista_teorica}`);
                            nota_service.listar().then(resposta => {
                                if (resposta.length > 0) {
                                    $("#termino_exercicio").show("fast");
                                    $("#lugar_nota").text(`Sua Nota foi ${resposta[0].nota}`);
                                    let pergunta_errada = resposta[0].perguntas_erradas;
                                    let perguntas_certas = resposta[0].perguntas_certas;
                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                    for (let i = 0; i <= perguntas_certas.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = perguntas_certas[i];
                                        button.innerHTML = "V"
                                        li.append(button);
                                        ul_resposta_certa.append(li);
                                    }
                                    for (let i = 0; i <= pergunta_errada.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = pergunta_errada[i];
                                        button.innerHTML = "X"
                                        li.append(button);
                                        ul_resposta_errada.append(li);
                                    }
                                    $("#voltar_escolha_lista_teorica").click(function () {
                                        $("#termino_exercicio").hide("fast");
                                        $("#area_escolha_lista_teorica").show("fast");
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();

                                    })

                                } else {
                                    $("#fazer_exercicio_lista_teorica").show("fast");

                                    let lista_teorica_service = new Lista_Teorica_Service(`http://localhost:3000/lista_teoricas?id=${id_lista_teorica}&id_sala=${id_sala}`);
                                    lista_teorica_service.listar().then(resposta => {
                                        let nota = 0;
                                        let posicao_certa = 0;
                                        let posicao_errada = 0;
                                        let t_number = 1;
                                        let lista_opcoes2 = [1, 2, 3, 4, 5]
                                        let lista_pergunta = resposta[0].perguntas;
                                        let lista_opcoes = resposta[0].opcoes;
                                        let lista_opcoes_corretas = resposta[0].opcoes_certas
                                        lista_opcoes.push(lista_opcoes2);
                                        let posicao_pergunta = 0;
                                        let posicao_opcoes = 0;
                                        let posicao_opcoes_certas = 0;
                                        let lista_erradas_usuario = [];
                                        let lista_certas_usuario = [];
                                        let input_radio = document.querySelectorAll("#valor");
                                        let label_escolhas = document.querySelectorAll("#escolha");
                                        let perguntas = document.getElementById("place_perguntas");
                                        perguntas.innerHTML = "1) " + lista_pergunta[posicao_pergunta];
                                        for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                            label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                        }
                                        document.getElementById("proxima_pergunta").onclick = function () {
                                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                            console.log(input_radio_situacao)
                                            if (typeof input_radio_situacao != "undefined") {

                                                if (lista_opcoes_corretas[posicao_opcoes_certas] == input_radio_situacao) {
                                                    lista_certas_usuario.push(lista_pergunta[posicao_pergunta]);
                                                    console.log(lista_certas_usuario);
                                                    posicao_certa++
                                                    console.log(posicao_certa)
                                                    swal('Acertou!', 'parabéns', 'success');
                                                    nota += 10;

                                                } else {
                                                    lista_erradas_usuario.push(lista_pergunta[posicao_pergunta])
                                                    posicao_errada++;
                                                    console.log(posicao_errada);
                                                    swal('Oh no...', 'Você errou!', 'error')
                                                }
                                                t_number++;
                                                posicao_pergunta++;

                                                posicao_opcoes++;
                                                posicao_opcoes_certas++;

                                                let input_radio_checker = $("input[name='opcoes']")
                                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                    input_radio_checker[i].checked = false;
                                                }
                                                perguntas.innerHTML = `${t_number}/10)  ${lista_pergunta[posicao_pergunta]}`;
                                                for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                                    label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                                    input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                                }
                                                if (posicao_pergunta == 10) {
                                                    console.log("termino da lista teórica");
                                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                                    $("#termino_exercicio").show("fast");
                                                    $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                    let nota_class = new Nota(nome_login,nota,id_login,id_lista_teorica,lista_certas_usuario,lista_erradas_usuario);
                                                    let nota_service = new Nota_Service("http://localhost:3000/notas");
                                                    nota_service.inserir(nota_class).then(resposta => {
                                                        console.log(resposta);
                                                    })
                                                    for (let i = 0; i <= posicao_certa - 1; i++) {
                                                        let li = document.createElement("li");
                                                        li.setAttribute('id', 'certas')
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "V";
                                                        button.setAttribute('id', 'perguntas_certas');
                                                        li.innerHTML = lista_certas_usuario[i];
                                                        li.append(button);
                                                        ul_resposta_certa.append(li);

                                                    }
                                                    for (let i = 0; i <= posicao_errada - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "X";
                                                        button.setAttribute('id', 'perguntas_erradas');
                                                        $("#perguntas_erradas").css({
                                                            "background-color": "red",
                                                            "color": "#F5F5F5"
                                                        })
                                                        li.innerHTML = lista_erradas_usuario[i];
                                                        li.append(button);
                                                        ul_resposta_errada.append(li);
                                                    }
                                                    $("#voltar_escolha_lista_teorica").click(function () {
                                                        $("#termino_exercicio").hide("fast");
                                                        $("#area_escolha_lista_teorica").show("fast");
                                                        $("#reposta_certa").empty();
                                                        $("#pergunta_errada").empty();
                                                        posicao_pergunta = 0;
                                                        posicao_opcoes = 0;
                                                        posicao_opcoes_certas = 0;
                                                        t_number = 1;
                                                        nota = 0;
                                                    })
                                                }
                                            } else {
                                                swal('Oh no...', 'Selecione alguma opção', 'error')
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
                $("#voltar_da_area_sala_especifica").click(function () {
                    $("#listas_teoricas").empty();
                    $("#area_escolha_lista_teorica").hide("fast");
                    $("#escolha_de_sala").show("fast");
                })
            }
        }
    })
    $("#voltar_da_area_de_escolha_de_salas").click(function () {
        $("#salas_inseridas").empty();
        $("#area_de_escolhas").show("fast");
        $("#escolha_de_sala").hide("fast");
    })
})