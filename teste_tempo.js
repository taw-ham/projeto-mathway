class ATUALIZAR {
    constructor(nota) {
        this.nota = nota;
    }
}
class ATUALIZAR_SERVICE {
    constructor(url) {
        this.url = url;
    }
    atualizar(nota) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(nota),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json()
        )
    }
}
class LISTA_TEORICA {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
let data = new Date();
console.log(data)
/*function jjj(){
let data_atual = new Date();
let data_passada = new Date('2020-06-03');
const diff = Math.abs(data_atual.getTime() - data_passada.getTime());
let diferenca_data = data_atual.getTime() - data_passada.getTime();
let ano = 1000*60*60*24*365
let anos = parseInt(diff/ano);
let dias = 1000*60*60*24
let days = parseInt(diferenca_data/dias)
console.log(anos,days)



let anos =  (diferenca_data / 31557600);
let resto = diferenca_data % 31557600;
let dias = parseInt(resto / 86400 ); 
resto  =  resto % 86400;
let hours = parseInt(resto / 3600);
resto = resto % 3600;
let minutes = parseInt(resto / 60);
resto = resto % 60
let seconds = parseInt(resto / 60);
console.log(anos,dias,minutes,seconds)
document.getElementById("years").innerHTML = anos;
document.getElementById("days").innerHTML = dias;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;




let yars =  Math.ceil(diferenca_data / (1000 * 60 * 60 *24 * 365));
let days = Math.ceil(diferenca_data / (1000 * 60 * 60 *24));
let minutes = Math.ceil(diferenca_data / (1000 * 60 * 60));
console.log(yars,days,minutes)

}
let tempo99= setInterval(jjj,1000);
*/

/*const diff = Math.abs(data_passada.getTime() - data_atual.getTime());
console.log(diff);
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
console.log(days)
var posicao = 0
*/
$("#campo_hora").hide("fast");
document.getElementById("enviar").onclick = function () {
    let nota = document.getElementById("nota").value;
    /* let atualizar2 = new ATUALIZAR(nota)
     let atualizar_service = new ATUALIZAR_SERVICE("http://localhost:3000/notas/5");
     atualizar_service.atualizar(atualizar2).then(resposta =>{
         console.log(resposta);
         posicao ++;
     })
     */
    posicao++;
}
let listateorica = new LISTA_TEORICA("http://localhost:3000/lista_teoricas")
listateorica.listar().then(resposta => {
    for (let i = 0; i <= resposta.length - 1; i++) {
        var data = resposta[i].Data_de_entrega;
        if(data != ""){
        console.log(data)
        var target_date = new Date(data).getTime();
        var dias, horas, minutos, segundos;
        function DATA_ENTREGA() {
            var current_date = new Date().getTime();
            if (current_date > target_date) {
                let atrasado = Math.abs((target_date - current_date) / 1000);
                dias = parseInt(atrasado / 86400);
                atrasado = atrasado % 86400;

                horas = parseInt(atrasado / 3600);
                atrasado = atrasado % 3600;

                minutos = parseInt(atrasado / 60);
                segundos = parseInt(atrasado % 60);
                document.getElementById('days').innerHTML = dias;
                document.getElementById('hours').innerHTML = horas;
                document.getElementById('minutes').innerHTML = minutos;
                document.getElementById('seconds').innerHTML = segundos + " já FAZEM DA DATA DE ENTREGA";

            } else {
                let prazo = (target_date - current_date) / 1000;
                dias = parseInt(prazo / 86400);
                prazo = prazo % 86400;

                horas = parseInt(prazo / 3600);
                prazo = prazo % 3600;

                minutos = parseInt(prazo / 60);
                segundos = parseInt(prazo % 60);
                document.getElementById('days').innerHTML = dias;
                document.getElementById('hours').innerHTML = horas;
                document.getElementById('minutes').innerHTML = minutos;
                document.getElementById('seconds').innerHTML = segundos + "";

            }
        }
        let data_entrega = setInterval(DATA_ENTREGA, 1000);
    }
    }
})


/*document.getElementById("ver_hora").onclick = function () {
    let listateorica = new LISTA_TEORICA("http://localhost:3000/lista_teoricas")
    listateorica.listar().then(resposta => {
        for (let i = 0; i <= resposta.length - 1; i++) {
            if (resposta[i].Data_de_entrega != "") {
                let data = resposta[i].Data_de_entrega
                var target_date = new Date("agosto 8, 2021").getTime();
                var dias, horas2, minutos2, segundos2;

                function DATA_ENTREGA() {
                    var current_date = new Date().getTime();
                    if(target_date < current_date ){  
                        let segundos_f = (target_date - current_date ) / 1000;
                    console.log(segundos_f)

                    }
                    
                    else  {
                        console.log("ddd")
                        let segundos_f = (target_date - current_date) / 1000;
                        console.log(segundos_f)
                    } else {
                        dias = parseInt(segundos_f / 86400);
                        segundos_f = segundos_f % 86400;
                        horas2 = parseInt(segundos_f / 3600);
                        segundos_f = segundos_f % 3600;
                        minutos2 = parseInt(segundos_f / 60);
                        segundos2 = parseInt(segundos_f % 60);
                        document.getElementById('days').innerHTML = dias + " days";
                        document.getElementById('hours').innerHTML = horas2 + " hours";
                        document.getElementById('minutes').innerHTML = minutos2 + " minutes";
                        document.getElementById('seconds').innerHTML = segundos2 + " seconds";
                    }
                    
                }
                var data_entrega = setInterval(DATA_ENTREGA, 1000);
            }


        }

    })*/
$("#campo_hora").show("fast");
var relogio = [];
var t_hora = document.getElementById("hora");
var t_minutos = document.getElementById("minutos");
var t_segundos = document.getElementById("segundos");
let resposta = "1:1:00"
relogio.push(resposta.split(":"))
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
            console.log(posicao)
            clearInterval(tempo);
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
        }

    }
    var tempo2 = setInterval(contador2, 1000);
}

document.getElementById("voltar").onclick = function () {
    $("#campo_hora").hide("fast");
    clearInterval(tempo);
    clearInterval(tempo2);
    clearInterval(data_entrega)
    $("#hora,#minutos,#segundos,#days,#hours,#minutes,#seconds").empty();
}



/*function CONTADOR_TEMPO(TEMPO_INICIAL) {
    relogio.push(TEMPO_INICIAL.split(":"));
    t_hora.innerHTML = (relogio[0][0] > 9) ? ("" + relogio[0][0] + ":") : ("0" + relogio[0][0] + ":");
    t_minutos.innerHTML = (relogio[0][1] -1 > 9) ? ("" + relogio[0][1]-1 + ":") : ("0" + relogio[0][1]-1 + ":");
    t_segundos.innerHTML = 59;
    var hora = relogio[0][0];
    var minutos = relogio[0][1] - 1;
    var segundos = 59;
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
                console.log(posicao)
                clearInterval(tempo);
            }
        }
        var tempo = setInterval(contador, 1000)
    }else{
        function contador2(){
            t_minutos.innerHTML = (minutos > 9) ? ("" + minutos + ":") : ("0" + minutos + ":");
            t_segundos.innerHTML = (segundos > 9) ? ("" + segundos) : ("0" + segundos);
            t_hora.innerHTML = (hora > 9) ? ("" + hora + ":") : ("0" + hora + ":");
            if (segundos > 0) segundos--;
            else if (segundos == 0 && minutos > 0) {
                segundos = 59;
                minutos -= 1;
            }
            else if(minutos == 0 && hora > 0){
                minutos = 60;
                hora -= 1;
            }else{
                clearInterval(tempo2);
            }

        }
        var tempo2 = setInterval(contador2,1000)
    }
}
CONTADOR_TEMPO("1:1:00")
*/