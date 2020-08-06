class PROFESSOR {
    constructor(nome, senha, email) {
        this.nome = nome;
        this.senha = senha;
        this.email = email
    }
}
class ProfessorService {
    constructor(url) {
        this.url = url
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())

    }
    inserir(nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json()
        );
    }
    remove(id) {
        return fetch(this.url + "/" + id, {
            method: "DELETE"

        }).then(resposta => resposta.json());
    }
}
class Pergunta {
    constructor(pergunta, opcoes, opcao_certa, id_criador, tema, id_tema) {
        this.pergunta = pergunta;
        this.opcoes = opcoes,
            this.opcao_certa = opcao_certa,
            this.id_criador = id_criador;
        this.tema = tema;
        this.id_tema = id_tema;
    }
}
class Perguntas_Service {
    constructor(url) {
        this.url = url
    }
    inserir(pergunta, opcoes, opcao_certa, id_criador, tema, id_tema) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(pergunta, opcoes, opcao_certa, id_criador, tema, id_tema),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(results => results.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET",
        }).then(resposta => resposta.json())
    }
}
class Salas {
    constructor(nome, id_criador, participantes) {
        this.nome = nome;
        this.id_criador = id_criador
        this.participantes = participantes
    }
}

class Salas_Service {
    constructor(url) {
        this.url = url
    }
    lista() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
    inserir(nome, id_criador, participantes) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_criador, participantes),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    apagar(id) {
        return fetch(this.url + "/" + id, {
            method: "DELETE"
        }).then(resposta => resposta.json());
    }
}
class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
}
class Aluno_Service {
    constructor(url) {
        this.url = url;
    }
    lista() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Lista_Teoria {
    constructor(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala, Data_de_entrega, tempo_de_termino) {
        this.nome = nome,
            this.perguntas = perguntas,
            this.opcoes = opcoes,
            this.opcoes_certas = opcoes_certas,
            this.id_criador = id_criador,
            this.id_sala = id_sala,
            this.Data_de_entrega = Data_de_entrega,
            this.tempo_de_termino = tempo_de_termino

    }
}
class Lista_Teoria_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala, Data_de_entrega, tempo_de_termino) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala, Data_de_entrega, tempo_de_termino),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    lista() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
    deletar(id) {
        return fetch(this.url + "/" + id, {
            method: "DELETE"
        }).then(resposta => resposta.json())
    }
    deletar_elem(id) {
        return fetch(thi.url + id, {
            method: "DELETE"
        }).then(resposta => resposta.json())
    }
}
class Nota_Service {
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

$("#look_participantes").hide("fast");
$("#area_de_criar_sala").hide("fast");
$("#area_acessar_sala").hide("fast");
$("#opcoes_da_sala").hide("fast");
$("#area_criar_lista_teorica").hide("fast");
$("#area_opcoes_temas").hide("fast");
$("#look_lista_teorica").hide("fast");
$("#lugar_ver_nota").hide("fast");

document.getElementById("salas_criadas").onclick = function () {
    $("#area_acessar_sala").show("fast");
    $("#menu_escolhas").hide("fast");
    let sala_service = new Salas_Service(`http://localhost:3000/salas?id_criador=${id_login}`);
    sala_service.lista().then(resposta => {
        let ul = document.getElementById("opcoes_salas");
        for (let i = 0; i <= resposta.length - 1; i++) {
            let button_acessar_sala = document.createElement("button");
            let li = document.createElement("li");
            button_acessar_sala.innerHTML = resposta[i].nome;
            button_acessar_sala.setAttribute("id", resposta[i].id);
            li.append(button_acessar_sala);
            let button_apagar_sala = document.createElement("button");
            button_apagar_sala.innerHTML = "apagar sala" + " " + resposta[i].nome;
            button_apagar_sala.setAttribute("id", resposta[i].id) // atribuindo o identificador que tem no banco de dados ao id do elemento button
            li.append(button_apagar_sala);
            ul.append(li);
            button_acessar_sala.onclick = function () {
                var id_sala = event.target.id;
                $("#area_acessar_sala").hide("fast");
                $("#opcoes_da_sala").show("fast");
                document.getElementById("ver_nota").onclick = function () {
                    $("#opcoes_da_sala").hide("fast");
                    $("#lugar_ver_nota").show("fast");
                    $("#ver_nota_aluno").hide("fast");
                    let ul = document.getElementById("lista_teorica_nota");

                    let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`);
                    lista_teorica_service.lista().then(resposta => {
                        for (let i = 0; i <= resposta.length - 1; i++) {
                            let li = document.createElement("li");
                            li.setAttribute("id", resposta[i].id);
                            let button_ver_nota = document.createElement("button");
                            button_ver_nota.innerHTML = resposta[i].nome;
                            button_ver_nota.setAttribute("id", resposta[i].id);
                            li.append(button_ver_nota);
                            ul.append(li);
                            button_ver_nota.onclick = function () {
                                let id_lista_teorica = event.target.id;
                                $("#selecionar_lista_nota").hide("fast");
                                $("#ver_nota_aluno").show("fast");
                                let nota_service = new Nota_Service(`http://localhost:3000/notas?id_lista_teorica=${id_lista_teorica}`);
                                nota_service.listar().then(resposta => {
                                    let ul = document.getElementById("place_nota");
                                    for (let i = 0; i <= resposta.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let span_nome = document.createElement("span");
                                        let span_nota = document.createElement("span");
                                        span_nome.innerHTML = "Nome do aluno: " + resposta[i].nome_aluno + "</br>";
                                        span_nota.innerHTML = "Nota do aluno: " + resposta[i].nota;
                                        li.append(span_nome);
                                        li.append(span_nota);
                                        ul.append(li);
                                    }
                                })
                                document.getElementById("voltar_ver_nota").onclick = function () {
                                    $("#place_nota").empty()
                                    $("#ver_nota_aluno").hide("fast");
                                    $("#selecionar_lista_nota").show("fast");
                                }

                            }
                        }
                    })
                    document.getElementById("voltar_lugar_ver_nota").onclick = function () {
                        $("#lugar_ver_nota").hide("fast");
                        $("#lista_teorica_nota").empty()
                        $("#opcoes_da_sala").show("fast");
                    }
                }

                document.getElementById("ver_lista_teorica").onclick = function () {
                    $("#opcoes_da_sala").hide("fast");
                    $("#look_lista_teorica").show("fast");
                    $("#proximo_passo3").hide("fast");
                    $("#termino_exercicio").hide("fast");
                    let ul = document.getElementById("listas_teoricas");
                    let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`);
                    lista_teorica_service.lista().then(resposta => {
                        for (let i = 0; i <= resposta.length - 1; i++) {
                            let li = document.createElement("li");
                            li.setAttribute("id", resposta[i].id);
                            let button_acessar_lista_teorica = document.createElement("button");
                            button_acessar_lista_teorica.innerHTML = resposta[i].nome;
                            button_acessar_lista_teorica.setAttribute("id", resposta[i].id);
                            let button_apagar_lista_teorica = document.createElement("button");
                            button_apagar_lista_teorica.innerHTML = "apagar lista " + resposta[i].nome;
                            button_apagar_lista_teorica.setAttribute("id", resposta[i].id);
                            li.append(button_acessar_lista_teorica);
                            li.append(button_apagar_lista_teorica);
                            ul.append(li);
                            button_apagar_lista_teorica.onclick = function () {
                                let id = event.target.id;
                                $("li,button").remove(`#${id}`)
                                let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                lista_teorica_service.deletar(id).then(resposta => {
                                    console.log(resposta)

                                })
                            }
                            button_acessar_lista_teorica.onclick = function () {
                                let id = event.target.id
                                $("#selecionar_lista").hide("fast");
                                $("#proximo_passo3").show("fast");
                                $("#termino_exercicio").hide("fast");
                                let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id=${id}`);
                                lista_teorica_service.lista().then(resposta => {
                                    let lista_perguntas = resposta[0].perguntas;
                                    let lista_opcoes = resposta[0].opcoes;
                                    let opcoes_certas = resposta[0].opcoes_certas;
                                    let posicao_pergunta = 0;
                                    let posicao_opcoes = 0;
                                    let posicao_opcoes_certas = 0;
                                    let t_number = 1;
                                    let lista_perguntas_erradas_usuario = [];
                                    let lista_perguntas_certas_user = [];
                                    let nota = 0;
                                    let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                                    let input_radio = document.querySelectorAll("#valor");
                                    let lugar_perguntas = document.getElementById("place_perguntas");
                                    let opcoes2 = [1, 2, 3, 4, 5];
                                    lista_opcoes.push(opcoes2)
                                    lugar_perguntas.innerHTML = `${t_number}/10 ${lista_perguntas[posicao_pergunta]}`;
                                    for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                        lugar_opcoes_resposta[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                        input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                    }

                                    document.getElementById("proxima_pergunta").onclick = function () {
                                        let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                        console.log(input_radio_situacao)
                                        if (typeof input_radio_situacao != "undefined") {
                                            if (opcoes_certas[posicao_opcoes_certas] == input_radio_situacao) {
                                                lista_perguntas_certas_user.push(lista_perguntas[posicao_pergunta]);
                                                console.log(lista_perguntas_certas_user);
                                                swal('Acertou!', 'parabéns', 'success');
                                                nota += 10
                                            } else {
                                                lista_perguntas_erradas_usuario.push(lista_perguntas[posicao_pergunta])
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
                                            lugar_perguntas.innerHTML = `${t_number}/10)  ${lista_perguntas[posicao_pergunta]}`;
                                            for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                lugar_opcoes_resposta[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                                input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                            }
                                            if (posicao_pergunta == 10) {
                                                console.log("termino da lista teórica");
                                                $("#proximo_passo3").hide("fast");
                                                $("#termino_exercicio").show("fast");
                                                $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                posicao_pergunta = 0;
                                                posicao_opcoes = 0;
                                                posicao_opcoes_certas = 0;
                                                t_number = 1;
                                                nota = 0;
                                                let ul_resposta_certa = document.getElementById("reposta_certa");
                                                let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                document.getElementById("voltar_look_lista_teorica").onclick = function () {
                                                    $("#termino_exercicio").hide("fast");
                                                    $("#selecionar_lista").show("fast");
                                                    $("#reposta_certa").empty();
                                                    $("#pergunta_errada").empty();
                                                }
                                                for (let i = 0; i <= lista_perguntas_certas_user.length - 1; i++) {
                                                    let li = document.createElement("li");
                                                    li.setAttribute('id', 'certas')
                                                    let button = document.createElement("button");
                                                    button.innerHTML = "V";
                                                    button.setAttribute('id', 'perguntas_certas');
                                                    li.innerHTML = lista_perguntas_certas_user[i];
                                                    li.append(button);
                                                    ul_resposta_certa.append(li);
                                                }
                                                for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                                    let li = document.createElement("li");
                                                    let button = document.createElement("button");
                                                    button.innerHTML = "X";
                                                    button.setAttribute('id', 'perguntas_erradas');
                                                    li.innerHTML = lista_perguntas_erradas_usuario[i];
                                                    li.append(button);
                                                    ul_resposta_errada.append(li);
                                                }
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    })
                    /*let ul = document.getElementById("lugar_lista_teorica");
                    let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`);
                    lista_teorica_service.lista().then(resposta => {
                        for (let i = 0; i <= resposta.length - 1; i++) {
                            let li = document.createElement("li");
                            li.setAttribute("id", resposta[i].id);
                            let button_acessar_lista_teorica = document.createElement("button");
                            button_acessar_lista_teorica.innerHTML = resposta[i].nome;
                            button_acessar_lista_teorica.setAttribute("id", resposta[i].id);
                            let button_apagar_lista_teorica = document.createElement("button");
                            button_apagar_lista_teorica.innerHTML = "apagar lista " + resposta[i].nome;
                            button_apagar_lista_teorica.setAttribute("id", resposta[i].id);
                            li.append(button_acessar_lista_teorica);
                            li.append(button_apagar_lista_teorica);
                            ul.append(li);
                            button_apagar_lista_teorica.onclick = function () {
                                let id = event.target.id;
                                $("li,button").remove(`#${id}`)
                                let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                lista_teorica_service.deletar(id).then(resposta => {
                                    console.log(resposta)

                                })
                            }
                            button_acessar_lista_teorica.onclick = function () {
                                let lista_perguntas;
                                let lista_opcoes;
                                let perguntas = document.getElementById("pergunta");
                                let opcoes = document.querySelectorAll("#opcao");
                                let posicao_pergunta = 0;
                                let posicao_opcoes = 0;
                                let id = event.target.id;
                                $("#conteudo_da_lista_teorica").show("fast");
                                let nota_service = new Nota_Service(`http://localhost:3000/notas?id_lista_teorica=${id}`);
                                nota_service.listar().then(resposta => {
                                    let ul = document.getElementById("place_notas");
                                    for (let i = 0; i <= resposta.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let span_nome = document.createElement("span");
                                        let span_nota = document.createElement("span");
                                        span_nome.innerHTML = "Nome do aluno: " + resposta[i].nome_aluno + "</br>";
                                        span_nota.innerHTML = "Nota do aluno: " + resposta[i].nota;
                                        li.append(span_nome);
                                        li.append(span_nota);
                                        ul.append(li);
                                    }
                                })
                                let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id=${id}`);
                                lista_teorica_service.lista().then(resposta => {
                                    lista_perguntas = resposta[0].perguntas;
                                    lista_opcoes = resposta[0].opcoes;
                                    opcoes_certas = resposta[0].opcoes_certas;
                                    perguntas.innerHTML = lista_perguntas[posicao_pergunta];
                                    for (let i = 0; i <= opcoes.length - 1; i++) {
                                        opcoes[i].innerHTML = lista_opcoes[posicao_opcoes][i];

                                    }
                                    document.getElementById("proxima_pergunta").onclick = function () {
                                        posicao_pergunta++;
                                        if (posicao_pergunta < 10) {
                                            posicao_opcoes++;
                                            console.log(posicao_opcoes);
                                            perguntas.innerHTML = lista_perguntas[posicao_pergunta];
                                            for (let i = 0; i <= opcoes.length - 1; i++) {
                                                opcoes[i].innerHTML = lista_opcoes[posicao_opcoes][i];

                                            }
                                        } else {
                                            $("#situcao_posicao_lista_teorica").text("você chegou a última questão da sua lista teórica");
                                        }
                                    }

                                })
                            }
                        }
                    })
                    document.getElementById("voltar_tela_inicial").onclick = function () {
                        $("#look_participantes").show("fast");
                        $("#criar_lista").show("fast");
                        $("#look_listas_teoricas").show("fast");
                        $("#listas_teoricas_especificas").hide("fast");
                        $("#voltar_tela_inicial").hide("fast")
                        $("#conteudo_da_lista_teorica").hide("fast");
                        $("#lugar_lista_teorica").empty();
                        $("#place_notas").empty()
                    }
                }
            }
            button_apagar_sala.onclick = function () {
                let id = event.target.id; //pega o id do botão clicado
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.apagar(id).then(resposta => {
                    console.log(resposta);
                    location.reload();
                })
            }
        }
    })
}

*/
                }
                document.getElementById("nao_look_lista_teorica").onclick = function () {
                    $("#listas_teoricas").empty();
                    $("#look_lista_teorica").hide("fast");
                    $("#opcoes_da_sala").show("fast");
                }


                document.getElementById("ver_participantes").onclick = function () {
                    $("#opcoes_da_sala").hide("fast");
                    $("#look_participantes").show("fast");
                    let ul_participantes = document.getElementById("participantes")
                    let sala_service = new Salas_Service(`http://localhost:3000/salas?id=${id_sala}&id_criador=${id_login}`);
                    sala_service.lista().then(resposta => {
                        let participantes;
                        for (let i = 0; i <= resposta.length - 1; i++) {
                            participantes = resposta[i].participantes
                        }
                        for (let i = 0; i <= participantes.length - 1; i++) {
                            let li = document.createElement("li");
                            li.innerHTML = participantes[i];
                            ul_participantes.append(li);
                        }
                        document.getElementById("nao_ver_participantes").onclick = function () {
                            $("#look_participantes").hide("fast");
                            $("#opcoes_da_sala").show("fast");
                            $("#participantes").empty();
                        }
                    })
                }
                document.getElementById("criar_lista_teorica").onclick = function () {
                    $("#opcoes_da_sala").hide("fast");
                    $("#area_opcoes_temas").show("fast");
                    let opcoes_temas = document.querySelectorAll(".opcoes_temas");
                    for (let i = 0; i <= opcoes_temas.length - 1; i++) {
                        opcoes_temas[i].onclick = function () {
                            opcoes_temas = opcoes_temas[i].textContent;
                            $("#area_opcoes_temas").hide("fast");
                            var id_tema = event.target.id;
                            $("#area_criar_lista_teorica").show("fast");
                            $("#nome_lista").show("fast");
                            $("#proximo_passo2").hide("fast");
                            document.getElementById("salva_nome_lista_teorica").onclick = function () {
                                let nome_da_lista_teorica = $("#nome_lista_teorica").val();
                                let tempo_de_fazer_lista = $("#tempo_fazer_lista").val();
                                let data_entrega = $("#data_entrega").val();
                                if (nome_da_lista_teorica == "") {
                                    swal('DIGITE O NOME DA LISTA TEORICA', 'tente novamente', 'error')
                                } else {
                                    let lista_perguntas = [];
                                    let lista_opcoes = [];
                                    let opcoes_certas = [];
                                    let cont_perguntas = 0;
                                    let contador_perguntas = document.getElementById("contador")
                                    $("#nome_lista").hide("fast");
                                    $("#proximo_passo2").show("fast");
                                    let pergunta_service = new Perguntas_Service(`http://localhost:3000/perguntas?id_tema=${id_tema}`);
                                    pergunta_service.listar().then(resposta => {
                                        console.log(resposta);
                                        let ul = document.getElementById("perguntas_servidor");
                                        for (let i = 0; i <= resposta.length - 1; i++) {
                                            let li = document.createElement("li");
                                            let button = document.createElement("button");
                                            button.innerHTML = resposta[i].pergunta;
                                            button.setAttribute("id", resposta[i].id)
                                            li.append(button);
                                            ul.append(li);
                                            button.onclick = function () {
                                                lista_perguntas.push(button.textContent);
                                                console.log(lista_perguntas);
                                                lista_opcoes.push(resposta[i].opcoes);
                                                console.log(lista_opcoes)
                                                opcoes_certas.push(resposta[i].opcao_certa);
                                                console.log(opcoes_certas);
                                                cont_perguntas++;
                                                contador_perguntas.innerHTML = cont_perguntas + "/10 no máximo pode adicionar 10 perguntas e no minimo 10";
                                                if (cont_perguntas == 10) {
                                                    let lista_teorica = new Lista_Teoria(nome_da_lista_teorica, lista_perguntas, lista_opcoes, opcoes_certas, id_login, id_sala, data_entrega, tempo_de_fazer_lista);
                                                    let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                                    lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                        swal('LISTA CRIADA COM SUCESSO', 'vamos voltar a área de escolhas de opcões de sala', 'success');
                                                        $("#perguntas_servidor").empty();
                                                        $("#area_criar_lista_teorica").hide("fast");
                                                        $("#opcoes_da_sala").show("fast");

                                                    })
                                                }
                                            }
                                        }
                                    })
                                    document.getElementById("adicionar_pergunta").onclick = function () {
                                        let pergunta_user = document.getElementById("pergunta_professor");
                                        let opcoes_user = document.getElementById("opcoes_professor");
                                        let opcao_correta_user = document.getElementById("opcao_correta");
                                        let opcoes_user2 = opcoes_user.value;
                                        let especificacao = " ";
                                        let especificacao2 = ",";
                                        let opcoes_check;
                                        let temp = opcoes_user2.split(especificacao);
                                        let temp2 = opcoes_user2.split(especificacao2);
                                        if (temp.length > 0) {
                                            opcoes_check = temp
                                        } else {
                                            opcoes_check = temp2
                                        }
                                        console.log(opcoes_check)
                                        if (pergunta_user.value == "" || opcoes_user.value == "" || opcao_correta_user.value == "" || opcoes_check.length > 5 || opcoes_check.length < 5) {
                                            swal('Uma das entradas está inválida', 'tente novamente', 'error');

                                        } else {

                                            pergunta_user = pergunta_user.value;
                                            opcoes_user = opcoes_user.value;
                                            opcao_correta_user = opcao_correta_user.value;
                                            lista_perguntas.push(pergunta_user);
                                            console.log(lista_perguntas);
                                            lista_opcoes.push(opcoes_check);
                                            console.log(lista_opcoes);
                                            opcoes_certas.push(opcao_correta_user)
                                            console.log(opcoes_certas);
                                            cont_perguntas++;
                                            document.getElementById("pergunta_professor").value = "";
                                            document.getElementById("opcoes_professor").value = "";
                                            document.getElementById("opcao_correta").value = "";
                                            contador_perguntas.innerHTML = cont_perguntas + "/10 no máximo pode adicionar 10 perguntas e no minimo 10";
                                            let pergunta = new Pergunta(pergunta_user, opcoes_check, opcao_correta_user, id_login, opcoes_temas, id_tema);
                                            let pergunta_service = new Perguntas_Service("http://localhost:3000/perguntas");
                                            pergunta_service.inserir(pergunta).then(resposta => {
                                                console.log(resposta);
                                            })
                                            if (cont_perguntas == 10) {
                                                $("#contador").text("0");
                                                let lista_teorica = new Lista_Teoria(nome_da_lista_teorica, lista_perguntas, lista_opcoes, opcoes_certas, id_login, id_sala, data_entrega, tempo_de_fazer_lista);
                                                let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                                lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                    swal('LISTA CRIADA COM SUCESSO', 'vamos voltar a área de escolhas de opcões de sala', 'success');
                                                    $("#perguntas_servidor").empty();
                                                    $("#area_criar_lista_teorica").hide("fast");
                                                    $("#opcoes_da_sala").show("fast");

                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    let click = 0
                    document.getElementById("situacao_foto").onclick = function () {
                        if (click == 0) {
                            let img = document.createElement("img");
                            let url = document.getElementById("foto").value;
                            let tamanho = document.getElementById("tamanho").value;
                            img.src = url;
                            img.setAttribute('width', tamanho);
                            img.setAttribute('id', 'fotos_teste')
                            console.log(foto);
                            let div = document.getElementById("place_foto");
                            div.append(img);
                        }else{
                            let img_fotos = document.getElementById("fotos_teste");
                            let url2 = document.getElementById("foto").value;
                            let tamanho2 = document.getElementById("tamanho").value;
                            img_fotos.src = url2;
                            img_fotos.setAttribute('width',tamanho2);
                        }
                        click ++

                    }
                }
            }
        }
    })
    document.getElementById("voltar_da_area_acessar_sala").onclick = function () {
        $("#area_acessar_sala").hide("fast");
        $("#opcoes_salas").empty();
        $("#menu_escolhas").show("fast");

    }
}
document.getElementById("criar_sala").onclick = function () {
    $("#menu_escolhas").hide("fast");
    $("#area_de_criar_sala").show("fast");
    $("#nome_sala").show("fast");
    $("#proximo_passo").hide("fast");
    document.getElementById("salva_nome_sala").onclick = function () {
        let nome_sala = $("#sala_nome").val();
        if (nome_sala == "") {
            swal('digite o nome da sala', 'tente novamente', 'error');
        } else {
            $("#nome_sala").hide("fast");
            $("#proximo_passo").show("fast");
            let lista_participantes = []
            document.getElementById("adicionar_aluno").onclick = function () {
                let participante = $("#participante").val();
                let situacao_usuario = document.getElementById("situacao_usuario");
                document.getElementById("participante").value = "";
                let aluno_service = new Aluno_Service(`http://localhost:3000/Alunos?nome=${participante}`);
                aluno_service.lista().then(resposta => {
                    if (resposta.length == 0) {
                        situacao_usuario.innerHTML = "Usuário Inválido "
                    } else {
                        situacao_usuario.innerHTML = "Usuário Válido";
                        console.log(resposta[0].nome)
                        lista_participantes.push(resposta[0].nome);
                    }
                })
            }
            document.getElementById("criar_sala_especifica").onclick = function () {
                let sala = new Salas(nome_sala, id_login, lista_participantes);
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.inserir(sala).then(resposta => {
                    console.log(resposta);
                    location.reload(); //atualiza a página
                })
            }
        }
    }
}



/*
let sala_service = new Salas_Service(`http://localhost:3000/salas?id_criador=${id_login}`);
sala_service.lista().then(resposta => {
    let ul = document.getElementById("opcoes_salas");
    for (let i = 0; i <= resposta.length - 1; i++) {
        let button_acessar_sala = document.createElement("button");
        let li = document.createElement("li");
        button_acessar_sala.innerHTML = resposta[i].nome;
        button_acessar_sala.setAttribute("id", resposta[i].id);
        li.append(button_acessar_sala);
        let button_apagar_sala = document.createElement("button");
        button_apagar_sala.innerHTML = "apagar sala" + " " + resposta[i].nome;
        button_apagar_sala.setAttribute("id", resposta[i].id) // atribuindo o identificador que tem no banco de dados ao id do elemento button
        li.append(button_apagar_sala);
        ul.append(li);
        button_acessar_sala.onclick = function () {
            $("#area_das_salas").hide("fast");
            $("#area_sala_especifica").show("fast");
            $("#area_de_olhar_participantes").hide("fast");
            $("#conteudo_da_lista_teorica").hide("fast");
            $("#area_de_criacao_de_listas_teoricas").hide("fast");
            $("#area_de_listas_teoricas").hide("fast");
            var id_sala = event.target.id; //pega o id do botão clicado
            document.getElementById("criar_lista").onclick = function () {
                let lista_perguntas = [];
                let lista_opcoes = [];
                let opcoes_certas = [];
                let contador_perguntas = document.getElementById("cont_perguntas");
                var cont_perguntas = 0;
                $("#look_participantes").hide("fast");
                $("#look_listas_teoricas").hide("fast");
                $("#criar_lista").hide("fast");
                $("#temas").show("fast");
                $("#area_de_listas_teoricas").show();
                $("#listas_teoricas_especificas").hide()
                $("#conteudo_da_lista_teorica").hide("fast");
                $("#area_de_criacao_de_listas_teoricas").show("fast");
                $("#conteudo_da_lista_teorica").hide("fast");
                $("#lista").hide();
                let button_temas = document.querySelectorAll(".opcoes_temas");
                console.log(button_temas);
                for (let i = 0; i <= button_temas.length - 1; i++) {
                    button_temas[i].onclick = function () {
                        $("#temas").hide("fast");
                        var id_tema = event.target.id;
                        button_temas = button_temas[i].textContent;
                        $("#lista").show();
                        $("#proxima_etapa").hide();
                        let nome_lista = document.getElementById("nome_lista");
                        nome_lista.onclick = function () {
                            let nome_da_lista = document.getElementById("nome_lista_teorica").value;

                            if (nome_da_lista != "") {
                                $("#nome_lista").hide("fast");
                                $("#nome_lista_teorica").hide("fast");
                                $("#situcao_nome_lista").hide("fast");

                                $("#proxima_etapa").show();
                                $("#lista").show();
                                console.log(button_temas)
                                let pergunta_service = new Perguntas_Service(`http://localhost:3000/perguntas?id_tema=${id_tema}`);
                                pergunta_service.listar().then(resposta => {
                                    console.log(resposta);
                                    let ul = document.getElementById("perguntas_server");
                                    for (let i = 0; i <= resposta.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        button.innerHTML = resposta[i].pergunta;
                                        button.setAttribute("id", resposta[i].id)
                                        li.append(button);
                                        ul.append(li);
                                        button.onclick = function () {
                                            lista_perguntas.push(button.textContent);
                                            console.log(lista_perguntas);
                                            lista_opcoes.push(resposta[i].opcoes);
                                            console.log(lista_opcoes)
                                            opcoes_certas.push(resposta[i].opcao_certa);
                                            console.log(opcoes_certas);
                                            cont_perguntas++;

                                            contador_perguntas.innerHTML = cont_perguntas + "/10 no máximo pode adicionar 10 perguntas e no minimo 10";
                                            if (cont_perguntas == 10) {
                                                $("#lista").hide("fast");
                                                let lista_teorica = new Lista_Teoria(nome_da_lista, lista_perguntas, lista_opcoes, opcoes_certas, id_login, id_sala);
                                                let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                                lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                    console.log(resposta);
                                                    $("#situacao_sala").show("fast");
                                                    $("#situacao_sala").text("sala criada com sucesso aperte em voltar a tela inicial")
                                                    $("#voltar_opcoes").show("fast");
                                                    document.getElementById("voltar_opcoes").onclick = function(){
                                                        $("#look_participantes").show("fast");
                                                        $("#look_listas_teoricas").show("fast");
                                                        $("#criar_lista").show("fast");
                                                        $("#voltar_opcoes").hide("fast");
                                                        $("#situacao_sala").hide("fast");
                                                        $("#area_sala_especifica").show("fast");
                                                        $("#perguntas_server").empty();
                                                        $("#cont_perguntas").text("0");

                                                    }
                                                
                                                })
                                            }

                                        }
                                    }
                                })
                                document.getElementById("adicionar_pergunta").onclick = function () {
                                    let pergunta_user = document.getElementById("pergunta_user");
                                    let opcoes_user = document.getElementById("opcoes_user");
                                    let opcao_correta_user = document.getElementById("opcao_correta");
                                    let opcoes_user2 = opcoes_user.value;
                                    let especificacao = " ";
                                    let especificacao2 = ",";
                                    let opcoes_check;
                                    let temp = opcoes_user2.split(especificacao);
                                    let temp2 = opcoes_user2.split(especificacao2);
                                    if (temp.length > 0) {
                                        opcoes_check = temp
                                    } else {
                                        opcoes_check = temp2
                                    }
                                    console.log(opcoes_check)
                                    if (pergunta_user.value == "" || opcoes_user.value == "" || opcao_correta_user.value == "" || opcoes_check.length > 5 || opcoes_check.length < 5) {
                                        document.getElementById("situacao_lista").innerHTML = "uma das entradas está inválida";
                                        console.log("uma das entradas está inválida")
                                    } else {
                                        document.getElementById("situacao_lista").innerHTML = "pergunta inserida com sucesso";
                                        pergunta_user = pergunta_user.value;
                                        opcoes_user = opcoes_user.value;
                                        opcao_correta_user = opcao_correta_user.value;
                                        lista_perguntas.push(pergunta_user);
                                        console.log(lista_perguntas);
                                        lista_opcoes.push(opcoes_check);
                                        console.log(lista_opcoes);
                                        opcoes_certas.push(opcao_correta_user)
                                        console.log(opcoes_certas);
                                        cont_perguntas++;
                                        contador_perguntas.innerHTML = cont_perguntas + "/10 no máximo pode adicionar 10 perguntas e no minimo 10";
                                        let pergunta = new Pergunta(pergunta_user, opcoes_check, opcao_correta_user, id_login, button_temas, id_tema);
                                        let pergunta_service = new Perguntas_Service("http://localhost:3000/perguntas");
                                        pergunta_service.inserir(pergunta).then(resposta => {
                                            console.log(resposta);
                                        })
                                        if (cont_perguntas == 10) {
                                            $("#lista").hide("fast");
                                            let lista_teorica = new Lista_Teoria(nome_da_lista, lista_perguntas, lista_opcoes, opcoes_certas, id_login, id_sala);
                                            let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                            lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                console.log(resposta);
                                                $("#situacao_sala").show("fast");
                                                $("#situacao_sala").text("sala criada com sucesso aperte em voltar a tela inicial")
                                                $("#voltar_opcoes").show("fast");
                                                document.getElementById("voltar_opcoes").onclick = function(){
                                                    $("#voltar_opcoes").hide("fast");
                                                    $("#situacao_sala").hide("fast");
                                                    $("#area_sala_especifica").show("fast");
                                                    $("#look_participantes").show("fast");
                                                    $("#look_listas_teoricas").show("fast");
                                                    $("#criar_lista").show("fast");
                                                    $("#perguntas_server").empty();
                                                    $("#cont_perguntas").text("0");

                                                }   
                                            })
                                        }
                                    }



                                }

                                //let especificacao = " ";
                                //let especificacao2 = ",";
                                //let temp = opcoes_user.split(especificacao)


                            }else{
                                $("#situcao_nome_lista").text("nome da sala inválido ou digite o nome da sala")
                            }

                        }





                    }


                }
                

            }
            let sala_service = new Salas_Service(`http://localhost:3000/salas?id=${id_sala}&id_criador=${id_login}`);
            sala_service.lista().then(resposta => {
                let participantes_sala;
            
                for(let i = 0; i <= resposta.length -1; i++){
                    participantes_sala = resposta[i].participantes;
                } 
                document.getElementById("look_participantes").onclick = function () {
                    $("#area_de_olhar_participantes").show("fast");
                    $("#look_participantes").hide("fast");
                    $("#look_listas_teoricas").hide("fast");
                    $("#criar_lista").hide("fast");
                    $("#area_de_criacao_de_listas_teoricas").hide("fast");
                    $("#participantes").show("fast");
                    $("#hide_participantes").show();
                    for (let i = 0; i <= participantes_sala.length - 1; i++) {
                        let ul = document.getElementById("participantes");
                        let li = document.createElement("li");
                        li.innerHTML = participantes_sala[i];
                        ul.append(li);
                    }
                }
                document.getElementById("hide_participantes").onclick = function () {
                    $("#look_participantes").show("fast");
                    $("#look_listas_teoricas").show("fast");
                    $("#participantes").hide("fast");
                    $("#criar_lista").show("fast");
                    $("#hide_participantes").hide();
                    $("#participantes").empty();   
                }

            })
            document.getElementById("look_listas_teoricas").onclick = function () {
                $("#look_participantes").hide("fast");
                $("#criar_lista").hide("fast");
                $("#look_listas_teoricas").hide("fast");
                $("#area_de_listas_teoricas").show("fast");
                $("#listas_teoricas_especificas").show("fast");
                $("#conteudo_da_lista_teorica").hide("fast");
                $("#area_de_criacao_de_listas_teoricas").hide("fast");
                $("#voltar_tela_inicial").show("fast");
                let ul = document.getElementById("lugar_lista_teorica");
                let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`);
                lista_teorica_service.lista().then(resposta => {
                    for (let i = 0; i <= resposta.length - 1; i++) {
                        let li = document.createElement("li");
                        li.setAttribute("id", resposta[i].id);
                        let button_acessar_lista_teorica = document.createElement("button");
                        button_acessar_lista_teorica.innerHTML = resposta[i].nome;
                        button_acessar_lista_teorica.setAttribute("id", resposta[i].id);
                        let button_apagar_lista_teorica = document.createElement("button");
                        button_apagar_lista_teorica.innerHTML = "apagar lista " + resposta[i].nome;
                        button_apagar_lista_teorica.setAttribute("id", resposta[i].id);
                        li.append(button_acessar_lista_teorica);
                        li.append(button_apagar_lista_teorica);
                        ul.append(li);
                        button_apagar_lista_teorica.onclick = function () {
                            let id = event.target.id;
                            $("li,button").remove(`#${id}`)
                            let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                            lista_teorica_service.deletar(id).then(resposta => {
                                console.log(resposta)

                            })
                        }
                        button_acessar_lista_teorica.onclick = function () {
                            let lista_perguntas;
                            let lista_opcoes;
                            let perguntas = document.getElementById("pergunta");
                            let opcoes = document.querySelectorAll("#opcao");
                            let posicao_pergunta = 0;
                            let posicao_opcoes = 0;
                            let id = event.target.id;
                            $("#conteudo_da_lista_teorica").show("fast");
                            let nota_service = new Nota_Service(`http://localhost:3000/notas?id_lista_teorica=${id}`);
                            nota_service.listar().then(resposta =>{
                                let ul = document.getElementById("place_notas");
                                for(let i = 0; i <= resposta.length -1; i++){
                                    let li = document.createElement("li");
                                    let span_nome = document.createElement("span");
                                    let span_nota= document.createElement("span");
                                    span_nome.innerHTML = "Nome do aluno: " + resposta[i].nome_aluno + "</br>";
                                    span_nota.innerHTML = "Nota do aluno: " + resposta[i].nota;
                                    li.append(span_nome);
                                    li.append(span_nota);
                                    ul.append(li);
                                }
                            })
                            let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id=${id}`);
                            lista_teorica_service.lista().then(resposta => {
                                lista_perguntas = resposta[0].perguntas;
                                lista_opcoes = resposta[0].opcoes;
                                opcoes_certas = resposta[0].opcoes_certas;
                                perguntas.innerHTML = lista_perguntas[posicao_pergunta];
                                for (let i = 0; i <= opcoes.length - 1; i++) {
                                    opcoes[i].innerHTML = lista_opcoes[posicao_opcoes][i];

                                }
                                document.getElementById("proxima_pergunta").onclick = function () {
                                    posicao_pergunta++;
                                    if (posicao_pergunta < 10) {
                                        posicao_opcoes++;
                                        console.log(posicao_opcoes);
                                        perguntas.innerHTML = lista_perguntas[posicao_pergunta];
                                        for (let i = 0; i <= opcoes.length - 1; i++) {
                                            opcoes[i].innerHTML = lista_opcoes[posicao_opcoes][i];

                                        }
                                    }else{
                                        $("#situcao_posicao_lista_teorica").text("você chegou a última questão da sua lista teórica");
                                    }
                                }
                                
                            })
                        }
                    }
                })
                document.getElementById("voltar_tela_inicial").onclick = function () {
                    $("#look_participantes").show("fast");
                    $("#criar_lista").show("fast");
                    $("#look_listas_teoricas").show("fast");
                    $("#listas_teoricas_especificas").hide("fast");
                    $("#voltar_tela_inicial").hide("fast")
                    $("#conteudo_da_lista_teorica").hide("fast");
                    $("#lugar_lista_teorica").empty();
                    $("#place_notas").empty()
                }
            }
        }
        button_apagar_sala.onclick = function () {
            let id = event.target.id; //pega o id do botão clicado
            let sala_service = new Salas_Service("http://localhost:3000/salas");
            sala_service.apagar(id).then(resposta => {
                console.log(resposta);
                location.reload();
            })
        }
    }
})
let criar_sala = document.getElementById("criar_sala");
criar_sala.onclick = function () {
    $("#area_das_salas").hide("fast");
    let situacao_usuario = document.getElementById("situacao_usuario");
    let lista_participantes = [];
    $("area_das_salas").hide();
    $("#area_de_criar_salas").show("fast");
    let adicionar_aluno = document.getElementById("adicionar_aluno");
    adicionar_aluno.onclick = function () {
        let participante = document.getElementById("participante").value;
        document.getElementById("participante").value = " ";
        let aluno_service = new Aluno_Service(`http://localhost:3000/Alunos?nome=${participante}`);
        aluno_service.lista().then(resposta => {
            if (resposta.length == 0) {
                situacao_usuario.innerHTML = "Usuário Inválido "
            } else {
                situacao_usuario.innerHTML = "Usuário Válido";
                console.log(resposta[0].nome)
                lista_participantes.push(resposta[0].nome);
            }
        })
    }
    document.getElementById("criar_sala_especifica").onclick = function () {
        let nome_sala = document.getElementById("sala_nome").value;
        console.log(lista_participantes);
        if(nome_sala ==""){
            situacao_usuario.innerHTML = "campo do nome da sala inválido ou digite o nome da sala"
        }else{
            let sala = new Salas(nome_sala, id_login, lista_participantes);
            let sala_service = new Salas_Service("http://localhost:3000/salas");
            sala_service.inserir(sala).then(resposta => {
                console.log(resposta);
                location.reload(); //atualiza a página
            })

        }
        
    }
}
*/