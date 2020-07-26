$.ajax({
    type: "GET",
    url: "http://localhost:3000/api/jogadores",
    success: function(response) {
        for (let i = 0; i < 2; i++) {
            let jogador = response['jogador' + (i + 1)];
            $(".nav-tabs").append("<li class=\"nav-item\" role=\"presentation\">" +
                "<a class=\"nav-link\" id=\"home-tab\"data-toggle=\"tab\" href = \"#jogador" + jogador.id + "\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\"> " + jogador.nome + " </a>" +
                "</li>");
            $("#jogadores").append("<div class=\"border rounded playerPanel tab-pane fade\" role=\"tabpanel\" aria-labelledby=\"jogador" + jogador.id + "-tab\" id = \"jogador" + jogador.id + "\"> " +
                "<h1>Nome: <span id=\"nome" + jogador.id + "\">" + jogador.nome + "</span></h1>" +
                "<div class=\"row\">" +
                "<div class=\"col-md-6\">" +
                "<p>Vida: <input  onChange=\"sendUpdate()\" id=\"vidaAtual" + jogador.id + "\" type=\"text\" value=\"" + jogador.vida.atual + "\" size=\"1\">/<input onChange=\"sendUpdate()\" id=\"vidaMaximo" + jogador.id + "\" type=\"text\" value=\"" + jogador.vida.maximo + "\" size=\"1\"> - Mana: <input onChange=\"sendUpdate()\" id=\"manaAtual" + jogador.id + "\" type=\"text\" value=\"" + jogador.mana.atual + "\" size=\"1\">/<input onChange=\"sendUpdate()\" id=\"manaMaximo" + jogador.id + "\" type=\"text\" value=\"" + jogador.mana.maximo + "\" size=\"1\"> </p>" +
                "<p>Movimento: <input onChange=\"sendUpdate()\" id=\"movimento" + jogador.id + "\"  type=\"text\" value=\"" + jogador.movimento + "\" size=\"1\"> </p>" +
                "<p>Primeiros Socorros: <input onChange=\"sendUpdate()\" id=\"primeSocor" + jogador.id + "\" type=\"text\" value=\"" + jogador.primeSocor + "\" size=\"1\"></p>" +
                "<p>Sanidade: <input onChange=\"sendUpdate()\" id=\"sanidade" + jogador.id + "\" type=\"text\" value=\"" + jogador.sanidade + "\" size=\"1\"></p>" +
                "<p>Exposição: <input onChange=\"sendUpdate()\" id=\"exposicao" + jogador.id + "\" type=\"text\" value=\"" + jogador.exposicao + "\" size=\"1\"></p>" +
                "<p>Carisma: <input onChange=\"sendUpdate()\" id=\"carisma" + jogador.id + "\" type=\"text\" value=\"" + jogador.carisma + "\" size=\"1\"></p>" +
                "</div>" +
                "<div class=\"col-md-6\">" +
                "<p>Luta: <input onChange=\"sendUpdate()\" id=\"luta" + jogador.id + "\" type=\"text\" value=\"" + jogador.luta + "\" size=\"1\"></p>" +
                "<p>Força: <input onChange=\"sendUpdate()\" id=\"forca" + jogador.id + "\" type=\"text\" value=\"" + jogador.forca + "\" size=\"1\"></p>" +
                "<p>Destreza: <input onChange=\"sendUpdate()\" id=\"destreza" + jogador.id + "\" type=\"text\" value=\"" + jogador.destreza + "\" size=\"1\"></p>" +
                "<p>Constituição: <input onChange=\"sendUpdate()\" id=\"constituicao" + jogador.id + "\" type=\"text\" value=\"" + jogador.constituicao + "\" size=\"1\"></p>" +
                "<p>Inteligência: <input onChange=\"sendUpdate()\" id=\"inteligencia" + jogador.id + "\" type=\"text\" value=\"" + jogador.inteligencia + "\" size=\"1\"></p>" +
                "<p>Perspicácia: <input onChange=\"sendUpdate()\" id=\"perspicacia" + jogador.id + "\" type=\"text\" value=\"" + jogador.perspicacia + "\" size=\"1\"></p>" +
                "</div>" +
                "</div>" +
                "<div class=\"border rounded adicionaveis\">" +
                "<p>Level: <input onChange=\"sendUpdate()\" id=\"level" + jogador.id + "\" type=\"text\" value=\"" + jogador.level + "\" size=\"1\"></p>" +
                "<div id=\"ataques" + jogador.id + "\">" +
                "<p>Ataques: </p>" +
                "</div>" +
                "<p>Moedas <input onChange=\"sendUpdate()\" id=\"moedas" + jogador.id + "\" type=\"text\" value=\"" + jogador.moedas + "\" size=\"1\"></p>" +
                "<div>" +
                "<p>inventario: </p>" +
                "<ul id=\"inventario" + jogador.id + "\">" +
                "</ul>" +
                "</div>" +
                "</div>" +
                "</div>");
            for (let i = 0; i < jogador.ataques.length; i++) {
                let ataque = jogador.ataques[i];
                $("#ataques" + jogador.id).append("<ul>" +
                    "<li>" +
                    "<div>" +
                    "<p class=\"ataque" + jogador.id + "\"><span class=\"ataqueNome" + jogador.id + "\">" + ataque.nome + "</span>, <span class=\"ataqueAtributos" + jogador.id + "\">" + ataque.atributos + "</span>." +
                    "</div>" +
                    "</li>" +
                    "</ul>");
            }
            for (let i = 0; i < jogador.inventario.length; i++) {
                let inventario = jogador.inventario[i];
                $("#inventario" + jogador.id).append(
                    "<li>" +
                    "<div>" +
                    "<p class=\"inventarioItem" + jogador.id + "\"><span class=\"inventarioNome" + jogador.id + "\">" + inventario.nome + "</span>, " + inventario.atributo + "." +
                    "</div>" +
                    "</li>"
                );
            }
        }
    }
});

function sendUpdate() {
    var ataques = [];
    var inventario = [];
    for (let i = 1; i <= 2; i++) {
        var array1 = $(".ataque" + i).text().split(".");
        for (let j = 0; j < (array1.length - 1); j++) {
            const element = array1[j];
            var array2 = element.split(", ");
            ataques[j] = {
                nome: array2[0],
                atributos: array2[1]
            }
        }
        var array2 = $(".inventarioItem" + i).text().split(".");
        for (let j = 0; j < (array2.length - 1); j++) {
            const element = array2[j];
            var array3 = element.split(", ");
            inventario[j] = {
                nome: array3[0],
                atributo: array3[1]
            }
        }
        var jogador = {
            id: i,
            nome: $("#nome" + i).text(),
            vida: {
                maximo: parseInt($("#vidaMaximo" + i).val()),
                atual: parseInt($("#vidaAtual" + i).val())
            },
            mana: {
                maximo: parseInt($("#manaMaximo" + i).val()),
                atual: parseInt($("#manaAtual" + i).val())
            },
            movimento: parseInt($("#movimento" + i).val()),
            primeSocor: parseInt($("#primeSocor" + i).val()),
            sanidade: parseInt($("#sanidade" + i).val()),
            exposicao: parseInt($("#exposicao" + i).val()),
            luta: parseInt($("#luta" + i).val()),
            forca: parseInt($("#forca" + i).val()),
            destreza: parseInt($("#destreza" + i).val()),
            constituicao: parseInt($("#constituicao" + i).val()),
            inteligencia: parseInt($("#inteligencia" + i).val()),
            perspicacia: parseInt($("#perspicacia" + i).val()),
            carisma: parseInt($("#carisma" + i).val()),
            level: parseInt($("#level" + i).val()),
            ataques: ataques,
            moedas: parseInt($("#moedas" + i).val()),
            inventario: inventario
        };
        console.log(jogador);
        $.ajax({
            type: "PUT",
            url: "http://localhost:3000/api/jogadores/" + i,
            data: JSON.stringify(jogador),
            dataType: "json",
            contentType: "application/json",
            success: function(response) {

            }
        });
        socket.emit('update', jogador);
    }
}

function salvar() {
    var jogador = {
        id: i,
        nome: $("#nome" + i).text(),
        vida: {
            maximo: parseInt($("#vidaMaximo" + i).val()),
            atual: parseInt($("#vidaAtual" + i).val())
        },
        mana: {
            maximo: parseInt($("#manaMaximo" + i).val()),
            atual: parseInt($("#manaAtual" + i).val())
        },
        movimento: parseInt($("#movimento" + i).val()),
        primeSocor: parseInt($("#primeSocor" + i).val()),
        sanidade: parseInt($("#sanidade" + i).val()),
        exposicao: parseInt($("#exposicao" + i).val()),
        luta: parseInt($("#luta" + i).val()),
        forca: parseInt($("#forca" + i).val()),
        destreza: parseInt($("#destreza" + i).val()),
        constituicao: parseInt($("#constituicao" + i).val()),
        inteligencia: parseInt($("#inteligencia" + i).val()),
        perspicacia: parseInt($("#perspicacia" + i).val()),
        carisma: parseInt($("#carisma" + i).val()),
        level: parseInt($("#level" + i).val()),
        ataques: ataques,
        moedas: parseInt($("#moedas" + i).val()),
        inventario: inventario
    };
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/api/jogadores/" + i,
        data: JSON.stringify(jogador),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {

        }
    });
}