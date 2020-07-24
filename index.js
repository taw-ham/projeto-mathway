$("#area_de_criar_salas").hide("fast");
$("#area_sala_especifica").hide("fast");
$("#area_de_criar_salas").hide("fast");
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
    constructor(pergunta, opcoes, opcao_certa, id_criador, tema) {
        this.pergunta = pergunta;
        this.opcoes = opcoes,
            this.opcao_certa = opcao_certa,
            this.id_criador = id_criador;
        this.tema = tema
    }
}
class Perguntas_Service {
    constructor(url) {
        this.url = url
    }
    inserir(pergunta, opcoes, opcao_certa, id_criador, tema) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(pergunta, opcoes, opcao_certa, id_criador, tema),
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
    constructor(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala) {
        this.nome = nome,
            this.perguntas = perguntas,
            this.opcoes = opcoes,
            this.opcoes_certas = opcoes_certas,
            this.id_criador = id_criador,
            this.id_sala = id_sala
    }
}
class Lista_Teoria_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, perguntas, opcoes, opcoes_certas, id_criador, id_sala),
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


var id_login = localStorage.getItem('id');
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
            let sala_service = new Salas_Service(`http://localhost:3000/salas?id=${id_sala}&id_criador=${id_login}`);
            sala_service.lista().then(resposta => {
                let participantes_sala = resposta[0].participantes;
                document.getElementById("look_participantes").onclick = function () {
                    $("#area_de_olhar_participantes").show("fast");
                    $("#look_participantes").hide("fast");
                    $("#criar_lista").hide("fast");
                    for (let i = 0; i <= participantes_sala.length - 1; i++) {
                        let ul = document.getElementById("participantes");
                        let li = document.createElement("li");
                        li.innerHTML = participantes_sala[i];
                        ul.append(li);
                    }
                }
                document.getElementById("hide_participantes").onclick = function () {
                    $("#area_de_olhar_participantes").hide("fast");
                    $("#look_participantes").show("fast");
                    $("#criar_lista").show("fast");
                    $("#participantes").empty() //apaga os filhos do elemento participantes eles morrem
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
                            let opcoes_certas;
                            let perguntas = document.getElementById("pergunta");
                            let opcoes = document.querySelectorAll("#opcao");
                            let posicao_pergunta = 0;
                            let posicao_opcoes = 0;
                            let posicao_opcoes_certas = 0
                            let id = event.target.id;
                            $("#conteudo_da_lista_teorica").show("fast");
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

                                    }
                                }
                                document.getElementById("tela_inicial").onclick = function(){
                                    $("#conteudo_da_lista_teorica").hide();
                                    $("#area_de_listas_teoricas").show();
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
                    $("#lugar_lista_teorica").empty();
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
        console.log(lista_participantes)
        let sala = new Salas(nome_sala, id_login, lista_participantes);
        let sala_service = new Salas_Service("http://localhost:3000/salas");
        sala_service.inserir(sala).then(resposta => {
            console.log(resposta);
            location.reload(); //atualiza a página
        })
    }
}
/*
let participantes_lista = [];

sala.lista().then(resposta => {
    console.log(resposta);
    let ul = document.getElementById("salas");
    for (let i = 0; i <= resposta.length - 1; i++) {
        document.getElementById("criar_salas2").onclick = function () {
            $("#salas").hide();
            $("#criar_salas").show("fast");
            document.getElementById("adicionar_alunos").onclick = function () {
                let participantes = document.getElementById("partici").value;
                let aluno_service = new Aluno_Service(`http://localhost:3000/alunos?nome=${participantes}`);
                aluno_service.lista().then(resposta => {
                    if (resposta.length == 0) {
                        console.log("usuario invalido")
                    } else {
                        participantes_lista.push(participantes);
                        document.getElementById("criar_sala").onclick = function () {
                            let sala_nome = document.getElementById("sala_nome").value;
                            let sala = new Salas(sala_nome, id_login, participantes_lista);
                            let sala_service = new Salas_Service("http://localhost:3000/salas");
                            sala_service.inserir(sala).then(resposta => {
                                console.log(resposta);
                                location.reload();
                            })
                        }
                    }
                })
            }
        }
        let li2 = document.createElement("li");
        let button2 = document.createElement("button");
        button2.innerHTML = "apagar" + resposta[i].nome;
        button2.setAttribute('id', resposta[i].id);
        li2.append(button2);
        ul.append(li2);
        button2.onclick = function () {
            let id = event.target.id;
            let sala = new Salas_Service("http://localhost:3000/salas");
            sala.apagar(id).then(resposta => {
                console.log(resposta);
                location.reload();
            })
        }
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerHTML = resposta[i].nome;
        button.setAttribute('id', resposta[i].nome);
        li.append(button);
        ul.append(li);
        button.onclick = function () {
            button = button.textContent;
            $("#sala").show("fast");
            $("#salas").hide();
            $("#criar_salas").hide();
            $("#listas_teoricas").show("fast");
            let sala_service = new Salas_Service(`http://localhost:3000/salas?nome=${button}&id_criador=${id_login}`);
            sala_service.lista().then(resposta => {
                let participantes_sala = resposta[0].participantes;
                var id_sala = resposta[0].id;
                let lista_teorica_service = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`)
                lista_teorica_service.lista().then(resposta => {
                    console.log(resposta);
                    let li = document.createElement("li");
                    let button = document.createElement("button");
                    let ul = document.getElementById("lugar_lista_teorica");
                    button.innerHTML = resposta[i].nome;
                    button.setAttribute("id", resposta[i].id);
                    li.append(button);
                    ul.append(li);
                    button.onclick = function () {
                        let posicao_pergunta = 0;
                        let posicao_opcoes = 0;
                        let lista_pergunta = [];
                        let lista_opcoes = [];
                        let opcoes_html = document.querySelectorAll("#opcao");
                        let pergunta_html = document.getElementById("pergunta");
                        button = button.textContent;
                        let lista_teorica_service2 = new Lista_Teoria_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}&id_criador=${id_login}`)
                        lista_teorica_service2.lista().then(resposta => {
                            lista_opcoes.push(resposta[0].opcoes);
                            lista_pergunta.push(resposta[0].perguntas)
                            pergunta_html.innerHTML = lista_pergunta[posicao_pergunta];
                            for (let i = 0; i <= 4; i++) {
                                opcoes_html.innerHTML = lista_opcoes[posicao_opcoes][i]
                            }

                        })
                        if (posicao_pergunta > 10) {
                            document.getElementById("proxima_pergunta").onclick = function () {
                                posicao_pergunta++;
                                posicao_opcoes++;
                                pergunta_html.innerHTML = lista_pergunta[posicao_pergunta];
                                for (let i = 0; i <= 4; i++) {
                                    opcoes_html.innerHTML = lista_opcoes[posicao_opcoes][i]
                                }
                            }

                        }else{


                        }

                    }
                })


                document.getElementById("look_participantes").onclick = function () {
                    $("#look_participantes").hide()
                    $("#participantes").show("fast");
                    $("#hide_participantes").show("fast")
                    $("#criar_lista").hide("fast");
                    for (let i = 0; i <= participantes_sala.length - 1; i++) {
                        let li = document.createElement("li");
                        let ul = document.getElementById("participantes");
                        li.innerHTML = participantes_sala[i];
                        ul.append(li);
                    }
                }
                document.getElementById("hide_participantes").onclick = function () {
                    $("#look_participantes").show("fast");
                    $("#participantes").hide("fast");
                    $("#criar_lista").show("fast");
                    $("#hide_participantes").hide();
                    $("#participantes").empty();
                }
                document.getElementById("criar_lista").onclick = function () {
                    $("#temas").show("fast");
                    document.getElementById("matriz").onclick = function () {
                        $("#lista").show("fast");
                        var cont = 0;
                        let contador_perguntas = document.getElementById("cont_perguntas");
                        let perguntas_service = new Perguntas_Service("http://localhost:3000/perguntas?tema=matriz");
                        perguntas_service.listar().then(resposta => {
                            console.log(resposta)
                            let lista_perguntas = [];
                            let opcao_pergunta = []
                            let opcao_correta = []
                            for (let i = 0; i <= resposta.length - 1; i++) {
                                let li = document.createElement("li");
                                let button = document.createElement("button");
                                button.innerHTML = resposta[i].pergunta
                                li.append(button);
                                let ul = document.getElementById("perguntas_server");
                                ul.append(li);
                                button.onclick = function () {
                                    button = button.textContent;
                                    lista_perguntas.push(button);
                                    opcao_pergunta.push(resposta[i].opcoes)
                                    opcao_correta.push(resposta[i].opcao_certa)
                                    console.log(opcao_pergunta);
                                    cont++
                                    contador_perguntas.innerHTML = cont;
                                    if (cont == 10) {
                                        console.log(cont)
                                        $("#adici_perg").hide("fast");
                                        $("#perguntas_server").hide("fast");
                                        $("#enviar_lista_teorica").show("fast");
                                        document.getElementById("enviar_lista_teorica").onclick = function () {
                                            let nome_lista_teorica = document.getElementById("nome_lista_teorica").value
                                            let lista_teorica = new Lista_Teoria(nome_lista_teorica, lista_perguntas, opcao_pergunta, opcao_correta, id_login, id_sala);
                                            let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                            lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                console.log(resposta);
                                            })

                                        }
                                    }

                                }
                                document.getElementById("adici_perg").onclick = function () {
                                    let pergunta = document.getElementById("pergunta").value;
                                    let opcoes = document.getElementById("opcoes").value;
                                    let opcao_correta2 = document.getElementById("opcao_correta").value;
                                    lista_perguntas.push(pergunta);
                                    opcao_correta.push(opcao_correta2);
                                    let especificacao = " ";
                                    let especificacao2 = ",";
                                    let temp = opcoes.split(especificacao);
                                    let temp2 = opcoes.split(especificacao2);
                                    let opcoes2;
                                    console.log(lista_perguntas)
                                    document.getElementById("pergunta").value = " ";
                                    document.getElementById("opcoes").value = " ";
                                    document.getElementById("opcao_correta").value = " ";
                                    console.log(pergunta)
                                    if (temp.length == 5) {
                                        opcao_pergunta.push(temp);
                                        opcoes2 = temp;

                                    } else if (temp2.length == 5) {
                                        opcao_pergunta.push(temp2);
                                        console.log(opcao_pergunta)
                                        opcoes2 = temp2

                                    } else {
                                        console.log("valores inválidos")
                                    }
                                    let pergunta2 = new Pergunta(pergunta, opcoes2, opcao_correta2, id_login, "matriz")
                                    let pergunta_service = new Perguntas_Service("http://localhost:3000/perguntas");
                                    pergunta_service.inserir(pergunta2).then(resposta => {
                                        console.log(resposta);
                                    })
                                    cont++
                                    contador_perguntas.innerHTML = cont;
                                    console.log(cont)
                                    if (cont == 10) {
                                        console.log(cont)
                                        $("#adici_perg").hide("fast");
                                        $("#perguntas_server").hide("fast");
                                        $("#enviar_lista_teorica").show("fast");
                                        $("#criar_salas").hide("fast");
                                        document.getElementById("enviar_lista_teorica").onclick = function () {
                                            let nome_lista_teorica = document.getElementById("nome_lista_teorica").value
                                            let lista_teorica = new Lista_Teoria(nome_lista_teorica, lista_perguntas, opcao_pergunta, opcao_correta, id_login, id_sala);
                                            let lista_teorica_service = new Lista_Teoria_Service("http://localhost:3000/lista_teoricas");
                                            lista_teorica_service.inserir(lista_teorica).then(resposta => {
                                                console.log(resposta);
                                                location.reload();
                                            })
                                        }
                                    }
                                }
                            }
                        })
                    }

                }
            })
        }
    }

})
*/












/*document.getElementById("enviar2").onclick = function () {
    let participantes = document.getElementById("partici").value;
    let aluno_service = new Aluno_Service(`http://localhost:3000/alunos?nome=${participantes}`);
    aluno_service.lista().then(resposta => {
        if (resposta.length == 0) {
            console.log("usuario invalido")
        } else {
            participantes_lista.push(participantes);
            document.getElementById("enviar1").onclick = function(){
                let sala_nome = document.getElementById("sala_nome").value;
                let sala = new Salas(sala_nome,id_login,participantes_lista);
                let sala_service = new Salas_Service("http://localhost:3000/salas");
                sala_service.inserir(sala).then(resposta =>{
                
                })
            }             
        }
    })
}
*/