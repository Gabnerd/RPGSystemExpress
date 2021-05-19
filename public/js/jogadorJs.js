let nomeJogador = prompt("digite o nome do personagem:");
let jogador;
$.ajax({
    type: "GET",
    url: "https://adventure-master.herokuapp.com/api/jogadores/" + nomeJogador,
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
        $("#constituicao").text(response.constituicao);
        $("#perspicacia").text(response.perspicacia);
        $("#moedas").text(response.moedas);
        for (let i = 0; i < response.exposicao.length; i++) {
            const element = response.exposicao[i];
            $("#listExposicao").append(
            "<h2 class=\"left\">"+element.inimigo+": "+element.valor+"</h2>"
            );
        }

        for (let i = 0; i < response.ataques.length; i++) {
            const element = response.ataques[i];
            if(element.Custo == ""){
                element.Custo = "Sem custo";
            }
            $("#ataques").append("<div class=\"card ataque-card border-dark\">"+
            "<div class=\"card-body\">"+
              "<h4 class=\"card-title\">"+ element.nome+"</h4>"+
              "<p class=\"card-text\">Vantagem/Dano: "+element.atributos+ "</p>"+
              "<p class=\"card-text\">Custo: "+element.Custo+"</p>"+
            "</div>"+
          "</div><br>");
        }

        for (let i = 0; i < response.inventario.length; i++) {
            const element = response.inventario[i];
            if(element.atributo == ""){
                element.atributo = "Sem atributo";
            }
            $("#inventario").append("<div class=\"card ataque-card border-dark\">"+
            "<div class=\"card-body\">"+
              "<h4 class=\"card-title\">"+ element.nome+"</h4>"+
              "<p class=\"card-text\"> Vantagem/Dano: "+element.atributo+"</p>"+
            "</div>"+
          "</div><br>");
        }
    }
});
socket.on("update", getData);

function getData() {

    $("#listExposicao").empty();
    $("#listExposicao").empty();
    $("#listExposicao").empty();
    $("#ataques").empty();
    $("#ataques").empty();
    $("#ataques").empty();
    $("#inventario").empty();
    $("#inventario").empty();
    $("#inventario").empty();
    $.ajax({
        type: "GET",
        url: "https://adventure-master.herokuapp.com/api/jogadores/"+nomeJogador,
        success: function (response) {
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
            $("#constituicao").text(response.constituicao);
            $("#perspicacia").text(response.perspicacia);
            $("#moedas").text(response.moedas);
            for (let i = 0; i < response.exposicao.length; i++) {
                const element = response.exposicao[i];
                $("#listExposicao").append(
                "<h2 class=\"left\">"+element.inimigo+": "+element.valor+"</h2>"
                );
            }
    
            for (let i = 0; i < response.ataques.length; i++) {
                const element = response.ataques[i];
                if(element.Custo == ""){
                    element.Custo = "Sem custo";
                }
                $("#ataques").append("<div class=\"card ataque-card border-dark\">"+
                "<div class=\"card-body\">"+
                  "<h4 class=\"card-title\">"+ element.nome+"</h4>"+
                  "<p class=\"card-text\">Vantagem/Dano: "+element.atributos+ "</p>"+
                  "<p class=\"card-text\">Custo: "+element.Custo+"</p>"+
                "</div>"+
              "</div><br>");
            }
    
            for (let i = 0; i < response.inventario.length; i++) {
                const element = response.inventario[i];
                if(element.atributo == ""){
                    element.atributo = "Sem atributo";
                }
                $("#inventario").append("<div class=\"card ataque-card border-dark\">"+
                "<div class=\"card-body\">"+
                  "<h4 class=\"card-title\">"+ element.nome+"</h4>"+
                  "<p class=\"card-text\"> Vantagem/Dano: "+element.atributo+"</p>"+
                "</div>"+
              "</div><br>");
            }
        }
    });

}

function rolardadinho(){

    $("#resultadodado").text("");
    $.ajax({
        type: "GET",
        url: "https://adventure-master.herokuapp.com/api/dice/"+$("#numlados").val(),
        success: function (response) {

            for (let index = 0; index < response.dice.length; index++) {
                const element = response.dice[index];
                
    var resultado= element.value;
          $("#resultadodado").append(resultado+" - ") ;
            }
   
        }
    });

   }