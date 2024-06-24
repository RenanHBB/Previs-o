function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao");
    document.querySelector(".mapa").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".umidade").innerHTML = dados.main.humidity
        + "%";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;

}
