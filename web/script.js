const url = "http://localhost:3000";

const quartos = [];

let quartoAtual = null;

carregarQuartos();

function carregarQuartos() {
    fetch(url + "/quarto/listar")
        .then(res => res.json())
        .then(data => {
            quartos.length = 0;
            quartos.push(...data);

            listarQuartos();
        })
        .catch(() => alert("Erro ao conectar com a API"));
}

function listarQuartos() {

    const main = document.querySelector("main");

    main.innerHTML = "";

    quartos.forEach(quarto => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>Quarto ${quarto.numero}</h3>

            <p><b>Tipo:</b> ${quarto.tipo}</p>

            <div class="botoes">
                <button onclick="abrirReservas(${quarto.id})">
                    Ver Reservas
                </button>

                <button class="btnExcluir"
                    onclick="excluirQuarto(${quarto.id})">
                    Excluir
                </button>
            </div>
        `;

        main.appendChild(card);

    });

}

document.querySelector("#formQuarto")
.addEventListener("submit", function(e){

    e.preventDefault();

    const novoQuarto = {
        numero: numero.value,
        tipo: tipo.value
    };

    fetch(url + "/quarto/cadastrar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(novoQuarto)

    })

    .then(res => {
        if(!res.ok) throw new Error();
        return res.json();
    })

    .then(() => {

        alert("Quarto cadastrado com sucesso!");

        formQuarto.reset();

        modalQuarto.classList.add("oculto");

        carregarQuartos();

    })

    .catch(() => alert("Erro ao cadastrar quarto"));

});

function excluirQuarto(id){

    if(!confirm("Deseja excluir este quarto?"))
        return;

    fetch(url + "/quarto/excluir/" + id, {

        method: "DELETE"

    })

    .then(() => {

        alert("Quarto excluído com sucesso!");

        carregarQuartos();

    })

    .catch(() => alert("Erro ao excluir quarto"));

}

function abrirReservas(id){

    fetch(url + "/quarto/buscar/" + id)

    .then(res => res.json())

    .then(quarto => {

        quartoAtual = quarto;

        tituloQuarto.innerHTML =
            "Quarto " + quarto.numero;

        infoQuarto.innerHTML =
            "Tipo: " + quarto.tipo;

        listarReservas(quarto.reservas || []);

        modalReservas.classList.remove("oculto");

    })

    .catch(() => alert("Erro ao carregar reservas"));

}

function listarReservas(reservas){

    listaReservas.innerHTML = "";

    reservas.forEach(reserva => {

        listaReservas.innerHTML += `
            <tr>

                <td>${reserva.id}</td>

                <td>${reserva.hospede}</td>

                <td>${reserva.data_entrada.substring(0,10)}</td>

                <td>${reserva.data_saida.substring(0,10)}</td>

                <td>

                    <button
                        class="btnExcluir"
                        onclick="excluirReserva(${reserva.id})">

                        Excluir

                    </button>

                </td>

            </tr>
        `;

    });

}

function abrirCadastroReserva(){

    modalReserva.classList.remove("oculto");

}

document.querySelector("#formReserva")
.addEventListener("submit", function(e){

    e.preventDefault();

    const novaReserva = {

        hospede: hospede.value,

        data_entrada: dataEntrada.value,

        data_saida: dataSaida.value,

        quartoId: quartoAtual.id

    };

    fetch(url + "/reserva/cadastrar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(novaReserva)

    })

    .then(res => {
        if(!res.ok) throw new Error();
        return res.json();
    })

    .then(() => {

        alert("Reserva cadastrada com sucesso!");

        formReserva.reset();

        modalReserva.classList.add("oculto");

        abrirReservas(quartoAtual.id);

    })

    .catch(() => alert("Erro ao cadastrar reserva"));

});

function excluirReserva(id){

    if(!confirm("Deseja excluir esta reserva?"))
        return;

    fetch(url + "/reserva/excluir/" + id, {

        method: "DELETE"

    })

    .then(() => {

        alert("Reserva excluída com sucesso!");

        abrirReservas(quartoAtual.id);

    })

    .catch(() => alert("Erro ao excluir reserva"));

}