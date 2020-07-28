class PROFESSOR {
    constructor(nome, senha,email) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
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
class Salas{
    constructor(nome,participantes){
        this.nome = nome;
        this.participantes = participantes
    }   
}

class Salas_Service{
    constructor(url){
        this.url = url
    }
    lista(){
        return fetch(this.url,{
            method: "GET"
        }).then(resposta => resposta.json())
    }
    inserir(nome,participantes){
        return fetch(this.url,{
            method: "POST",
            body: JSON.stringify(nome,participantes),
            headers:{
                'Content-Type': 'application/json'
            } 
        }).then(resposta => resposta.json())
    }
}


let professor_service = new ProfessorService("http://localhost:3000/professores");
function inserirProfessor() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById("senha").value;
    let professor = new PROFESSOR(nome, senha);
    professor_service.inserir(professor).then(
        professor => inserirElementoProfessor(professor)
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
            const id = results[0].id;
            localStorage.setItem('id',id);
            window.location.assign("pagina_inicial.html")   
        }
    })
}