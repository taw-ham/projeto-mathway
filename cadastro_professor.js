class PROFESSOR {
    constructor(nome, senha, email) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}

class ProfessorService {
    constructor(url) {
        this.url = url
    }
    inserir(nome, senha, email) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha, email),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json()
        );
    }
}
let professor_service = new ProfessorService("http://localhost:3000/professores");

document.getElementById("cadastrar").onclick = function () {
    console.log("funciona")
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let email = document.getElementById("email").value;
    console.log(nome,senha,email);
    if (nome != "" || senha != "" || email != "") {
        let professor = new PROFESSOR(nome, senha, email);
        professor_service.inserir(professor).then(resposta => {
            console.log(resposta);
            window.location.assign("./index.html");
        })
    }
}