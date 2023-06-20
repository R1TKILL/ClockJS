const div_time = document.getElementById("Timer")
const btnPause = document.getElementById("btnPause")
const btnPlay = document.getElementById("btnPlay")

function configTime(){
    const data = new Date()

    /*Separando por Hora, minuto e segundo.*/ 
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    /*Tratamento para ficar em duas casas.*/
    horas = (horas < 10)?"0"+horas:horas
    minutos = (minutos < 10)?"0"+minutos:minutos
    segundos = (segundos < 10)?"0"+segundos:segundos

    /*Adicionando na div*/
    const horarioCompleto = horas+":"+minutos+":"+segundos
    div_time.innerHTML=horarioCompleto
}
/*Chamando a função a cada um segundo.*/
let reloadTime

btnPlay.addEventListener("click", ()=>{reloadTime = setInterval(configTime,1000)})
btnPause.addEventListener("click", ()=>{clearInterval(reloadTime)})





