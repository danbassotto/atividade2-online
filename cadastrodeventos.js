// Variáveis para cadastro de eventos
let IdadeMinima = 18
if (IdadeMinima >= 18) {
    console.log ("Informe a quantidade de participantes")
} else {
    console.log ("Não é possível cadastrar eventos. É necessário ter pelo menos 18 anos")
}
// Quantidade de participantes e palestrantes no evento
    let QtdParticipantes = 90
    if (QtdParticipantes >100) {
       console.log ("Não será possível prosseguir com o cadastro do evento, pois o número de participantes e palestrantes excede o limite de 100 pessoas")
    } else { 
       console.log ("Informe a data do evento") 
    }

//Data do evento
    let Hoje = new Date() .toDateString()
    let DataEvento = ('10/01/2022') .toDateString
         if (DataEvento < Hoje) {
            console.log (`Não é possível prosseguir com o cadastro do evento, pois a data antescede o dia de${Hoje}`)
        } else {
            console.log (`Evento cadastrado no dia ${DataEvento}`) 
        }
//Evento Cadastrado

        
    