let nomeJogador = "Galrod2";
let jogador;
$.ajax({
    type: "GET",
    url: "http://localhost:3000/api/jogadores/" + nomeJogador,
    success: function(response) {
        $("#nome").text(response.nome);
        $("#vidaAtual").text(response.vida.atual);
        $("#vidaMaximo").text(response.vida.maximo);
        $("#manaAtual").text(response.mana.atual);
        $("#manaMaximo").text(response.mana.maximo);
    }
});
socket.on("update", getData);

function getData(data) {

    if (nomeJogador == data.nome) {
        jogador = data;
        $("#nome").text(jogador.nome);
        $("#vidaAtual").text(jogador.vida.atual);
        $("#vidaMaximo").text(jogador.vida.maximo);
        $("#manaAtual").text(jogador.mana.atual);
        $("#manaMaximo").text(jogador.mana.maximo);
    }


}

function rolardadinho(){

    $("#resultadodado").text("");
    $.ajax({
        type: "GET",
        url: "http://roll.diceapi.com/json/"+$("#numlados").val(),
        success: function (response) {

            for (let index = 0; index < response.dice.length; index++) {
                const element = response.dice[index];
                
    var resultado= element.value;
          $("#resultadodado").append(resultado+" - ") ;
            }
   
        }
    });

   }