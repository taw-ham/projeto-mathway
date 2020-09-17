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
            $("#logx2").css('background', 'lightblue');
            $("#escolhaxa").css('background', 'lightblue');
        } else if (tipo_loginx === "ccx2") {
            $("#logx2").css('background', 'darkgray');
            $("#escolhaxa").css('background', 'darkgray');

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
        if(tipo_loginx == ""){
            swal('cadastro Inválido!','-ESCOLHA UM TIPO DE LOGIN','error');
        }
    }else{
        swal('Cadastro Inválido!', '- UM DOS CAMPOS VAZIOS -', 'error');
    }
} 

/*for(let i = 0; i <= tipo_userx2.length -1; i++){
    tipo_userx2[i].onclick = function () {
        tipo_loginx2 = event.target.id;
        if(tipo_loginx2 === "bbx2"){
            $("#logx2").css('background','lightblue');
            $("#escolhaxa").css('background','lightblue');

            $("#fazer_cadastro").click(function(){
                let usuario = $("#nome_cadastro").val();
                let email = $("#email_cadastro").val();
                let senha = $("#senha_cadastro").val();
                console.log(usuario,email,senha);
                let aluno = new Aluno(email,usuario,senha);
                let aluno_service2 = new Aluno_Service("http://localhost:3000/Alunos");
                if (nome != "" || senha != "" || email != ""){
                aluno_service2.inserir(aluno).then(resposta =>{
                    console.log(resposta);
                    window.location.assign("./logx.html");
                    })

                } else { $("#fazer_cadastro").click(function(){
                    swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
                })
                }
            })
        
        }
        else if(tipo_loginx2 === "ccx2"){
            $("#logx2").css('background','darkgray');
            $("#escolhaxa").css('background','darkgray');

            document.getElementById("fazer_cadastro").onclick = function (){
                let nome = document.getElementById("nome_cadastro").value;
                let senha = document.getElementById("senha_cadastro").value;
                let email = document.getElementById("email_cadastro").value;
                console.log(nome,senha,email);
                let professor_service = new ProfessorService("http://localhost:3000/professores");
                if (nome != "" || senha != "" || email != ""){
                    let professor = new PROFESSOR(nome, senha, email);
                    professor_service.inserir(professor).then(resposta =>{
                        console.log(resposta);
                        window.location.assign("./logx.html");
                    })

                } else { $("#fazer_cadastro").click(function(){
                    swal('Senha ou Login Incorretos!', '- tente novamente -', 'error');
                })
                }
            }

        } else { 
            document.getElementById("fazer_cadastro").onclick = function (){
            swal('Cadastro Inválido!', '- escolha um tipo de usuário -', 'error');
            
            } 
        }

    } 
}
*/