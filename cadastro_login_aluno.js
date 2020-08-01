class Aluno{
    constructor(email,nome,senha){
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}
class Aluno_Service{
    constructor(url){
        this.url = url;
    }
    inserir(email,nome,senha){
        return fetch(this.url,{
            method:"POST",
            body: JSON.stringify(email,nome,senha),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar(){
        return fetch(this.url,{
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
$("#fazer_cadastro").click(function(){
    let usuario = $("#nome_cadastro").val();
    let email = $("#email_cadastro").val();
    let senha = $("#senha_cadastro").val();
    console.log(usuario,email,senha);
    let aluno = new Aluno(email,usuario,senha);
    let aluno_service2 = new Aluno_Service("http://localhost:3000/Alunos");
    aluno_service2.inserir(aluno).then(resposta =>{
        console.log(resposta);
    })
})
$("#fazer_login").click(function(){
    let usuario = $("#nome_login").val();
    console.log(usuario)
    let senha = $("#senha_login").val();
    console.log(senha);
    let aluno_service = new Aluno_Service(`http://localhost:3000/Alunos?nome=${usuario}&senha=${senha}`);
    aluno_service.listar().then(resposta =>{
        if(resposta.length == 0){
            $("#situacao_usuario").text("usuario ou senha incorreto ou usuário não existe");
        }else{
            console.log(resposta)
            let id_login = resposta[0].id;
            let nome_login = resposta[0].nome
            localStorage.setItem('id',id_login);
            localStorage.setItem('nome',nome_login);
            console.log(localStorage);
            window.location.assign("./pagina_aluno_teste.html");
        }
    })

})