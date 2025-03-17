let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }

    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 nombres para realizar el sorteo.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>Resultado del sorteo </h2><p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
