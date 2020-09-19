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
    inserir(email, nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(email, nome, senha),
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

let tipo_loginx;

const tipo_userx = document.getElementsByTagName("button");
for (let i = 0; i <= tipo_userx.length - 1; i++) {
    tipo_userx[i].onclick = function () {
        console.log("sjjs")
        tipo_loginx = event.target.id;
        console.log(tipo_loginx);
        if (tipo_loginx === "bbx2") {
            $("#logx2").css('background', 'linear-gradient(lightblue,whitesmoke,whitesmoke)');
            $("#escolhaxa").css('background', 'lightblue');
            $("#obx02").hide("fast");
            $("#wallx2").css('padding-bottom', '3.2%');
        } else if (tipo_loginx === "ccx2") {
            $("#logx2").css('background', 'linear-gradient(lightgreen,whitesmoke,whitesmoke)');
            $("#escolhaxa").css('background', 'lightgreen');
            $("#obx02").hide("fast");
            $("#wallx2").css('padding-bottom', '3.2%');
        }
    }
}
document.getElementById("fazer_cadastro").onclick = function () {
    const nome = document.getElementById("nome_cadastro").value;
    const senha = document.getElementById("senha_cadastro").value;
    const email = document.getElementById("email_cadastro").value;
    if (nome != "" && senha != "" && email != "") {
        if (tipo_loginx === "bbx2") {
            const aluno = new Aluno(email, nome, senha);
            const aluno_service2 = new Aluno_Service("http://localhost:3000/Alunos");
            aluno_service2.inserir(aluno).then(resposta => {
                window.location.assign("./logx.html");
            })
        } else if (tipo_loginx === "ccx2") {
            const professor_service = new ProfessorService("http://localhost:3000/professores");
            const professor = new PROFESSOR(nome, senha, email);
            professor_service.inserir(professor).then(resposta => {
                window.location.assign("./logx.html");
            })
        }
        if (tipo_loginx == "") {
            swal('Cadastro Inválido!', '- escolha um tipo de usuário -', 'error');
        }
    } else {
        swal('Cadastro Inválido!', '- preencha todos os campos -', 'error');
    }
}