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
    professor_service.listar().then(results => {
        //let nome2 = document.getElementById("nome2").value;
        //let senha2 = document.getElementById("senha2").value;
        let txt = results;
        for (let i = 0; i <= txt.length - 1; i++) {
            if (txt[i].nome == nome2 && txt[i].senha == senha2) {
                console.log("logou");
                let id  = txt[i].id;
            }else{console.log("errou")}
        }
    })
}