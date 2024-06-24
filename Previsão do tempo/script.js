let chave = "cebcd482eda57fa9a6714c1c2ba91885"

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
