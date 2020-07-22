$("#lista_teorica").hide("fast");
$("#perguntas").hide("fast");
$("#sala").hide("fast");
$("#lista").hide("fast")
$("#temas").hide("fast");
$("#criar_salas").hide("fast");
$("#hide_participantes").hide("fast");
$("#enviar_lista_teorica").hide("fast")

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
    constructor(pergunta, id_criador) {
        this.pergunta = pergunta;
        this.id_criador = id_criador;
    }
}
class Perguntas_Service {
    constructor(url) {
        this.url = url
    }
    inserir(pergunta, id_criador) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(pergunta, id_criador),
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
class Lista_Teoria{
    constructor(nome,perguntas,opcoes,opcoes_certas,id_criador,id_sala){
        this.nome = nome,
        this.perguntas = perguntas,
        this.opcoes = opcoes,
        this.opcoes_certas = opcoes_certas,
        this.id_criador = id_criador,
        this.id_sala = id_sala
    }   
}
class Lista_Teoria_Service{
    constructor(url){
        this.url = url;
    }
    inserir(nome,perguntas,opcoes,opcoes_certas,id_criador,id_sala){
        return fetch(this.url,{
            method: "POST",
            body: JSON.stringify(nome,perguntas,opcoes,opcoes_certas,id_criador,id_sala),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}

let participantes_lista = [];

var id_login = localStorage.getItem('id');
let sala = new Salas_Service(`http://localhost:3000/salas?id_criador=${id_login}`);
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
            let sala_service = new Salas_Service(`http://localhost:3000/salas?nome=${button}`);
            sala_service.lista().then(resposta => {
                let participantes_sala = resposta[0].participantes;
                let id_sala = resposta[0].id;
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
                document.getElementById("hide_participantes").onclick = function(){
                    $("#look_participantes").show("fast");
                    $("#participantes").hide("fast");
                    $("#criar_lista").show("fast");
                    $("#hide_participantes").hide();


                }
                document.getElementById("criar_lista").onclick = function () {
                    $("#temas").show("fast");
                    document.getElementById("matriz").onclick = function () {
                        $("#lista").show("fast");
                        let cont = 0;
                        let contador_perguntas = document.getElementById("cont_perguntas");
                        let perguntas_service = new Perguntas_Service("http://localhost:3000/perguntas?tema=matriz");
                        perguntas_service.listar().then(resposta => {
                            console.log(resposta)
                            let lista_perguntas = [];
                            let opcao_pergunta = []
                            let opcao_correta = []
                            for (let i = 0; i <= resposta.length - 1; i++) {
                                let li = document.createElement("li");
                                console.log(resposta[i].opcoes[i])
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
                                    console.log(cont);
                                }
                                document.getElementById("adici_perg").onclick = function () {
                                    let pergunta = document.getElementById("pergunta").value;
                                    let opcoes = document.getElementById("opcoes").value;
                                    let opcao_correta2 = document.getElementById("opcao_correta").value;
                                    let opcao_temp = [];
                                    opcao_temp.push(opcoes);
                                    opcao_pergunta.push(opcao_temp);
                                    lista_perguntas.push(pergunta);
                                    opcao_correta.push(opcao_correta2);
                                    console.log(opcao_pergunta);
                                    cont++
                                    contador_perguntas.innerHTML = cont;
                                    console.log(cont)
                                }
                                if(cont == 10){
                                    $("#adici_perg").hide("fast");
                                    $("#perguntas_server").hide("fast");
                                    $("#enviar_lista_teorica").show("fast");
                                    document.getElementById("enviar_lista_teorica").onclick = function(){
                                        let lista_teorica = new Lista_Teoria(n)

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









/*

document.getElementById("enviar2").onclick = function () {
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





/*$("#login").hide();
            $("#criar_salas").show();
            
            var id = results[0].id;
            document.getElementById("enviar2").onclick = function(){
                let pergunta = document.getElementById("perguntas").value;
                let perguntas = new Pergunta(pergunta,id);
                let perguntas_service = new Perguntas_Service("http://localhost:3000/perguntas");
                perguntas_service.inserir(perguntas).then(results =>{
                    console.log(results);
                })
            }
            document.getElementById("salas").onclick = function(){
                let perguntas_service = new Perguntas_Service(`http://localhost:3000/perguntas?id_criador=${id}`);
                perguntas_service.listar().then(results =>{
                    console.log(results);
                })
            }
        }
        
    })
}
*/