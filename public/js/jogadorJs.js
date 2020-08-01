let nomeJogador = "Galrod2";
let jogador;
$.ajax({
    type: "GET",
    url: "http://adventure-master.herokuapp.com/api/jogadores/" + nomeJogador,
    success: function(response) {
        $("#nome").text(response.nome);
        $("#vidaAtual").text(response.vida.atual);
        $("#vidaMaximo").text(response.vida.maximo);
        $("#manaAtual").text(response.mana.atual);
        $("#manaMaximo").text(response.mana.maximo);
        $("#sanidade").text(response.sanidade);
        $("#luta").text(response.luta);
        $("#movimento").text(response.movimento);
        $("#primeScorr").text(response.primeSocor);
        $("#inteligencia").text(response.inteligencia);
        $("#sorte").text(response.sorte);
        $("#forca").text(response.forca);
        $("#destreza").text(response.destreza);
        $("#contituicao").text(response.contituicao);
        $("#perspicacia").text(response.perspicacia);
        for (let i = 0; i < response.exposicao.length; i++) {
            const element = response.exposicao[i];
            $("#listExposicao").append(
            "<h2 class=\"left\">"+element.inimigo+": "+element.valor+"</h2>"
            );
        }
    }
});
socket.on("update", getData);

function getData() {

    
    $.ajax({
        type: "GET",
        url: "http://adventure-master.herokuapp.com/api/jogadores/"+nomeJogador,
        success: function (response) {
            jogador = response;
        $("#nome").text(jogador.nome);
        $("#vidaAtual").text(jogador.vida.atual);
        $("#vidaMaximo").text(jogador.vida.maximo);
        $("#manaAtual").text(jogador.mana.atual);
        $("#manaMaximo").text(jogador.mana.maximo);

        }
    });

}

function rolardadinho(){

    $("#resultadodado").text("");
    $.ajax({
        type: "GET",
        url: "http://adventure-master.herokuapp.com/api/dice/"+$("#numlados").val(),
        success: function (response) {

            for (let index = 0; index < response.dice.length; index++) {
                const element = response.dice[index];
                
    var resultado= element.value;
          $("#resultadodado").append(resultado+" - ") ;
            }
   
        }
    });

   }