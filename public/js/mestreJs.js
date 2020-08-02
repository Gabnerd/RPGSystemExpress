var exposicoes = [];
var itemConters = 0;
var ataqueConters = 0;
var selectExposicao = 0;
$.ajax({
    type: "GET",
    url: "https://adventure-master.herokuapp.com/api/jogadores",
    success: function(response) {
        for (let i = 0; i < 4; i++) {
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
                "<p>Exposição: <select id=\"exposicao" + jogador.id + "\"></select> :  <input id=\"valorExposicao" + jogador.id + "\" size=\"1\"> <button id=\"removeExposicao" + jogador.id + "\" class=\"btn btn-outline-secondary btn-remove lineItem\">-</button> </p>" +
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
                "<div>" +
                "<p>Ataques: </p>" +
                "<ul id=\"ataques" + jogador.id + "\">" +
                "</ul>" +
                "<p>Nome: <input id=\"newAtaque" + jogador.id + "\">, Atributo: <input id=\"newAtaqueAtributo" + jogador.id + "\"> <button id=\"ataqueAdd" + jogador.id + "\" class=\"btn btn-outline-secondary btn-add\">+</button></p>" +
                "</div>" +
                "<p>Moedas <input onChange=\"sendUpdate()\" id=\"moedas" + jogador.id + "\" type=\"text\" value=\"" + jogador.moedas + "\" size=\"1\"></p>" +
                "<div>" +
                "<p>inventario: </p>" +
                "<ul id=\"inventario" + jogador.id + "\">" +
                "</ul>" +
                "<p>Nome: <input id=\"newItem" + jogador.id + "\">, Atributo: <input id=\"newItemAtributo" + jogador.id + "\"> <button id=\"itemAdd" + jogador.id + "\" class=\"btn btn-outline-secondary btn-add\">+</button></p>" +
                "</div>" +
                "</div>" +
                "</div>");
            for (let i = 0; i < jogador.ataques.length; i++) {
                let ataque = jogador.ataques[i];
                $("#ataques" + jogador.id).append(
                    "<li id=\"ataque" + ataqueConters + "\">" +
                    "<p class=\"ataque" + jogador.id + " lineItem\">" + ataque.nome + ", " + ataque.atributos + ".</p> <button onClick=\"removeAtaque(" + jogador.id + "," + ataqueConters + ")\" class=\"btn btn-outline-secondary btn-remove lineItem\">-</button>" +
                    "</li>");
                ataqueConters++;
            }
            for (let i = 0; i < jogador.inventario.length; i++) {
                let inventario = jogador.inventario[i];
                $("#inventario" + jogador.id).append(
                    "<li id=\"item" + itemConters + "\">" +
                    "<p class=\"inventarioItem" + jogador.id + " lineItem\">" + inventario.nome + ", " + inventario.atributo + ".</p> <button onClick=\"removeItem(" + jogador.id + "," + itemConters + ");sendUpdate();\" class=\"btn btn-outline-secondary btn-remove lineItem\">-</button>" +
                    "</li>"
                );
                itemConters++;
            }
            $("#ataqueAdd" + jogador.id).click(function() {
                $("#ataques" + jogador.id).append(
                    "<li id=\"ataque" + ataqueConters + "\">" +
                    "<p class=\"ataque" + jogador.id + " lineItem\">" + $("#newAtaque" + jogador.id).val() + ", " + $("#newAtaqueAtributo" + jogador.id).val() + ".</p> <button onClick=\"removeAtaque(" + jogador.id + "," + ataqueConters + ")\" class=\"btn btn-outline-secondary btn-remove lineItem\">-</button>" +
                    "</li>");
                sendUpdate();
                ataqueConters++;
            });
            $("#itemAdd" + jogador.id).click(function() {
                $("#inventario" + jogador.id).append(
                    "<li id=\"item" + itemConters + "\">" +
                    "<p class=\"inventarioItem" + jogador.id + " lineItem\">" + $("#newItem" + jogador.id).val() + ", " + $("#newItemAtributo" + jogador.id).val() + ".</p> <button onClick=\"removeItem(" + jogador.id + "," + itemConters + ");sendUpdate();\" class=\"btn btn-outline-secondary btn-remove lineItem\">-</button>" +
                    "</li>"
                );
                sendUpdate();
                itemConters++;
            });
            var a = jogador.exposicao.length;
            exposicoes.push(jogador.exposicao);
            for (let i = 0; i < a; i++) {
                const element = jogador.exposicao[i];
                $("#exposicao" + jogador.id).append("<option value=\"" + i + "\">" + element.inimigo + "</option>");
                if (i == (a - 1)) {
                    selectExposicao = i;
                }
            }
            $("#exposicao" + jogador.id).append("<option value=\"" + (++selectExposicao) + "\">adicionar inimigo</option>");
            getExposicao(jogador.exposicao, parseInt($("#exposicao" + jogador.id).val()), jogador.id);
            $("#exposicao" + jogador.id).change(function() {
                var a = jogador.exposicao.length;
                if (parseInt($("#exposicao" + jogador.id).val()) == a) {
                    let exposicaoLocal = { inimigo: "", valor: 1 };
                    exposicaoLocal.inimigo = prompt("Adicionar nome do inimigo");
                    jogador.exposicao.push(exposicaoLocal);
                    exposicoes.push(exposicaoLocal);
                    $("#exposicao" + jogador.id).empty();
                    for (let i = 0; i < a; i++) {
                        const element = jogador.exposicao[i];
                        $("#exposicao" + jogador.id).append("<option value=\"" + i + "\">" + element.inimigo + "</option>");
                        if (i == (a - 1)) {
                            selectExposicao = i;
                        }
                    }
                    $("#exposicao" + jogador.id).append("<option value=\"" + (++selectExposicao) + "\">adicionar inimigo</option>");
                    $("#exposicao" + jogador.id).val(0);
                    sendUpdate();
                } else {
                    getExposicao(jogador.exposicao, parseInt($("#exposicao" + jogador.id).val()), jogador.id);
                }
            });
            $("#valorExposicao" + jogador.id).change(function() {
                valorExposicao = parseInt($("#valorExposicao" + jogador.id).val());
                exposicoes[i][parseInt($("#exposicao" + jogador.id).val())].valor = valorExposicao;
                sendUpdate();
            });

            $("#removeExposicao" + jogador.id).click(function(param) {
                var index = parseInt($("#exposicao" + jogador.id).val());
                jogador.exposicao.splice(index, 1);
                var a = jogador.exposicao.length;
                $("#exposicao" + jogador.id).empty();
                for (let i = 0; i < a; i++) {
                    const element = jogador.exposicao[i];
                    $("#exposicao" + jogador.id).append("<option value=\"" + i + "\">" + element.inimigo + "</option>");
                    if (i == (a - 1)) {
                        selectExposicao = i;
                    }
                }
                $("#exposicao" + jogador.id).append("<option value=\"" + (++selectExposicao) + "\">adicionar inimigo</option>");
                $("#exposicao" + jogador.id).val(0);
                getExposicao(jogador.exposicao, parseInt($("#exposicao" + jogador.id).val()), jogador.id);
                sendUpdate();
            });
        }
    }
});

function removeItem(idJogador, itemNum) {
    $("#inventario" + idJogador + " #item" + itemNum).remove();
    itemConters--;
}

function removeAtaque(idJogador, ataqueNum) {
    $("#ataques" + idJogador + " #ataque" + ataqueNum).remove();
    sendUpdate();
}


function sendUpdate() {
    sleep(200);
    var ataques = [];
    var inventario = [];
    for (let i = 1; i <= 4; i++) {
        var array1 = $(".ataque" + i).text().split(".");
        for (let j = 0; j < (array1.length - 1); j++) {
            const element = array1[j];
            var array2 = element.split(", ");
            ataques[j] = {
                nome: array2[0],
                atributos: array2[1]
            }
        }
        var array4 = $(".inventarioItem" + i).text().split(".");
        for (let j = 0; j < (array4.length - 1); j++) {
            const element = array4[j];
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
            exposicao: exposicoes[i - 1],
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
        console.log(inventario);
    console.log(jogador);
        $.ajax({
            type: "PUT",
            url: "https://adventure-master.herokuapp.com/api/jogadores/" + i,
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
        url: "https://adventure-master.herokuapp.com/api/jogadores/" + i,
        data: JSON.stringify(jogador),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {

        }
    });
    socket.emit('update', jogador);
};

function getExposicao(exposicao, index, idJogador) {
    $("#valorExposicao" + idJogador).val(exposicao[index].valor);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }