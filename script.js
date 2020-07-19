class PROFESSOR {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
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
class Pergunta{
    constructor(pergunta,id_criador){
        this.pergunta = pergunta;
        this.id_criador = id_criador;
    }
}
class Perguntas_Service{
    constructor(url){
        this.url = url
    }
    inserir(pergunta,id_criador){
        return fetch(this.url,{
            method: "POST",
            body: JSON.stringify(pergunta,id_criador),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(results => results.json())
    }
    listar(){
        return fetch(this.url,{
            method: "GET",
        }).then(resposta => resposta.json())
    }
}
let professor_service = new ProfessorService("http://localhost:3000/professores");
professor_service.listar().then(professores => {
    for (let professor of professores) {
        inserirElementoProfessor(professor);
    }
});

function inserirElementoProfessor(professor) {
    let elementoProfessor = document.createElement('p');
    elementoProfessor.textContent = `Nome: ${professor.nome}`;
    let botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'X';
    botaoApagar.setAttribute('id', professor.id);
    botaoApagar.onclick = apagarProfessor;
    elementoProfessor.appendChild(botaoApagar);
    document.body.appendChild(elementoProfessor);
}

function inserirProfessor() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById("senha").value;
    let professor = new PROFESSOR(nome, senha);
    professor_service.inserir(professor).then(
        professor => inserirElementoProfessor(professor)
    );
}

function apagarProfessor() {
    let id = event.target.id;
    professor_service.remove(id).then(
        event.target.parentNode.remove()
    );
}

document.getElementById("enviar").onclick = function () {
    let nome2 = document.getElementById("nome2").value;
    let senha2 = document.getElementById("senha2").value;
    let loginservice = new ProfessorService(`http://localhost:3000/professores?nome=${nome2}&senha=${senha2}`);
    loginservice.listar().then(results =>{
        if(results.length === 0){
            console.log("usuário ou login incorreto");
        }else{
            let id = results[0].id;
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
