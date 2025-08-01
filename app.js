let amigos = [];//Variable para almacenar los nombres de amigos

// Función para validar que solo haya letras sin espacios ni números
function NombreValido(nombre) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombre);
}

// Agregar un nombre al arreglo de amigos
function agregarAmigo() {
  const input = document.getElementById("amigo"); // Obtener el valor del campo de entrada
  const nombre = input.value;

  // Validar que no esté vacío
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar formato (solo letras, sin espacios ni números)
  if (!NombreValido(nombre)) {
    alert("El nombre solo debe contener letras sin espacios ni números.");
    return;
  }

  // Verificar si ya está en la lista
  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue añadido.");
    return;
  }

  // Agregar al arreglo y limpiar el input
  amigos.push(nombre);
  input.value = "";
  mostrarAmigosEnLista();
}

//Actualizar la lista de amigos 
function mostrarAmigosEnLista() {
  const lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
  lista.innerHTML = ""; // Limpiar la lista existente

  for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo de amigos
    const amigo = amigos[i];
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega al menos uno.");
    resultado.innerHTML = "";
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

