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
    constructor(nome, id_criador, codigo, participantes, participantes_id) {
        this.nome = nome;
        this.id_criador = id_criador;
        this.codigo = codigo;
        this.participantes = participantes;
        this.participantes_id = participantes_id;

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
    inserir(nome, id_criador, codigo, participantes, participantes_id) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_criador, codigo, participantes, participantes_id),
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
class Nota {
    constructor(nota, situacao) {
        this.nota = nota;
        this.situacao = situacao;
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
    atualizar(nota, situacao) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(nota, situacao),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
class NOTA {
    constructor(situacao) {
        this.situacao = situacao
    }
}
class NOTA_SERVICE {
    constructor(url) {
        this.url = url
    }
    atualizar(situacao) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(situacao),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
var id_login = localStorage.getItem('id');

function pergunta() {
    let pergunta_professor = document.getElementById("pergunta_professor").value;
    let pergunta_digitada = document.getElementById("pergunta_digitada").innerHTML = pergunta_professor;

}

function opcoes() {
    let opcoes_professor = document.getElementById("opcoes_professor").value;
    let opcoes = document.getElementById("opcoes").innerHTML = opcoes_professor;
}

function opcoes_correta() {
    let opcao_correta = document.getElementById("opcao_correta").value;
    let opcoes = document.getElementById("opcao_certa").innerHTML = opcao_correta;
}
$("#look_participantes").hide("fast");
$("#area_de_criar_sala").hide("fast");
$("#area_acessar_sala").hide("fast");
$("#opcoes_da_sala").hide("fast");
$("#area_criar_lista_teorica").hide("fast");
$("#area_opcoes_temas").hide("fast");
$("#look_lista_teorica").hide("fast");
$("#lugar_ver_nota").hide("fast");
$("#nota_modificar").hide("fast");
$("#area_de_ver_codigo").hide("fast");
document.getElementById("salas_criadas").onclick = function () {
    $("#area_acessar_sala").show("fast");
    $("#menu_escolhas").hide("fast");
    let sala_service = new Salas_Service(`http://localhost:3000/salas?id_criador=${id_login}`);
    sala_service.lista().then(resposta => {
        let ul = document.getElementById("opcoes_salas");
        for (let i = 0; i <= resposta.length - 1; i++) {
            let button_acessar_sala = document.createElement("button");
            let li = document.createElement("li");
            li.setAttribute('id', resposta[i].id)
            button_acessar_sala.innerHTML = resposta[i].nome;
            button_acessar_sala.setAttribute("id", resposta[i].id);
            li.append(button_acessar_sala);
            let button_apagar_sala = document.createElement("button");
            button_apagar_sala.innerHTML = "apagar sala" + " " + resposta[i].nome;
            button_apagar_sala.setAttribute("id", resposta[i].id) // atribuindo o identificador que tem no banco de dados ao id do elemento button
            li.append(button_apagar_sala);
            ul.append(li);
            button_apagar_sala.onclick = function () {
                var id = event.target.id;
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.apagar(id).then(resposta => {
                    console.log(resposta);
                    $("#opcoes_salas > li").remove(`#${id}`);
                })
            }
            button_acessar_sala.onclick = function () {
                var codigo_sala = resposta[i].codigo;
                var id_sala = event.target.id;
                $("#area_acessar_sala").hide("fast");
                $("#opcoes_da_sala").show("fast");
                document.getElementById("voltar_escolha_de_sala").onclick = function () {
                    $("#area_acessar_sala").show("fast");
                    $("#opcoes_da_sala").hide("fast");

                }
                document.getElementById("ver_codigo_sala").onclick = function(){
                    $("#opcoes_da_sala").hide("fast");
                    $("#area_de_ver_codigo").show("fast");
                    document.getElementById("look_codigo_sala").innerHTML = codigo_sala;
                    document.getElementById("voltar_area_de_ver_codigo").onclick = function(){
                        $("#opcoes_da_sala").show("fast");
                        $("#area_de_ver_codigo").hide("fast");
                        $("#look_codigo_sala").empty();


                    }

                }


                document.getElementById("modificar_nota").onclick = function () {
                    $("#nota_modificar").show("fast");
                    $("#opcoes_da_sala").hide("fast")
                    let table_notas = document.getElementById("modificar");
                    let th_title = document.createElement("th");
                    th_title.setAttribute('colspan', 6);
                    th_title.innerHTML = "tabela de alunos com entrega atrasado";
                    table_notas.append(th_title);
                    let lista_teorica = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}`);
                    lista_teorica.lista().then(resposta => {
                        for (let i = 0; i <= resposta.length - 1; i++) {
                            let nota = new Nota_Service(`http://localhost:3000/notas_professor?id_lista_teorica=${resposta[i].id}&situacao=atrasado`);
                            nota.listar().then(resposta => {
                                for (let i = 0; i <= resposta.length - 1; i++) {
                                    let tr = document.createElement("tr");
                                    tr.setAttribute('id', resposta[i].id)
                                    let td_nome = document.createElement("td");
                                    td_nome.innerHTML = resposta[i].nome_aluno;
                                    let td_lista_teorica = document.createElement("td");
                                    td_lista_teorica.innerHTML = resposta[i].nome_lista_teorica;
                                    let td_data_entrega = document.createElement("td");
                                    td_data_entrega.innerHTML = resposta[i].data_de_entrega;
                                    let td_nota = document.createElement("td");
                                    td_nota.innerHTML = resposta[i].nota
                                    let td_modificar = document.createElement("td");
                                    let input_modificar = document.createElement("input");
                                    input_modificar.setAttribute('placeholder', 'digite a nova nota');
                                    input_modificar.setAttribute('id', resposta[i].id);
                                    td_modificar.append(input_modificar);
                                    let td_opcoes = document.createElement("td");
                                    let button_modificar = document.createElement("button");
                                    let button_nao_modificar = document.createElement("button");
                                    button_modificar.setAttribute('id', resposta[i].id);
                                    button_modificar.innerHTML = "modificar nota"
                                    button_nao_modificar.setAttribute('id', resposta[i].id);
                                    button_nao_modificar.innerHTML = "não modificar"
                                    td_opcoes.append(button_modificar);
                                    td_opcoes.append(button_nao_modificar);
                                    tr.append(td_nome, td_lista_teorica, td_data_entrega, td_nota, td_modificar, td_opcoes);
                                    table_notas.append(tr);
                                    button_modificar.onclick = function () {
                                        let id = event.target.id;
                                        let nota_modificada = $(`input[id=${id}]`).val();
                                        if (nota_modificada != "") {
                                            let situacao = "atualizada"
                                            let nota_class = new Nota(nota_modificada, situacao);
                                            let nota_service = new Nota_Service(`http://localhost:3000/notas_professor/${id}`);
                                            nota_service.atualizar(nota_class).then(resposta => {
                                                console.log(resposta)
                                                $("tr").remove(`#${id}`);
                                                swal('NOTA ATUALIZADA', 'NICE', 'success');
                                            })
                                        } else {
                                            swal('DIGITE A NOTA ', 'NICE', 'error');

                                        }
                                    }
                                    button_nao_modificar.onclick = function () {
                                        let id = event.target.id
                                        let situacao = "atualizada"
                                        $("tr").remove(`#${id}`);
                                        let nota = new NOTA(situacao);
                                        let nota_service = new NOTA_SERVICE(`http://localhost:3000/notas_professor/${id}`)
                                        nota_service.atualizar(nota).then(resposta => {
                                            console.log(resposta);
                                            swal('NÃO MODIFICADA', 'SUCCESSS', 'success');

                                        })
                                    }
                                }
                            })
                        }
                    })
                    document.getElementById("fim_comeco").onclick = function () {
                        $("#modificar").empty();
                        $("#nota_modificar").hide("fast");
                        $("#opcoes_da_sala").show("fast");
                    }
                }
                document.getElementById("ver_nota").onclick = function () {
                    $("#opcoes_da_sala").hide("fast");
                    $("#lugar_ver_nota").show("fast");
                    $("#selecionar_lista_nota").show("fast")
                    $("#ver_nota_aluno").hide("fast");
                    let ul = document.getElementById("lista_teorica_nota");
                    let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`);
                    lista_teorica_service.lista().then(resposta => {
                        console.log(resposta)
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
                                let nota_service = new Nota_Service(`http://localhost:3000/notas_professor?id_lista_teorica=${id_lista_teorica}`);
                                nota_service.listar().then(resposta => {
                                    console.log(resposta)
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
                                $("#listas_teoricas > li").remove(`#${id}`)
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
                                    let termino_lista = lista_perguntas.length;
                                    let posicao_pergunta_certa = [];
                                    let posicao_pergunta_errada = [];
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
                                    lugar_perguntas.innerHTML = `${t_number}/${termino_lista} ${lista_perguntas[posicao_pergunta]}`;
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
                                                posicao_pergunta_certa.push(posicao_pergunta + 1);
                                                swal('Acertou!', 'parabéns', 'success');
                                                nota += 10
                                            } else {
                                                lista_perguntas_erradas_usuario.push(lista_perguntas[posicao_pergunta])
                                                posicao_pergunta_errada.push(posicao_pergunta + 1);
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
                                            lugar_perguntas.innerHTML = `${t_number}/${termino_lista})  ${lista_perguntas[posicao_pergunta]}`;
                                            for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                lugar_opcoes_resposta[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                                input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                            }
                                            if (posicao_pergunta == termino_lista) {
                                                console.log("termino da lista teórica");
                                                $("#proximo_passo3").hide("fast");
                                                $("#termino_exercicio").show("fast");
                                                $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                posicao_pergunta = 0;
                                                posicao_opcoes = 0;
                                                posicao_opcoes_certas = 0;
                                                t_number = 1;
                                                lugar_perguntas.innerHTML = `${t_number}/${termino_lista}`;
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
                                                    li.innerHTML = `${posicao_pergunta_certa[i]}) ${lista_perguntas_certas_user[i]}`;
                                                    li.append(button);
                                                    ul_resposta_certa.append(li);
                                                }
                                                for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                                    let li = document.createElement("li");
                                                    let button = document.createElement("button");
                                                    button.innerHTML = "X";
                                                    button.setAttribute('id', 'perguntas_erradas');
                                                    li.innerHTML = `${posicao_pergunta_errada[i]}) ${lista_perguntas_erradas_usuario[i]}`;
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
                    document.getElementById("salvar_temas").onclick = function () {
                        let temas_lista = [];
                        let temas = $("input[name='opcoes_temas']");
                        let temas_verificar = $("input[name='opcoes_temas']:checked").val();
                        let nome_temas = [];
                        if (typeof temas_verificar == "undefined") {
                            swal('escolha uma opção', 'tente novamente', 'error');
                        } else {
                            for (let i = 0; i <= temas.length - 1; i++) {
                                if (temas[i].checked) {
                                    nome_temas.push(temas[i].id)
                                    console.log(nome_temas);
                                    temas_lista.push(temas[i].value);
                                    console.log(temas_lista);
                                }
                            }

                            $("#area_opcoes_temas").hide("fast");
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
                                    let ul = document.getElementById("perguntas_servidor");
                                    for (let i = 0; i <= temas_lista.length - 1; i++) {
                                        let h3 = document.createElement("h3");
                                        h3.innerHTML = nome_temas[i].toUpperCase();
                                        console.log(nome_temas[i]);
                                        let li_nome = document.createElement("li");
                                        li_nome.append(h3);
                                        let pergunta_service = new Perguntas_Service(`http://localhost:3000/perguntas?id_tema=${temas_lista[i]}`);
                                        pergunta_service.listar().then(resposta => {
                                            ul.append(li_nome);

                                            for (let i = 0; i <= resposta.length - 1; i++) {
                                                let li = document.createElement("li");
                                                let button = document.createElement("button");
                                                button.innerHTML = resposta[i].pergunta;
                                                button.setAttribute("id", resposta[i].id)
                                                li.append(button);
                                                ul.append(li);
                                                button.onclick = function () {
                                                    lista_perguntas.push(resposta[i].pergunta);
                                                    console.log(lista_perguntas);
                                                    lista_opcoes.push(resposta[i].opcoes);
                                                    console.log(lista_opcoes)
                                                    opcoes_certas.push(resposta[i].opcao_certa);
                                                    console.log(opcoes_certas);
                                                    cont_perguntas++;
                                                    contador_perguntas.innerHTML = cont_perguntas + " perguntas adicionadas com sucessos";

                                                }
                                            }
                                        })
                                    }
                                    var opcoes_check = [];
                                    let click = 0;
                                    let opcoes = [];

                                    document.getElementById("salvar_opcao").onclick = function () {
                                        let opcoes_user = document.getElementById("opcoes_professor").value;
                                        if (opcoes_user != "") {
                                            opcoes.push(opcoes_user);
                                            document.getElementById("opcoes_professor").value = "";
                                            click++;
                                            if (click == 5) {
                                                for (let i = 0; i <= opcoes.length - 1; i++) {
                                                    opcoes_check.push(opcoes[i]);
                                                    console.log(opcoes_check)

                                                }
                                                for (let i = 0; i <= opcoes_check.length - 1; i++) {
                                                    opcoes.shift();


                                                }
                                                console.log(opcoes)
                                                click = 0;
                                            }

                                        } else {
                                            swal("DIGITE UMA ALTERNATIVA", 'TENTE NOVAMENTE', 'error')
                                        }

                                    }
                                    let id_tema;
                                    let nome_tema;
                                    let click_salvar_tema = 0
                                    let div = document.getElementById("area_temas_escolher");
                                    for (let i = 0; i <= temas_lista.length - 1; i++) {
                                        let button = document.createElement("button");
                                        console.log(nome_temas);
                                        button.innerHTML = nome_temas[i];
                                        button.setAttribute('id', temas_lista[i]);
                                        div.append(button);
                                        button.onclick = function () {
                                            click_salvar_tema++;
                                            id_tema = event.target.id;
                                            nome_tema = button.textContent;
                                            console.log(id_tema, nome_tema);
                                        }
                                    }

                                    document.getElementById("adicionar_pergunta").onclick = function () {

                                        let pergunta_user = document.getElementById("pergunta_professor");
                                        let opcoes_user = document.getElementById("opcoes_professor");
                                        let opcao_correta_user = document.getElementById("opcao_correta");
                                        console.log(opcoes_check);

                                        if (pergunta_user.value == "" || opcao_correta_user.value == "" || opcoes_check.length > 5 || opcoes_check.length < 5) {
                                            swal('Uma das entradas está inválida', 'tente novamente', 'error');

                                        } else {
                                            
                                            if (click_salvar_tema > 0) {
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
                                                contador_perguntas.innerHTML = cont_perguntas + "perguntas adicionadas";
                                                let pergunta = new Pergunta(pergunta_user, opcoes_check, opcao_correta_user, id_login, nome_tema, id_tema);
                                                let pergunta_service = new Perguntas_Service("http://localhost:3000/perguntas");
                                                pergunta_service.inserir(pergunta).then(resposta => {
                                                    console.log(resposta);
                                                    opcoes_check = [];
                                                    console.log(opcoes_check);

                                                })
                                                document.getElementById("pergunta_professor").value = "";
                                                document.getElementById("opcoes_professor").value = "";
                                                document.getElementById("opcao_correta").value = "";
                                                click_salvar_tema = 0;

                                            } else {
                                                swal('escolha um tema para sua pergunta para adicionarmos no banco de dados', 'tente novamente', 'error');
                                            }

                                        }
                                    }
                                    document.getElementById("enviar_lista_teorica").onclick = function () {
                                        let lista_teorica = new Lista_Teoria(nome_da_lista_teorica, lista_perguntas, lista_opcoes, opcoes_certas, id_login, id_sala, data_entrega, tempo_de_fazer_lista);
                                        let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                        lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                            swal('LISTA CRIADA COM SUCESSO', 'vamos voltar a área de escolhas de opcões de sala', 'success');
                                            $("#perguntas_servidor").empty();
                                            $("#area_criar_lista_teorica").hide("fast");
                                            $("#opcoes_da_sala").show("fast");
                                            contador_perguntas.innerHTML = 0;
                                            $("#area_temas_escolher").empty();
                                            for (let i = 0; i <= temas.length - 1; i++) {
                                                temas[i].checked = false
                                            }
                                        })
                                    }
                                }
                            }
                        }
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
            let aleatorio = Math.random().toString(36).substr(2, 5);
            let sala_service = new Salas_Service("http://localhost:3000/salas");
            sala_service.lista().then(resposta => {
                for (let i = 0; i <= resposta.length - 1; i++) {
                    if (resposta[i].codigo == aleatorio) {
                        aleatorio = Math.random().toString(36).substr(2, 5);
                        $("#situacao_codigo").text("criando código")
                        console.log(aleatorio)
                    }
                }
                let participantes = [];
                let participantes_id = []
                let sala = new Salas(nome_sala, id_login, aleatorio, participantes, participantes_id);
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.inserir(sala).then(resposta => {
                    $("#situacao_codigo").text(`codigo criado:${aleatorio}`)
                    console.log(resposta)
                    document.getElementById("criar_sala_especifica").onclick = function () {
                        location.reload();
                    }
                })
            })
            /*
            let lista_participantes = [];
            let lista_participantes_id = [];
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
                        lista_participantes_id.push(resposta[0].id);
                    }
                })
            }
            document.getElementById("criar_sala_especifica").onclick = function () {
                
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.inserir(sala).then(resposta => {
                    console.log(resposta);
                    location.reload(); //atualiza a página
                })
            }
            */
        }
    }
}