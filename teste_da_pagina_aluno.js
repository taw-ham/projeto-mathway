class Sala_Service {
    constructor(url) {
        this.url = url
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Nota {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas,perguntas_nao_feitas, situacao, data_de_entrega) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
        this.perguntas_nao_feitas = perguntas_nao_feitas;
        this.situacao = situacao;
        this.data_de_entrega = data_de_entrega;
    }
}
class Nota_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas,perguntas_nao_feitas, situacao, data_de_entrega) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas,perguntas_nao_feitas,situacao, data_de_entrega),
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
class NOTA_SERVIDOR {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica_servidor;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}
class NOTA_SERVIDOR_SERVICE {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas),
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
class NOTA_ALUNO {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica_aluno;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}
class NOTA_ALUNO_SERVICE {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas),
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
class Comentario {
    constructor(nome_aluno, comentario, id_aluno) {
        this.nome_aluno = nome_aluno;
        this.comentario = comentario;
        this.id_aluno = id_aluno
    }
}
class Comentario_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, comentario, id_aluno) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, comentario, id_aluno),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Pergunta_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Lista_Teorica_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Lista_Teorica_Aluno {
    constructor(nome, id_criador, id_tema, perguntas, opcoes, opcoes_certas) {
        this.nome = nome;
        this.id_criador = id_criador;
        this.id_tema = id_tema;
        this.perguntas = perguntas;
        this.opcoes = opcoes;
        this.opcoes_certas = opcoes_certas;
    }
}
class Lista_Teorica_Aluno_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
    inserir(nome, id_criador, id_tema, perguntas, opcoes, opcoes_certas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_criador, id_tema, perguntas, opcoes, opcoes_certas),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
class Lista_Teorica_Servidor {
    constructor(nome, id_tema, id_aluno, perguntas, opcoes, opcoes_certas) {
        this.nome = nome;
        this.id_tema = id_tema;
        this.id_aluno = id_aluno;
        this.perguntas = perguntas;
        this.opcoes = opcoes;
        this.opcoes_certas = opcoes_certas;

    }
}
class Lista_Teorica_Servidor_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, id_tema, id_aluno, perguntas, opcoes, opcoes_certas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_tema, id_aluno, perguntas, opcoes, opcoes_certas),
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

var id_login = localStorage.getItem('id');
var nome_login = localStorage.getItem('nome');
$("#fazer_perguntas_erradas").hide()
$("#escolha_de_sala").hide();
$("#area_escolha_lista_teorica").hide();
$("#fazer_exercicio_lista_teorica").hide();
$("#termino_exercicio").hide();
$("#escolha_modo_exercicio").hide();
$("#tema_lista_teorica").hide();
$("#criacao_lista_teorica").hide();
$("#lugar_de_notas").hide();
$("#comentario").show("fast");
let ul = document.getElementById("lugar_comentario");
let comentario_service = new Comentario_Service("http://localhost:3000/comentario");
comentario_service.listar().then(resposta => {
    for (let i = 0; i <= resposta.length - 1; i++) {
        let li = document.createElement("li");
        let span_nome = document.createElement("span");
        let span_comentario = document.createElement("span");
        let br = document.createElement("br")
        span_nome.innerHTML = resposta[i].nome_aluno;
        span_comentario.innerHTML = resposta[i].comentario;
        li.append(span_nome);
        li.append(br);
        li.append(span_comentario);
        ul.append(li);
    }
})
document.getElementById("enviar_comentario").onclick = function () {
    let ul = document.getElementById("lugar_comentario");
    $("#lugar_comentario").empty();
    let comentario = $("#comentario_user").val();
    if (comentario == "") {
        swal('digite seu comentario', '<img src ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIWFRUVFRcXFRgXGBcXFRcXFxcWFxYXGBcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUvLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAKwBJAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xAA9EAABAwIEBAMGBAQGAgMAAAABAAIRAyEEEjFBBVFhcSKBkQYTMqGx8ELB0eEUI1LxB2JygpLCFSQzU7L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIRAyESMQRBIlETgSNhoRT/2gAMAwEAAhEDEQA/APFoToTwzr2GqUjS31v3+lo0TUEHC5FDUmVFxNYwNToToShqFAGQkTyEvuzvbv2kLUYGkhPISLGOqUi0wQQevW4TAE8lJCzMhIXEJy4rGGwuATwE9tKUUEGGpzmo7KaV0C2qNBsjEJCEct6JC2UDWRyEhCOWJhYsYEiM0Simb9BPL669krBZFABEJWJxC6mLoMBwCWE4riEpgcJIRSEwtQMMhLCVdCwRsJ9Oi505QTlaXHo0antcJIXQigDYSJ5CSFgjHXXJ0Llgk11G/OwTSxFpVRukqGV0uvRLYFwSFvNHbQJCcyhGqXg2HkgBZBhPp0idtBPbqpmMaC4kNDZAsJgWA37Sg5U346YORGLE3VHcxBClLTGQ1wTUZzUKErQRsLnBOhcQgYQMS5CuangIqjHNplFZSKblsjtF43TKrMPZhnHTfqFP4fwJ9RwFv+TfpKTh2EzmyuMLw3E1XMdDQ0XHJrQNBac3muzx44nK5JkMspJfFoseLewr2NY5sOlrQRIBn/LfxdOcjqsnxTglSibtMLbcbwGJqYek5oBEmdCRDiI3gxHqVDpOdiaLqFe2IpCab96jJjK7m4WE7yOs38yGJdLf2ujm8N5+P8jTMG+n0Q3UlOx+DdTPiFjodioLyvNdHehhanBtkhRGMkLQ2wsBlXNRnMhNptuhNUAZEJuZONynQkoIPMnLnBIxBowhakhEIXZedvqgYGuhELuQ9blNAWMNhJCJAjeZ6RH6psIhObRcdGk9gSuS5Uixh4R2VCNDEgi3I2I7FABRA2x6D8wPzTxYGSWVZuABpp6KRRcN1XMKkYakXGG69SAOZuVbHloSUSZVI5fmgOA5oXvkEvVJ5UKoseSgtF46pSUo1XNJ2USOG6Y0WRXNvPn6pGtWRgQalqNT4TSJQYRoai0mb8vknNpSYUuhh3aAtHrPrCKQGw/AOGGtWYHAta4xJFpjwj1hF4pwt9Gs+m4EFsTNtQD+aC2s9joggfXcOlbDEcSp42mDWIZXY0N946zKrfwh5/A8TGY2IPijVJ8lK2NqtET2MweckRJC9GPDmjDNyNzEN0A8R9d9NV557K4k4etFRpYM8EH+kix/zDeRY7Lc4vi76Uvp5XNPiaCYDxo5nR8kFp3kg7FdGPI49HNkg20ROAHKHsOGLJsXZg4eEk5XDY3N77rKe0Dv5r3t1aYtz1PyKu+Ke2BfSc6lRy+G7iQQO0arN0QXYdrjcuL3OJ5lxE/Ip5z1X2NGLtspsViy6XDf4mmC09YNp7KtqU2O0lh5at8t/qnsq/I/YK6vSBGZv+5u46jmFztlaog1KZBg/sUakQAJ3JSB2x0Tn0/COkrQdPQWNeEFoUglMpgTfRPNWhURWWKcUfFURNh980CSFFMJ0JGthISlCwRS5NSroQMJC4BKQuQMJC6E4NSohGLk5KiYaCrHhvGatFtRrCB7xmV0ta4xmaSASDGmoVanBFTkumBxT7Cmu4mSZPqnNqkCN3WJ6ckKk/K4OgGCDBEtMGYI3B5ImMrZ3uflDc7i6GiGjMZho2AmAOi3J/ZqQPMuJSLkLZjkoKSEqxiXREjnA0+qEwi4OmyZTJGhhcbpgULEFKGJoUilVtBHYrGEpEg21Pqp+DYcwbuSPJRQ5x0Pz/dXHs0zLiKRN/5jfqqQ7FZv8P8A4eVHUgQ5jjElrgQQel7HzWQ41wz3DnU6gLHR3aYNuo06916hiuPPptFOneo7XoP1KoOJcHbXb/Oe6dRGW3yn5rtdOFSS/o4Izkp96POqGNfTGSzmTOV1263LSLsPUa7yr/A8WEZX5sjgAWES4idWnSpAB0gmNN1nOL8PfhqhAOYC4OxHUK0wOLw9ekWZSyr/APWZLX/5qbgJDrC1tN9V507xvo9GNTQnHM1A1GUnh9DEXB1LC6HOaDyMkjoTyWkx/Dw3D03DQMJ8ru/7LI0MdlOR5kGQ1zt5kQ//ADXIzb3nWVfYPjILG0KxLROWToWuBaROxEz5JrvYGqMjh8EalVrG6veGHuTlHa6HxHCuoVn0z8VNxaY5tMFSOGtLcRSJPjZUBeBv7sgtvvmiPmgcVc59eoSZJJc48zEkpK9jf0Q3CbjzHI/opDKRDb6pmFqhpJPKPmFIp1MwJiLox7sEiI8XTHBFqNuUMhWT0ARtUi0AjkfyIuEyq5p2jzn8lMw/D3OaX6MGrjp5c1woMGgLiotDFaQOqYSpz2EfhH35oLmdPT9ErRiPK4Iwok6AqQzAu3Gugt9hZRb6MRGNlFFIDr981J91H3bzO6ZUGwufoi0o9mBZZtp96oTjy0TnHYeZ5/smQhYRFyVcgEYlSJVgCp8yI5b9+aYlWMKRC4JxtFwZE846HqlpxN/lf5fuigDITmouLptD3BjszZ8JgiRtY6JjU9bMLCc0LmouXaf0TpC2OpUwbJ1ShkgnQmAQY/sn4Z+QyLlPxVQOa0bh0n0haQAYeNj9FO4NU/8AZojnUaPmh4TCNMS4N/1fvquzsZUDg+C10tgbiYN4GwsgnQKvo9BficldznOa0uNpMQ0WB6aBVXHvaRwtTM2+Igj0m/0VLwug6oS8F7y43dlc6SebgDClYHgvv8Uyi8ljXGS47gCco6lW5ycb+iXCCdMp8fji6HH+6HwnCNf4qjoZvlGZzR/VkMZgOUgp/HsE5lVzCIyOLYjkYnz26KuZinMPh9VLM+UtnRirjo0vH+A1GsFQFtam4Syswl0jfMDDtjNiRF+jeH4oVKUPYHGmIdHxluziNHiNdxE3lRPZ/jbqYqUiCab2lwaDGV4HxN5GNt1AbiTTeXD5WvrbpN1KNoaSND/4xjfd4qm4Fge3MCdLgFvmDZRzwcmlWqiJzaanJYkj1aOwcqetiDbK4hjyHluwc2bxzF/VXvBOMMZiAKh/lPpw/cNdcz+S6cPBv5EpqSja2ZipRH2P3R6LIapmPwoa9wBDmycrhcObJgg/d5Q6NLw+aXhsPK1ZFDEIi6mvZAPZRW00JKgotf40VsvvSGU6TRlp0wRmOkCZDSd3E2GgVxwPhT8U7KymA3ZrRYfmT1Kr+E8ND5OaA0SbTuAB6lbDg/EXYemfdQ2CA42knfa8rt8Tx7d6/fRLLlaVR7I2O/w8r5SQwWE6tJ9AspT9mamfxW5cyey32H9o/wD2adSbuAzRNzMEEfeqf7Y+01OhVeylDHfjeLvggEhv9OsWXTkx42/5EuvWl++zlhly8+L9mJxXCG4cfzLO/p/H57M879FSY6rygA7AyfP91M9oOMVqsB1RzmgeEOcT4dj27arPmpF15mfPF6xqkehFfYUuSOcMhtqQBztc/kg0pc773+ynYh2jRt8zuuP2MDACaVy5EwiVIuRGoYuSJVhRUqRKEDDgnAJGp6ZAESlqREBRTMNARmMTmHoix2TpAbHMCMW2HdNokETdOrVhAiSZ0ATWqEZY0mh0A3EDw9rAzqnUeJU6YLG0WPk6ukkkaGdTB0uoFXGODMrWOaTYkiLdOqEy4FtB+f8Ada4+gKL9mz4ZxY/iaGsyS4gwRyietu0re8K4WAA8tgk5oiIsQ3rIBPm4ryfgvvDUbVbQfXp0iC5okNzC7Q8gG0gOjeF6j7O+0lfFPDRhAG/if7xxDRvrTAnpKfMpSVQ697IOFOzLf4l8IDT/ABN4fDXNAN3gWvyIGnTqvOXsjUX5bD919E8WwDatN1NwBBHzFwfVeI+0fDfdvJAAuZA2vppCjDcd+iuKfoosoBB0uP3RHUpbO4t6WSVaNpUyqwOmBEQD87+afi7KuVEDJIA6yi4TCOfmIEwNep/b8lIbQ3WrwHBTTwQrOH/yEvNvhDoDJ6EBvYlVjj2Tnk4oyNIvp+FwJYb9p3H6KwZQI6g3B2gqTWwcscC4NtInQ3UXDcRFEBpkt6BpE8vFeOxCKqLph3JWh7sITsm0cJ4oDTbfaei7/wA6dGsHc3PoIA+ane0OPpCnTFIuLo/mG0EwNI21spyzQukMscq2WHB8X/D06jgAS+KezhsXAj09VOL89IvhuaoTIbNstoPU6rD4bEVQJmGgz2sAfMwArvgftI+mTFp1aDDTHMGV1eP5MYOpHNmwy7j2aJvC2YZrcTXiGNmmwfFUdJc2RsBOvQLzvild9ao5zjdzi533yHJaz2k4y6uA55a22k3PYXc76dlkKx6ROg0Mczcwubysym6j0DxMMo3PJ2/8I2IfPYQPQQPQCPnuopBJ6olR09l1EX+XquQ7gjnBgyt13P1jooye8poErGGFcpzaDaYzPGZ34WnSebufb+yhVHkkkmSbkrDDUqSVyIRA4J0IAaiCmVhGOhKGpuUojGnksAQJ0ojaTjsiDDeSxgDQjMajfwztBfsm+7IsQQnSBYVjeiKymJuPVMptXVK5BtBt3v8AeypWhWNdXLDZoHS5B7hPpODzme4hxNg0AAi0gRZp8lDqPe7Uk/T00CEHkKLQyNA6gCJaCB1cD67+imYbEUjTLalE1CD8bXFj4jTQh0dRN1Q4biL2byNwWi/3Kl1OOg2FIC3MG/QRYdEri2xlVUbD2a9qaWEaKYoFzQ4uDjapLtdiCQLTawW7wXt3g3xmrBk7vs0dC/4WnoSF4XWr03m0+cD9lLwdBm57+IX8gPzTKLvZOWKL2fRmXOMzSCCJBFwZXjXtRVD6tVpN/evy7yMztPRaD2d49VoYd9Js5TTIpmHeA8xm1sT5wsNxR+aANtF3f87hDkznxr5UQOfS/opFFwc5pO/hPp4T628wlw1EQcxgQZMX0UZ7wBA2jbfX6j5KKns6OKZcYHA/xGJp4fZzvH0Y27vkD6heu5GwWZRljLG0EaRyheS+wWIjiFMuPxCoL8y0wF6rXfBPqmlkuZzZVtI8z9o+BCi8kEmnqN8onQ9Ov2a+pXZlgiQQLbW6LX+0B8UxP5g/uCsTV4W8nQAdx+S6ciuNpdhg/tkDEtbMs8J5E29dlKw2Cn4nTzj6SpD8K0CA0fU+pugViQMosI2XG8STtlubapDsUWhpgAgGI1E8lEDgTlEN/qIBJB5ADVNzECBomhxNtjqNo3lCWwrRa4yvhqLIp/Hu50OfPRjbM/3Enqs1icTm0tzJ+I9/0+qNULGaC/3zUJzpMqNUURyKwwNL/T90JolHLYEmw+qNBYMUyVKwrQ3xaxYHaen69kFj5Ec/oP1P0S4ipsNBbz3P1+Sm3bpBAYqtmd9P1QClKaiMcuXLljDGPjZGbUZzIUTNO64H7/ZGxCxpFmpd6qVSq0hfN5H8oKpE9q1gotziaewd8kgxUHw/NVzEZlrlGwUTf452gAb1Av8AO3ySBxOpJPMlCaEehSkgzb6p1ZiT7qWEDUgx+Sq2lw1JVxT7ptXB5jMd07g30KivFWOtojrGtuRTKb73APdT6/DTJytMbc1FOHIMEG1zbzScWg2hRiY0Y3XkrBnEqjhGVth1/JVraZVzgMKXDQn73VsePkxJSorK8uPwgdh+ZWt9m+FF7WuNMxlzAgWIktme4I8k3Cez76zg1jZJMAbdyf6RuvX8Pw6hh6dCkXAEN920mBmgSSfO/d3VXjBQnvZDLm+FIxtDh4IBcN4IEtMHfykFYr2hw3uaxGrXXHrdet1aM1KLYAFZtSOeZoa4Af7Q/wBF5b7SiMLTzXeys+n1im57P+oVc8+SE8eVso6lTNb5KJXN42Tg8HTX6ozMMPxHxbNaJPmuBndVaIofBBkyLgixBFwQea9X9k+PfxdHxH+ay1TrsH+Y+crymthnE6R0Nj6Ky9m+IOw1ZtUSRpUbzYdfMajsg1YmSPKJu+JtmRu0keunzDf+RVG6mSDETtmsFo8c0OcHAy2o2xGhBGvoQVWPw2x1XoYtwORPezM4mjWabkeQBHqgGk6LmfILR1MMN7qtxrg2JFjEHpafqFOeKttllKylaybq3wnBgaNWq92VtNgc485+Bg5km/ootelsLXuhcT4g4Yd9KTBqNJ8g6AuPMmkki2Omyicw1HEgQPv1S/wJ5hT8KwZBG9/VOyocEHkQXhrLb8v1Qa4LmtO5JS4j4ip9LD+ET+FjnHmM0x5xB8kkxkVtMxJ5afQIZboivBHg2mf0SVLJIoZkdyG5yI6ExzFgjM65IkRNZHTmjkisoje6OAgAEzDk9EZuHG5RmOIEbft+/wBFwv0TJAFbTCexg5eqY1nquNSEwAqNTKiCqeiUVDzTJ0ai0w7p3VhTgW8/JU+FcRdScLXcHTdxvNphpsbeapGdCNFzTgEdTA9CfoChcQwwMc9uo5dUTDtNVwhhDGmb6l0ENFu5Vk0AwCAV1L5KiL0UWE4ePxGOwufotjwDANIkNMbZj842+/OHSoAm4lavgNMGR2/P9FThwg6F5pvZa8NwwYJAglYb2o4y+piH38DDkb2bqfMye0L0ssgSvMeK4H3bnNI0JH7qXiRk5SkLpMXh3thUpOw3vGh7MM97mjRxz03sgu5DOSLLJ8X4g+qA0wfHUfYfiqPL3b8yY7qwxFKTCh18NGndNkxvZWDinZW06ha0xroD1590bhzHBwflJA+IxIHU9kXC0BUeBMNGp58z97BaPg+MpAhjGQZkQJJjmddN5XNxTKSyVtIqsVhXEz8wob6O41WpxQbTm9iTDABLezuXSCs9ia3jOTSYMhpM77KihqmRjNsv/Z/iQdRFJ1nUySyd2EiRPMEm3ILQVqGZoeNxB77Kp9lMAHNqF7QWvAbpbcxB7/JabhfCPdMyZi5hzRP0nbn5LpxrjHZOSuTaKg07gQFheJ46HFhaQwE5YJ0kiRPY7r0zH4NzMpAmzwD3Frc5A9VhPbbCBj2CLBkDsFPNUimPRWYOvnaZ5767KHxSkbjZ1x3Gv31Cs6dMZAWgAuE+cJKlMZD7w26aztl6rmnD47KRdMocHicoykafJS3vlpcPRJ/CNJtUaP8AXLD6wWn1UzDYCmBNTEMA5Mmo4+gAHeSoqSS2VaspsNQL3aWFz99VYipJA5vBd9AO13J2KxDT4KTS1vX4nd0nuclJ9XZsNb1cRAjtd3kpSdjFXTbmceQt9/P1TMe2IPkrDB0IYOt/0+UIOKoZgR6d0yWgXspXFNzIlamWmCEEoDC50qGuQCSQE8JoTgsAlYZwhwgEmOdgCD6HT0TWRPWPJLhhEk7i3ab/AERKTRN9zfa3dUSEbEcwt1BnTp3B0O+ijVBdWQpZo5aDewXYmmPh91dli7MRrPxNIv4jMjaO6dwdWheZAp05UqnQ6aJGYYydwDEiPJWtHDjXU9T9Y3WUGFyBUqWUSdZBg9NlI4YchNtYB7a2SVWtbc3PfRSaWLaylEE3jZWhD39E3svsNhSTA0/QEgopw0GOqncDrU303PBsNzbeL8tVn+J0jVrEe80MNAcIjoAd12xS9Ekm+zQ4XC300V/wZsOd/t/7LL8EJwuYYiuIMZWSXu7xEj6K6w/tDh2al4kCDktaeso36M8TNmBLB1kH79Vn+P8ABs/jFxF/LQqfwrjNGu0tp1AfUOadiWm8Sk/8g5ou24MPbqAd46EEEHkVLG5QlaJTjqjz/GcOymw6LN8bcWn3Q1F39zcN9IPn0Xq2LwtOr4qeupbofLmvL8bw+pncXtLXuc5xB2kkps2RNaNh5XsgYCm42uAtNgqDKTczYmLnf5qqo0SzUJ2IqmIBHa90kYJDybehuPxsknyHM9kDguHdVq+7y+IyRt39ElLBue+RIA+G2435RMrS+xvD3fxNN7tWtqExvIyfV3yQUG3Y6cUqNjwfhTW0/dOaHDeRInmplHBNYIuNbZnfmVY0KGXmZ9P2Q8e4NAJneYa53/5Bhb8tukbHB3YoogtAXmH+IwHvgOTR8/7fNei4niVOm0AkyRYQZ8wdPNeV+2mJDq7yZ2+gSwi23Y/GmVODq+CImD8kbGUczM3L84/ZVVPFZTaVf0znoPceQ+oTY4c8cr9UGtmffTK4IxYkDI1+ennz7LicSiYXBYQvPlI7f1Hpy5nspHHntcaVBnwsGZ3Uu3PWJ/5KbhOI0qdMtykk3c7dxGnlsBsqWk8kue7Vxk/f3oFHi7DyC1DFgojijvegPVGBEbEAGxuqiqyCR9wrasVDr083dIx0yBCVFOHdyXIBJDaad7lEqGAoWKrE2lHQB9XGmzRcNmOV9YSN4g/p6KIUoWTYaROHEHRECEWhiGnUZfn8lXBECdSYtGifimx/LZYaEuJjnb80ahiKsfDI8wPqqXhFUtqNjcgHsSt5xTCMGEqvDRmyEz5gLuwY/wAibvonJqOqMo3JPieNeascU2iaQio2c/M8is2ynabozj4B3/VHE1+OaKUbDg2HdkhnjDom4iAQQL9YUqhgmsd4mkO1va/Mc+6xvD8W+m4FjiFteAY91YFtQNcJ5HpfWxvtCv47VdEZRbkP/g8xLiDJOqdjOHOmmAD4rTGl90zB13MqvaDZtQtE3sHELYYY5myQFTP8GmVjH4jfZ7hLaLHPHxEa7mPoFN4hWJp83bdendGpnw+Srce63muVO2SyRKHiHFrgMJ8J8RuCDy8rqUzH++ZBIn/MA5ju7Toeog90PilBpDXx4iQCefdV9NgbcKnGzmqg1VzGnLUogf6S4A9rwUtHhlGofCXtJ7Oj1AI9U3EOOaDcGLHTuORVvwSmC0He/wAlRwUY2ZbY7B8Ea1sB0nba3ZWPA8D7rM53xuMC+gmYHrPon0rmOSksddQlkdcSnD2Wzaq5z53VaHnmiNcVz8DoQXGU2uF2g99R2K839reC5qhfOsbaQIXohKqeKUw7UBdGFboTJdaPIqvCzMC/ZTqmLaym6m3M7QE2DbEfCNSLaytDxDBs5blVDKDQHPygkEATcCQTMb6bq/DimkRjJvsiYbAuqNziAzZx36Aakpa9BjGySO7iBfsh8VqEMDz4iTF9AOgCo61Qm/0AAHYBcOSNFYqydWxdPmz5/kolbHAaEHtP6que5CcVyssok08RP9ITH48n8I9VCKaSlbGonMrg6iCn2Krg5SmFBGoMkXBy5GgH/9k=">', 'error')

    } else {
        document.getElementById("comentario_user").value = ""

        let comentario_class = new Comentario(nome_login, comentario, id_login);
        let comentario_service = new Comentario_Service("http://localhost:3000/comentario")
        comentario_service.inserir(comentario_class).then(resposta => {
            console.log(resposta);
            comentario_service.listar().then(resposta => {
                for (let i = 0; i <= resposta.length - 1; i++) {
                    let li = document.createElement("li");
                    let span_nome = document.createElement("span");
                    let span_comentario = document.createElement("span");
                    let br = document.createElement("br")
                    span_nome.innerHTML = resposta[i].nome_aluno;
                    span_comentario.innerHTML = resposta[i].comentario;
                    li.append(span_nome);
                    li.append(br);
                    li.append(span_comentario);
                    ul.append(li);
                }
            })
        })

    }
}
document.getElementById("notas").onclick = function () {
    $("#comentario").hide("fast");
    $("#area_de_escolhas").hide("fast");
    $("#lugar_de_notas").show("fast");
    let boletim = document.getElementById("boletim");
    let titulo_table = document.createElement("th");
    titulo_table.innerHTML = "Suas notas"
    titulo_table.setAttribute('colspan', 2);
    boletim.append(titulo_table);
    let nota_service = new Nota_Service(`http://localhost:3000/notas_professor?id_aluno=${id_login}`);
    nota_service.listar().then(resposta => {
        for (let i = 0; i <= resposta.length - 1; i++) {
            let tr = document.createElement("tr");
            let td_nome = document.createElement("td");
            let td_nota = document.createElement("td");
            td_nome.innerHTML = resposta[i].nome_lista_teorica;
            td_nota.innerHTML = resposta[i].nota;
            tr.append(td_nome);
            tr.append(td_nota);
            boletim.append(tr);
        }
    })
    let nota_service2 = new Nota_Service(`http://localhost:3000/notas_servidor?id_aluno=${id_login}`);
    nota_service2.listar().then(resposta => {
        for(let i = 0; i <= resposta.length -1; i++){

        let tr = document.createElement("tr");
        let td_nome = document.createElement("td");
        let td_nota = document.createElement("td");
        td_nome.innerHTML = resposta[i].nome_lista_teorica;
        td_nota.innerHTML = resposta[i].nota;
        tr.append(td_nome);
        tr.append(td_nota);
        boletim.append(tr);
        }
    })
    let nota_service3 = new Nota_Service(`http://localhost:3000/notas_aluno?=id_aluno=${id_login}`)
    nota_service3.listar().then(resposta => {
        for(let i = 0; i <= resposta.length -1; i++){
        let tr = document.createElement("tr");
        let td_nome = document.createElement("td");
        let td_nota = document.createElement("td");
        td_nome.innerHTML = resposta[i].nome_lista_teorica;
        td_nota.innerHTML = resposta[i].nota;
        tr.append(td_nome);
        tr.append(td_nota);
        boletim.append(tr);
        }

    })
    document.getElementById("voltar_area_de_escolhas_inicial").onclick = function () {
        $("#area_de_escolhas").show("fast");
        $("#lugar_de_notas").hide("fast");
        $("#boletim").empty();


    }
}
document.getElementById("exercicios").onclick = function () {
    $("#area_de_escolhas").hide("fast");
    $("#escolha_modo_exercicio").show("fast");
    $("#comentario").hide("fast");
    document.getElementById("voltar_da_area_escolha_modo_exercicio").onclick = function () {
        $("#escolha_modo_exercicio").hide("fast");
        $("#area_de_escolhas").show("fast");
    }
    document.getElementById("criar_lista_teorica_automatica").onclick = function () {
        $("#escolha_modo_exercicio").hide("fast");
        $("#tema_lista_teorica").show("fast");
        let opcoes_temas = document.querySelectorAll(".opcoes_temas");
        for (let i = 0; i <= opcoes_temas.length - 1; i++) {
            opcoes_temas[i].onclick = function () {
                var id_tema = event.target.id;
                $("#tema_lista_teorica").hide("fast");
                $("#criacao_lista_teorica").show("fast");
                $("#pegar_nome").show("fast");
                $("#proximo_passo_criacao").hide("fast");
                $("#fazer_lista_teorica").hide("fast");
                document.getElementById("salvar_nome_lista_teorica").onclick = function () {
                    
                    var nome_lista_teorica_automatica = $("#nome_lista_teorica").val();
                    if (nome_lista_teorica_automatica != ""){
                        $("#criacao_lista_teorica").hide("fast");
                        console.log("jjj")
                        let lista_teorica_service = new Lista_Teorica_Service(`http://localhost:3000/perguntas?id_tema=${id_tema}&_sort=pergunta&_limit=10`);
                        lista_teorica_service.listar().then(resposta => {
                            $("#fazer_exercicio_lista_teorica").show("fast");
                            let lista_pergunta_server = [];
                            let opcoes_server = [];
                            let opcoes_corretas_server = [];
                            let lista_opcoes2 = [1, 2, 3, 4, 5];
                            let posicao_pergunta = 0;
                            let posicao_opcoes = 0;
                            let posicao_opcoes_certas = 0;
                            let lista_perguntas_erradas_usuario = [];
                            let lista_perguntas_certas_user = []
                            let t_number = 1;
                            let nota = 0;
                            var nota_final = 0;
                            let lista_opcoes2s = [];
                            let opcoes_correta2 = [];
                            console.log(resposta);
                            for (let i = 0; i <= resposta.length - 1; i++) {
                                lista_pergunta_server.push(resposta[i].pergunta);
                                opcoes_server.push(resposta[i].opcoes);
                                opcoes_corretas_server.push(resposta[i].opcao_certa)
                            }

                            let lista_teorica_servidor = new Lista_Teorica_Servidor(nome_lista_teorica_automatica, id_tema, id_login, lista_pergunta_server, opcoes_server, opcoes_corretas_server);
                            let lista_teorica_servidor_service = new Lista_Teorica_Servidor_Service("http://localhost:3000/Lista_Teorica_Servidor");
                            lista_teorica_servidor_service.inserir(lista_teorica_servidor).then(resposta => {
                                console.log(resposta);
                                var id_lista_teorica = resposta.id
                                opcoes_server.push(lista_opcoes2);
                                let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                                let input_radio = document.querySelectorAll("#valor");
                                $("#fazer_lista_teorica").hide("fast");
                                $("#fazer_exercicio_lista_teorica").show("fast");
                                let lugar_perguntas = document.getElementById("place_perguntas");
                                lugar_perguntas.innerHTML = `${t_number}/10 ${lista_pergunta_server[posicao_pergunta]}`;
                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                }

                                document.getElementById("proxima_pergunta").onclick = function () {
                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                    console.log(input_radio_situacao)
                                    if (typeof input_radio_situacao != "undefined") {
                                        if (opcoes_corretas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                            lista_perguntas_certas_user.push(lista_pergunta_server[posicao_pergunta]);
                                            console.log(lista_perguntas_certas_user);
                                            swal('Acertou!', 'parabéns', 'success');
                                            nota += 10
                                        } else {
                                            lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                            for (let i = 0; i <= 4; i++) {
                                                lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                                console.log(lista_opcoes2s);
                                            }
                                            console.log(lista_opcoes2s)
                                            opcoes_correta2.push(opcoes_corretas_server[posicao_opcoes_certas]);
                                            swal('Oh no...', 'Você errou!', 'error')
                                        }
                                        t_number++;
                                        posicao_pergunta++;
                                        posicao_opcoes++;
                                        posicao_opcoes_certas++;

                                        let input_radio_checker = $("input[name='opcoes']")
                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                            input_radio_checker[i].checked = false;
                                        }
                                        lugar_perguntas.innerHTML = `${t_number}/10)  ${lista_pergunta_server[posicao_pergunta]}`;
                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                        }
                                        if (posicao_pergunta == 10) {
                                            console.log("termino da lista teórica");
                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                            $("#termino_exercicio").show("fast");
                                            $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                            nota_final = nota
                                            posicao_pergunta = 0;
                                            posicao_opcoes = 0;
                                            posicao_opcoes_certas = 0;
                                            t_number = 1;
                                            nota = 0

                                            let ul_resposta_certa = document.getElementById("reposta_certa");
                                            let ul_resposta_errada = document.getElementById("pergunta_errada");
                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                $("#termino_exercicio").hide("fast");
                                                $("#area_de_escolhas").show("fast");
                                                $("#comentario").show("fast");
                                                $("#reposta_certa").empty();
                                                $("#pergunta_errada").empty();
                                            }
                                            for (let i = 0; i <= lista_perguntas_certas_user.length - 1; i++) {
                                                let li = document.createElement("li");
                                                li.setAttribute('id', 'certas')
                                                let button = document.createElement("button");
                                                button.innerHTML = "V";
                                                button.setAttribute('id', 'perguntas_certas');
                                                li.innerHTML = lista_perguntas_certas_user[i];
                                                li.append(button);
                                                ul_resposta_certa.append(li);
                                            }
                                            for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                                let li = document.createElement("li");
                                                let button = document.createElement("button");
                                                button.innerHTML = "X";
                                                button.setAttribute('id', 'perguntas_erradas');
                                                li.innerHTML = lista_perguntas_erradas_usuario[i];
                                                li.append(button);
                                                ul_resposta_errada.append(li);
                                            }
                                            $("#fazer_perguntas_erradas").show("fast");
                                            document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                                $("#reposta_certa").empty();
                                                $("#pergunta_errada").empty();
                                                let pergunta_final_errada = [];
                                                let pergunta_certa_final = [];
                                                $("#termino_exercicio").hide("fast");
                                                $("#fazer_exercicio_lista_teorica").show("fast");
                                                lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                    lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                    input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                    posicao_opcoes++;
                                                }
                                                document.getElementById("proxima_pergunta").onclick = function () {
                                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                                    console.log(input_radio_situacao)
                                                    if (typeof input_radio_situacao != "undefined") {
                                                        if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                            pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                            swal('Acertou!', 'parabéns', 'success');
                                                            nota += 10;

                                                        } else {
                                                            pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                            console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                            swal('Oh no...', 'Você errou!', 'error')
                                                        }
                                                        t_number++;
                                                        posicao_pergunta++;
                                                        posicao_opcoes_certas++;

                                                        let input_radio_checker = $("input[name='opcoes']")
                                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                            input_radio_checker[i].checked = false;
                                                        }
                                                        lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                            lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                            input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                            posicao_opcoes++
                                                        }
                                                        let encerrar = lista_perguntas_erradas_usuario.length
                                                        if (encerrar == posicao_pergunta) {
                                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                                            $("#termino_exercicio").show("fast");
                                                            $("#fazer_perguntas_erradas").hide("fast");
                                                            console.log(encerrar + "lista teorica");
                                                            nota_final += nota;
                                                            $("#lugar_nota").text(`A sua nota foi: ${nota_final}`)
                                                            nota = 0;
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                lista_perguntas_certas_user.push(pergunta_certa_final[i])
                                                            }
                                                            let nota_class = new NOTA_SERVIDOR(nome_login, nota_final, id_login, id_lista_teorica, nome_lista_teorica_automatica, lista_perguntas_certas_user, pergunta_final_errada);
                                                            let nota_service = new NOTA_SERVIDOR_SERVICE("http://localhost:3000/notas_servidor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "V"
                                                                li.innerHTML = pergunta_certa_final[i];
                                                                li.append(button);
                                                                ul_resposta_certa.append(li);
                                                            }
                                                            for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "X"
                                                                li.innerHTML = pergunta_final_errada[i];
                                                                li.append(button);
                                                                ul_resposta_errada.append(li)
                                                            }
                                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                                $("#reposta_certa").empty();
                                                                $("#pergunta_errada").empty();
                                                                $("#termino_exercicio").hide("fast");
                                                                $("#area_de_escolhas").show("fast");
                                                                $("#comentario").show("fast");
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                $("#termino_exercicio").hide("fast");
                                                $("#area_de_escolhas").show("fast");
                                                $("#reposta_certa").empty();
                                                $("#pergunta_errada").empty();
                                                $("#comentario").hide("fast");
                                                let nota_class = new NOTA_SERVIDOR(nome_login, nota_final, id_login, id_lista_teorica, nome_lista_teorica_automatica, lista_perguntas_certas_user, lista_perguntas_erradas_usuario);
                                                let nota_service = new NOTA_SERVIDOR_SERVICE("http://localhost:3000/notas_servidor");
                                                nota_service.inserir(nota_class).then(resposta => {
                                                    console.log(resposta);
                                                })
                                            }
                                        }
                                    }
                                }
                            })
                        })
                    } else {
                        swal('DIGITE O NOME DA LISTA', 'tente novamente', 'error')
                    }
                }
            }
        }
    }
    document.getElementById("criar_lista_teorica").onclick = function () {
        $("#escolha_modo_exercicio").hide("fast");
        $("#tema_lista_teorica").show();
        let opcoes_temas = document.querySelectorAll(".opcoes_temas");
        for (let i = 0; i <= opcoes_temas.length - 1; i++) {
            opcoes_temas[i].onclick = function () {
                $("#tema_lista_teorica").hide("fast");
                $("#criacao_lista_teorica").show("fast");
                $("#pegar_nome").show("fast")
                $("#proximo_passo_criacao").hide();
                $("#fazer_lista_teorica").hide();
                let id_tema = event.target.id;
                document.getElementById("salvar_nome_lista_teorica").onclick = function () {
                    let input_nome = $("#nome_lista_teorica").val();
                    if (input_nome == "") {
                        swal('Oh no...', 'DIGITE O NOME DA LISTA TEÓRICA!', 'error')
                    } else {
                        document.getElementById("nome_lista_teorica").value = ""
                        $("#pegar_nome").hide("fast");
                        $("#proximo_passo_criacao").show("fast");
                        let pergunta_service = new Pergunta_Service(`http://localhost:3000/perguntas?id_tema=${id_tema}`);
                        pergunta_service.listar().then(resposta => {
                            let lista_pergunta_server = [];
                            let opcoes_server = [];
                            let opcoes_certas_server = [];
                            let contador_perguntas_adicionadas = 0;
                            let ul = document.getElementById("perguntasserver");
                            $("#contador_perguntas").text(`${contador_perguntas_adicionadas}/10 no minímo 10 perguntas no máximo 10 perguntas`);
                            for (let i = 0; i <= resposta.length - 1; i++) {
                                let li = document.createElement("li");
                                let button = document.createElement("button");
                                button.innerHTML = resposta[i].pergunta;
                                button.setAttribute('id', resposta[i].id);
                                li.append(button);
                                ul.append(li);
                                button.onclick = function () {
                                    contador_perguntas_adicionadas++;
                                    $("#contador_perguntas").text(`${contador_perguntas_adicionadas}/10 no minímo 10 perguntas no máximo 10 perguntas`);
                                    lista_pergunta_server.push(resposta[i].pergunta);
                                    console.log(lista_pergunta_server);
                                    opcoes_server.push(resposta[i].opcoes);
                                    opcoes_certas_server.push(resposta[i].opcao_certa);
                                    if (contador_perguntas_adicionadas == 10) {
                                        let lista_teorica_aluno = new Lista_Teorica_Aluno(input_nome, id_login, id_tema, lista_pergunta_server, opcoes_server, opcoes_certas_server);
                                        let lista_teorica_aluno_service = new Lista_Teorica_Aluno_Service("http://localhost:3000/Lista_Teorica_aluno");
                                        lista_teorica_aluno_service.inserir(lista_teorica_aluno).then(resposta => {
                                            var id_lista_teorica = resposta.id;
                                            $("#proximo_passo_criacao").hide("fast");
                                            $("#fazer_lista_teorica").show("fast");
                                            $("#perguntasserver").empty();
                                            document.getElementById("fazer_lista_teorica").onclick = function () {

                                                let t_number = 1;
                                                let lista_certas_usuario = [];
                                                let lista_perguntas_erradas_usuario = [];
                                                let lista_opcoes2s = [];
                                                let opcoes_correta2 = []
                                                let nota = 0;
                                                var nota_final = 0;
                                                lista_opcoes_falsas = [1, 2, 3, 4, 5];
                                                opcoes_server.push(lista_opcoes_falsas);
                                                let posicao_pergunta = 0;
                                                let posicao_certa = 0;
                                                let posicao_errada = 0;
                                                let posicao_opcoes = 0;
                                                let posicao_opcoes_certas = 0;
                                                let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                                                let input_radio = document.querySelectorAll("#valor");
                                                $("#fazer_lista_teorica").hide("fast");
                                                $("#fazer_exercicio_lista_teorica").show("fast");
                                                let lugar_perguntas = document.getElementById("place_perguntas");
                                                lugar_perguntas.innerHTML = `${t_number}/10 ${lista_pergunta_server[posicao_pergunta]}`;
                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                                }

                                                document.getElementById("proxima_pergunta").onclick = function () {
                                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                                    console.log(input_radio_situacao)
                                                    if (typeof input_radio_situacao != "undefined") {
                                                        if (opcoes_certas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                                            lista_certas_usuario.push(lista_pergunta_server[posicao_pergunta]);
                                                            console.log(lista_certas_usuario);
                                                            posicao_certa++
                                                            console.log(posicao_certa)
                                                            swal('Acertou!', 'parabéns', 'success');
                                                            nota += 10;

                                                        } else {
                                                            lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                                            for (let i = 0; i <= 4; i++) {
                                                                lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                                                console.log(lista_opcoes2s);
                                                            }
                                                            console.log(lista_opcoes2s)
                                                            opcoes_correta2.push(opcoes_certas_server[posicao_opcoes_certas]);
                                                            posicao_errada++;
                                                            console.log(posicao_errada);
                                                            swal('Oh no...', 'Você errou!', 'error')
                                                        }
                                                        t_number++;
                                                        posicao_pergunta++;
                                                        posicao_opcoes++;
                                                        posicao_opcoes_certas++;

                                                        let input_radio_checker = $("input[name='opcoes']")
                                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                            input_radio_checker[i].checked = false;
                                                        }
                                                        lugar_perguntas.innerHTML = `${t_number}/10)  ${lista_pergunta_server[posicao_pergunta]}`;
                                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                                        }
                                                        if (posicao_pergunta == 10) {
                                                            $("#fazer_perguntas_erradas").show("fast");

                                                            console.log("termino da lista teórica");
                                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                                            $("#termino_exercicio").show("fast");
                                                            $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                            nota_final = nota;
                                                            nota = 0;

                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;

                                                            let ul_resposta_certa = document.getElementById("reposta_certa");
                                                            let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                            for (let i = 0; i <= lista_certas_usuario.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                li.setAttribute('id', 'certas')
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "V";
                                                                button.setAttribute('id', 'perguntas_certas');
                                                                li.innerHTML = lista_certas_usuario[i];
                                                                li.append(button);
                                                                ul_resposta_certa.append(li);
                                                            }
                                                            for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "X";
                                                                button.setAttribute('id', 'perguntas_erradas');
                                                                li.innerHTML = lista_perguntas_erradas_usuario[i];
                                                                li.append(button);
                                                                ul_resposta_errada.append(li);
                                                            }
                                                            $("#fazer_perguntas_erradas").show("fast");
                                                            document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                                                $("#reposta_certa").empty();
                                                                $("#pergunta_errada").empty();
                                                                let pergunta_final_errada = [];
                                                                let pergunta_certa_final = [];
                                                                $("#termino_exercicio").hide("fast");
                                                                $("#fazer_exercicio_lista_teorica").show("fast");

                                                                lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                                    lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                                    input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                                    posicao_opcoes++;
                                                                }
                                                                document.getElementById("proxima_pergunta").onclick = function () {
                                                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                                                    console.log(input_radio_situacao)
                                                                    if (typeof input_radio_situacao != "undefined") {
                                                                        if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                                            pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                                            posicao_certa++
                                                                            console.log(posicao_certa)
                                                                            swal('Acertou!', 'parabéns', 'success');
                                                                            nota += 10;

                                                                        } else {
                                                                            /* lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                                                             lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                                                             opcoes_correta2.push(opcoes_certas_server[posicao_opcoes_certas]);*/
                                                                            posicao_errada++;
                                                                            pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                                            console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                                            swal('Oh no...', 'Você errou!', 'error')
                                                                        }
                                                                        t_number++;
                                                                        posicao_pergunta++;
                                                                        posicao_opcoes_certas++;

                                                                        let input_radio_checker = $("input[name='opcoes']")
                                                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                                            input_radio_checker[i].checked = false;
                                                                        }
                                                                        lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                                            lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                                            input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                                            posicao_opcoes++
                                                                        }
                                                                        let encerrar = lista_perguntas_erradas_usuario.length
                                                                        if (encerrar == posicao_pergunta) {
                                                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                                                            $("#termino_exercicio").show("fast");
                                                                            $("#fazer_perguntas_erradas").hide("fast");
                                                                            console.log(encerrar + "lista teorica");
                                                                            nota_final += nota;
                                                                            $("#lugar_nota").text(`Sua nota foi: ${nota_final}`)
                                                                            nota = 0;
                                                                            posicao_pergunta = 0;
                                                                            posicao_opcoes = 0;
                                                                            posicao_opcoes_certas = 0;
                                                                            t_number = 1;
                                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                                lista_certas_usuario.push(pergunta_certa_final[i])

                                                                            }
                                                                            let nota_class = new NOTA_ALUNO(nome_login, nota_final, id_login, id_lista_teorica, input_nome, lista_certas_usuario, pergunta_final_errada);
                                                                            let nota_service = new NOTA_ALUNO_SERVICE("http://localhost:3000/notas_aluno");
                                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                                console.log(resposta);
                                                                            })
                                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                                let li = document.createElement("li");
                                                                                let button = document.createElement("button");
                                                                                button.innerHTML = "V"
                                                                                li.innerHTML = pergunta_certa_final[i];
                                                                                li.append(button);
                                                                                ul_resposta_certa.append(li);
                                                                            }
                                                                            for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                                                let li = document.createElement("li");
                                                                                let button = document.createElement("button");
                                                                                button.innerHTML = "X"
                                                                                li.innerHTML = pergunta_final_errada[i];
                                                                                li.append(button);
                                                                                ul_resposta_errada.append(li)
                                                                            }
                                                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                                                $("#reposta_certa").empty();
                                                                                $("#pergunta_errada").empty();
                                                                                $("#termino_exercicio").hide("fast");
                                                                                $("#area_de_escolhas").show("fast");
                                                                                $("#comentario").show("fast");
                                                                            }

                                                                        }
                                                                    }
                                                                }

                                                            }
                                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                                $("#termino_exercicio").hide("fast");
                                                                $("#area_de_escolhas").show("fast");
                                                                $("#reposta_certa").empty();
                                                                $("#pergunta_errada").empty();
                                                                $("#comentario").show("fast");
                                                                let nota_class = new NOTA_ALUNO(nome_login, nota_final, id_login, id_lista_teorica, input_nome, lista_certas_usuario, lista_perguntas_erradas_usuario);
                                                                nota_final = 0;
                                                                let nota_service = new NOTA_ALUNO_SERVICE("http://localhost:3000/notas_aluno");
                                                                nota_service.inserir(nota_class).then(resposta => {
                                                                    console.log(resposta);
                                                                })
                                                            }
                                                        }
                                                    } else {
                                                        swal('Oh no...', 'Selecione alguma opção', 'error')
                                                        
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    }
                }
            }
        }
    }
}

document.getElementById("salas_presentes").onclick = function () {
    $("#area_de_escolhas").hide("fast");
    $("#escolha_de_sala").show("fast");
    let sala_service = new Sala_Service(`http://localhost:3000/salas?participantes_id_like=${id_login}`);
    sala_service.listar().then(resposta => {
        console.log(resposta);
        let ul = document.getElementById("salas_inseridas");
        for (let i = 0; i <= resposta.length - 1; i++) {
            let li = document.createElement("li");
            let button_acessar_sala = document.createElement("button");
            button_acessar_sala.innerHTML = resposta[i].nome;
            button_acessar_sala.setAttribute('id', resposta[i].id);
            li.append(button_acessar_sala);
            ul.append(li);
            button_acessar_sala.onclick = function () {
                $("#escolha_de_sala").hide("fast");
                $("#area_escolha_lista_teorica").show("fast");
                var id_sala = event.target.id;
                let lista_teorica_service = new Lista_Teorica_Service(`http://localhost:3000/lista_teoricas?id_sala=${id_sala}`);
                let ul = document.getElementById("listas_teoricas");
                lista_teorica_service.listar().then(resposta => {
                    for (let i = 0; i <= resposta.length - 1; i++) {
                        var data_de_entrega = resposta[i].Data_de_entrega;
                        let li = document.createElement("li");
                        let button_acessar_lista = document.createElement("button");
                        button_acessar_lista.innerHTML = resposta[i].nome

                        button_acessar_lista.setAttribute('id', resposta[i].id);


                        if (data_de_entrega != "") {
                            var target_date = new Date(data_de_entrega).getTime();
                            var days, hours, minutes, seconds;

                            function DATA_ENTREGA() {
                                var current_date = new Date().getTime();
                                if (current_date > target_date) {
                                    var atrasado = Math.abs((target_date - current_date) / 1000);
                                    days = ` já FAZEM DA DATA DE ENTREGA: ${parseInt(atrasado / 86400)} dias`
                                    atrasado = atrasado % 86400;
                                    hours = `${parseInt(atrasado / 3600)}:`;
                                    atrasado = atrasado % 3600;
                                    minutes = `${parseInt(atrasado / 60)}:`;
                                    seconds = `${parseInt(atrasado % 60)}`;
                                    let data = [];
                                    data.push(days);
                                    data.push(hours);
                                    data.push(minutes);
                                    data.push(seconds)

                                    button_acessar_lista.innerHTML = resposta[i].nome + "   " + data
                                } else {
                                    let prazo = (target_date - current_date) / 1000;
                                    days = ` Faltam: ${parseInt(prazo / 86400)} dias`;
                                    prazo = prazo % 86400;
                                    hours = `${parseInt(prazo / 3600)} horas:`;
                                    prazo = prazo % 3600;
                                    minutes = `${parseInt(prazo / 60)} minutos:`;
                                    seconds = `${parseInt(prazo % 60)} segundos`;
                                    let data = [];
                                    data.push(days, hours, minutes, seconds);
                                    button_acessar_lista.innerHTML = resposta[i].nome + "   " + data
                                }
                            }
                            var tempo_entrega = setInterval(DATA_ENTREGA, 1000)
                        }

                        li.append(button_acessar_lista);
                        ul.append(li);
                        button_acessar_lista.onclick = function () {
                            $("#area_escolha_lista_teorica").hide("fast");
                            var id_lista_teorica = event.target.id;
                            console.log(id_lista_teorica)

                            let lista_teorica = new Lista_Teorica_Service(`http://localhost:3000/lista_teoricas?id=${id_lista_teorica}`);
                            lista_teorica.listar().then(resposta => {
                                data_de_entrega = resposta[0].Data_de_entrega

                            })
                            let nota_service = new Nota_Service(`http://localhost:3000/notas_professor?id_aluno=${id_login}&id_lista_teorica=${id_lista_teorica}`);
                            nota_service.listar().then(resposta => {
                                if (resposta.length > 0) {

                                    $("#termino_exercicio").show("fast");
                                    $("#lugar_nota").text(`Sua Nota foi ${resposta[0].nota}`);
                                    let pergunta_errada = resposta[0].perguntas_erradas;
                                    let perguntas_certas = resposta[0].perguntas_certas;
                                    let perguntas_nao_feitas = resposta[0].perguntas_nao_feitas;
                                    
                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                    let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                    for (let i = 0; i <= perguntas_certas.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = perguntas_certas[i];
                                        button.innerHTML = "V"
                                        li.append(button);
                                        ul_resposta_certa.append(li);
                                    }
                                    for (let i = 0; i <= pergunta_errada.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = pergunta_errada[i];
                                        button.innerHTML = "X"
                                        li.append(button);
                                        ul_resposta_errada.append(li);
                                    }
                                    for(let i = 0; i <= perguntas_nao_feitas.length -1; i++){
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        button.innerHTML = "?";
                                        li.innerHTML = perguntas_nao_feitas[i];
                                        li.append(button);
                                        ul_perguntas_nao_feitas.append(li);
                                    }
                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                        $("#termino_exercicio").hide("fast");
                                        $("#area_escolha_lista_teorica").show("fast");
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        $("#perguntas_nao_feitas").empty();

                                    }

                                } else {
                                    $("#fazer_exercicio_lista_teorica").show("fast");
                                    let lista_teorica_service = new Lista_Teorica_Service(`http://localhost:3000/lista_teoricas?id=${id_lista_teorica}&id_sala=${id_sala}`);
                                    lista_teorica_service.listar().then(resposta => {
                                        var tempo_de_termino;
                                        let lista_pergunta;
                                        let lista_opcoes;
                                        let lista_perguntas_nao_feitas = [];
                                        let lista_opcoes_corretas;
                                        var nome_lista_teorica;

                                        tempo_de_termino = resposta[0].tempo_de_termino
                                        console.log(tempo_de_termino);
                                        lista_pergunta = resposta[0].perguntas;
                                        lista_opcoes = resposta[0].opcoes;
                                        lista_opcoes_corretas = resposta[0].opcoes_certas;
                                        nome_lista_teorica = resposta[0].nome


                                        let nota = 0;
                                        let posicao_certa = 0;
                                        let posicao_errada = 0;
                                        let t_number = 1;
                                        let lista_opcoes2 = [1, 2, 3, 4, 5]
                                        lista_opcoes.push(lista_opcoes2);
                                        let posicao_pergunta = 0;
                                        let posicao_opcoes = 0;
                                        let posicao_opcoes_certas = 0;
                                        let lista_erradas_usuario = [];
                                        let lista_certas_usuario = [];
                                        let input_radio = document.querySelectorAll("#valor");
                                        let label_escolhas = document.querySelectorAll("#escolha");
                                        let perguntas = document.getElementById("place_perguntas");
                                        perguntas.innerHTML = "1) " + lista_pergunta[posicao_pergunta];
                                        for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                            label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                        }
                                        document.getElementById("proxima_pergunta").onclick = function () {
                                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                            console.log(input_radio_situacao)
                                            if (typeof input_radio_situacao != "undefined") {

                                                if (lista_opcoes_corretas[posicao_opcoes_certas] == input_radio_situacao) {
                                                    lista_certas_usuario.push(lista_pergunta[posicao_pergunta]);
                                                    console.log(lista_certas_usuario);
                                                    posicao_certa++
                                                    console.log(posicao_certa)
                                                    swal('Acertou!', 'parabéns', 'success');
                                                    nota += 10;

                                                } else {
                                                    lista_erradas_usuario.push(lista_pergunta[posicao_pergunta])
                                                    posicao_errada++;
                                                    console.log(posicao_errada);
                                                    swal('Oh no...', 'Você errou!', 'error')
                                                }
                                                t_number++;
                                                posicao_pergunta++;

                                                posicao_opcoes++;
                                                posicao_opcoes_certas++;

                                                let input_radio_checker = $("input[name='opcoes']")
                                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                    input_radio_checker[i].checked = false;
                                                }
                                                perguntas.innerHTML = `${t_number}/10)  ${lista_pergunta[posicao_pergunta]}`;
                                                for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                                    label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                                    input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                                }
                                                if (posicao_pergunta == 10) {
                                                    console.log("termino da lista teórica");
                                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                                    $("#termino_exercicio").show("fast");
                                                    $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                    let current_date = new Date().getTime();
                                                    let current_date_enviar = new Date();

                                                    let situacao_envio;
                                                    if (data_de_entrega != "") {
                                                        if (target_date < current_date) {
                                                            situacao_envio = "atrasado";
                                                        } else {
                                                            situacao_envio = "prazo"
                                                        }
                                                        let nota_enviar = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas,situacao_envio, current_date_enviar);
                                                        let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                        nota_service.inserir(nota_enviar).then(resposta => {
                                                            console.log(resposta);
                                                        })
                                                    } else {
                                                        let nota_enviar = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas);
                                                        let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                        nota_service.inserir(nota_enviar).then(resposta => {
                                                            console.log(resposta);
                                                        })

                                                    }

                                                    clearInterval(tempo);
                                                    clearInterval(tempo2);

                                                    for (let i = 0; i <= posicao_certa - 1; i++) {
                                                        let li = document.createElement("li");
                                                        li.setAttribute('id', 'certas')
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "V";
                                                        button.setAttribute('id', 'perguntas_certas');
                                                        li.innerHTML = lista_certas_usuario[i];
                                                        li.append(button);
                                                        ul_resposta_certa.append(li);

                                                    }
                                                    for (let i = 0; i <= posicao_errada - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "X";
                                                        button.setAttribute('id', 'perguntas_erradas');
                                                        $("#perguntas_erradas").css({
                                                            "background-color": "red",
                                                            "color": "#F5F5F5"
                                                        })
                                                        li.innerHTML = lista_erradas_usuario[i];
                                                        li.append(button);
                                                        ul_resposta_errada.append(li);
                                                    }
                                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                        $("#termino_exercicio").hide("fast");
                                                        $("#area_escolha_lista_teorica").show("fast");
                                                        $("#reposta_certa").empty();
                                                        $("#pergunta_errada").empty();
                                                        $("#perguntas_nao_feitas").empty();
                                                        $("#hora").empty();
                                                        $("#minutos").empty();
                                                        $("#segundos").empty();
                                                        posicao_pergunta = 0;
                                                        posicao_opcoes = 0;
                                                        posicao_opcoes_certas = 0;
                                                        t_number = 1;
                                                        nota = 0;
                                                        hora = 0;
                                                        minutos = 0;
                                                        segundos = 0;
                                                    }
                                                }
                                            } else {
                                                swal('Oh no...', 'Selecione alguma opção', 'error')
                                            }
                                        }
                                        if (tempo_de_termino != "") {
                                            var relogio = [];
                                            var t_hora = document.getElementById("hora");
                                            var t_minutos = document.getElementById("minutos");
                                            var t_segundos = document.getElementById("segundos");
                                            relogio.push(tempo_de_termino.split(":"))
                                            console.log(relogio);
                                            t_hora.innerHTML = (relogio[0][0] > 9) ? ("" + relogio[0][0] + ":") : ("0" + relogio[0][0] + ":");
                                            t_minutos.innerHTML = (relogio[0][1] - 1 > 9) ? ("" + relogio[0][1] - 1 + ":") : ("0" + relogio[0][1] - 1 + ":");
                                            t_segundos.innerHTML = 59;
                                            var hora = relogio[0][0];
                                            var minutos = relogio[0][1] - 1;
                                            var segundos = 59;
                                            var tempo = setInterval(contador, 1000);
                                            var tempo2 = setInterval(contador2, 1000);
                                            if (relogio[0][0] <= 0) {
                                                function contador() {
                                                    console.log("ggg")
                                                    t_minutos.innerHTML = (minutos > 9) ? ("" + minutos + ":") : ("0" + minutos + ":");
                                                    t_segundos.innerHTML = (segundos > 9) ? ("" + segundos) : ("0" + segundos);
                                                    if (segundos > 0) segundos--;
                                                    else if (segundos == 0 && minutos > 0) {
                                                        segundos = 59;
                                                        minutos -= 1;
                                                    } else {
                                                        clearInterval(tempo);
                                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                                        $("#termino_exercicio").show("fast");
                                                        $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                        let ul_resposta_certa = document.getElementById("reposta_certa");
                                                        let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                        let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                                       
                                                        for (let i = 0; i <= posicao_certa - 1; i++) {
                                                            let li = document.createElement("li");
                                                            li.setAttribute('id', 'certas')
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "V";
                                                            button.setAttribute('id', 'perguntas_certas');
                                                            li.innerHTML = lista_certas_usuario[i];
                                                            li.append(button);
                                                            ul_resposta_certa.append(li);

                                                        }
                                                        for (let i = 0; i <= posicao_errada - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "X";
                                                            button.setAttribute('id', 'perguntas_erradas');
                                                            $("#perguntas_erradas").css({
                                                                "background-color": "red",
                                                                "color": "#F5F5F5"
                                                            })
                                                            li.innerHTML = lista_erradas_usuario[i];
                                                            li.append(button);
                                                            ul_resposta_errada.append(li);
                                                        } 
                                                        for(let i = posicao_pergunta; i <= 9; i++){
                                                            console.log(i);
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "?";
                                                            li.innerHTML = lista_pergunta[i];
                                                            lista_perguntas_nao_feitas.push(lista_pergunta[i]);
                                                            li.append(button);
                                                            ul_perguntas_nao_feitas.append(li)
                                                        }
                                                        let situacao_envio = "";
                                                        let current_date = new Date().getTime();
                                                        let current_date_enviar = new Date();
                                                        if (data_de_entrega != "") {
                                                            if (target_date < current_date) {
                                                                situacao_envio = "atrasado";
                                                            } else {
                                                                situacao_envio = "prazo"
                                                            }
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas, situacao_envio, current_date_enviar);
                                                            let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        } else {
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas);
                                                            let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        }

                                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                            $("#termino_exercicio").hide("fast");
                                                            $("#area_escolha_lista_teorica").show("fast");
                                                            $("#reposta_certa").empty();
                                                            $("#pergunta_errada").empty();
                                                            $("#hora").empty();
                                                            $("#minutos").empty();
                                                            $("#segundos").empty();
                                                            $("#perguntas_nao_feitas").empty();
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            nota = 0;
                                                            hora = 0;
                                                            minutos = 0;
                                                            segundos = 0;

                                                        }

                                                    }

                                                }
                                                var tempo = setInterval(contador, 1000);

                                            } else {
                                                function contador2() {
                                                    t_minutos.innerHTML = (minutos > 9) ? ("" + minutos + ":") : ("0" + minutos + ":");
                                                    t_segundos.innerHTML = (segundos > 9) ? ("" + segundos) : ("0" + segundos);
                                                    t_hora.innerHTML = (hora > 9) ? ("" + hora + ":") : ("0" + hora + ":");
                                                    if (segundos > 0) segundos--;
                                                    else if (segundos == 0 && minutos > 0) {
                                                        segundos = 59;
                                                        minutos -= 1;
                                                    } else if (minutos == 0 && hora > 0) {
                                                        minutos = 60;
                                                        hora -= 1;
                                                    } else {
                                                        clearInterval(tempo2);
                                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                                        $("#termino_exercicio").show("fast");
                                                        $("#lugar_nota").text(`Sua nota foi ${nota}`)
                                                        let ul_resposta_certa = document.getElementById("reposta_certa");
                                                        let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                        let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                                        for (let i = 0; i <= posicao_certa - 1; i++) {
                                                            let li = document.createElement("li");
                                                            li.setAttribute('id', 'certas')
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "V";
                                                            button.setAttribute('id', 'perguntas_certas');
                                                            li.innerHTML = lista_certas_usuario[i];
                                                            li.append(button);
                                                            ul_resposta_certa.append(li);

                                                        }
                                                        for (let i = 0; i <= posicao_errada - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "X";
                                                            button.setAttribute('id', 'perguntas_erradas');
                                                            $("#perguntas_erradas").css({
                                                                "background-color": "red",
                                                                "color": "#F5F5F5"
                                                            })
                                                            li.innerHTML = lista_erradas_usuario[i];
                                                            li.append(button);
                                                            ul_resposta_errada.append(li);
                                                        }
                                                          
                                                        for(let i = posicao_pergunta; i <= 9; i++){
                                                            console.log(i);
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "?";
                                                            li.innerHTML = lista_pergunta[i];
                                                            lista_perguntas_nao_feitas.push(lista_pergunta[i]);
                                                            li.append(button);
                                                            ul_perguntas_nao_feitas.append(li)
                                                        }
                                                        let situacao_envio;
                                                        let current_date = new Date().getTime();
                                                        let current_date_enviar = new Date();
                                                        if (data_de_entrega != "") {
                                                            if (target_date < current_date) {
                                                                situacao_envio = "atrasado";
                                                            } else {
                                                                situacao_envio = "prazo"
                                                            }
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas,situacao_envio, current_date_enviar);
                                                            let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        } else {
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario,lista_perguntas_nao_feitas);
                                                            let nota_service = new Nota_Service("http://localhost:3000/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        }
                                                        document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                            $("#termino_exercicio").hide("fast");
                                                            $("#area_escolha_lista_teorica").show("fast");
                                                            $("#reposta_certa").empty();
                                                            $("#pergunta_errada").empty();
                                                            $("#hora").empty();
                                                            $("#minutos").empty();
                                                            $("#segundos").empty();
                                                            $("#perguntas_nao_feitas").empty();
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            hora = 0;
                                                            minutos = 0;
                                                            segundos = 0;

                                                        }
                                                    }

                                                }
                                                var tempo2 = setInterval(contador2, 1000);
                                            }
                                        }
                                    })
                                }
                            })
                        }

                    }
                })
                document.getElementById("voltar_da_area_sala_especifica").onclick = function () {
                    $("#listas_teoricas").empty();
                    $("#area_escolha_lista_teorica").hide("fast");
                    $("#escolha_de_sala").show("fast");
                }
            }
        }
    })
    document.getElementById("voltar_da_area_de_escolha_de_salas").onclick = function () {
        $("#salas_inseridas").empty();
        $("#area_de_escolhas").show("fast");
        $("#comentario").show("fast");
        $("#escolha_de_sala").hide("fast");
    }
}