let amigos = [];


function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const campoEntrada = document.getElementById('nombreAmigo');
    const nombre = campoEntrada.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
      }
    
    
    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    campoEntrada.value = '';

    mostrarAmigos();
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el array y crear elementos
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    // Obtener el elemento donde mostraremos el resultado
    const elementoResultado = document.getElementById('resultado');
    
    // Validar que haya amigos disponibles
    if (amigos.length <= 1) {
        elementoResultado.innerHTML = 'No hay suficientes amigos en la lista para sortear';
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    elementoResultado.innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;
}