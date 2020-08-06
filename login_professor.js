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
}
document.getElementById("enviar").onclick = function () {
    let nome2 = document.getElementById("nome2").value;
    let senha2 = document.getElementById("senha2").value;

    let loginservice = new ProfessorService(`http://localhost:3000/professores?nome=${nome2}&senha=${senha2}`);
    loginservice.listar().then(results =>{
        if(results.length === 0){
            swal('Senha ou login incorreto', 'tente novamente!', 'error')
        }else{
            const id = results[0].id;
            localStorage.setItem('id',id);
            window.location.assign("./professor_pagina.html")   
        }
    })
}