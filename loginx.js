class Aluno {
    constructor(email, nome, senha) {
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}
class Aluno_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha),
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
        }).then(resposta => resposta.json())
    }
}

let tipo_loginx;
let tipo_userx = document.getElementsByTagName("button");
for (let i = 0; i <= tipo_userx.length - 1; i++) {
    tipo_userx[i].onclick = function () {
        tipo_loginx = event.target.id
        if (tipo_loginx == "bbx") {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightblue)');
            $("#obx").hide("fast");
            $("#tipologinx").css('background', 'lightblue');
            $("#wallx").css('padding-bottom', '6.8%');

        } else {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightgreen');
            $("#obx").hide("fast");
            $("#tipologinx").css('background', 'lightgreen');
            $("#wallx").css('padding-bottom', '6.8%');
        }
    }
}
document.getElementById("fazer_login").onclick = function () {
    const usuario = $("#nome_login").val();
    const senha = $("#senha_login").val();
    if (tipo_loginx == "bbx") {
        const aluno_service = new Aluno_Service(`http://localhost:3000/Alunos?email=${usuario}&senha=${senha}`);
        aluno_service.listar().then(resposta => {
            if (resposta.length === 0) {
                swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
            } else {
                console.log(resposta);
                const id_login = resposta[0].id;
                const nome_login = resposta[0].nome;
                localStorage.setItem('id', id_login);
                localStorage.setItem('e-mail', usuario);
                localStorage.setItem('nome', nome_login);
                window.location.assign("./pagina_aluno.html");
            }
        })
    } else if (tipo_loginx === "ccx") {
        let loginservice = new ProfessorService(`http://localhost:3000/professores?email=${usuario}&senha=${senha}`);
        loginservice.listar().then(results => {
            if (results.length === 0) {
                swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
            } else {
                console.log(results);
                const id = results[0].id;
                localStorage.setItem('id', id);
                window.location.assign("./professor_pagina.html")
            }
        })
    }else{
        swal('Escolha um tipo de login','tente novamente','error');
    }
}
/*
for (let i = 0; i <= tipo_userx.length - 1; i++) {
    tipo_userx[i].onclick = function () {
        tipo_loginx = event.target.id;
        if (tipo_loginx === "bbx") {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightblue)');
            $("#obx").hide("fast");
            $("#tipologinx").css('background', 'lightblue');
            $("#wallx").css('padding-bottom', '6.8%');

            $("#fazer_login").click(function () {
                let usuario = $("#nome_login").val();

                let senha = $("#senha_login").val();


                let aluno_service = new Aluno_Service(`http://localhost:3000/Alunos?email=${usuario}&senha=${senha}`);
                aluno_service.listar().then(resposta => {
                    if (resposta.length === 0) {
                        swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
                    } else {
                        console.log(resposta);
                        let id_login = resposta[0].id;
                        let nome_login = resposta[0].nome;
                        localStorage.setItem('id', id_login);
                        localStorage.setItem('e-mail', usuario);
                        localStorage.setItem('nome', nome_login);
                        window.location.assign("./pagina_aluno.html");
                    }
                })
            })

        } else if (tipo_loginx === "ccx") {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightgreen');
            $("#obx").hide("fast");
            $("#tipologinx").css('background', 'lightgreen');
            $("#wallx").css('padding-bottom', '6.8%');

            document.getElementById("fazer_login").onclick = function () {
                let email = document.getElementById("nome_login").value;
                console.log(email);
                let senha2 = document.getElementById("senha_login").value;
                console.log(senha2);

                let loginservice = new ProfessorService(`http://localhost:3000/professores?email=${email}&senha=${senha2}`);
                loginservice.listar().then(results => {
                    if (results.length === 0) {
                        swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
                    } else {
                        console.log(results);
                        const id = results[0].id;
                        localStorage.setItem('id', id);
                        window.location.assign("./professor_pagina.html")
                    }
                })
            }

        }
    }
}
*/