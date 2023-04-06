// Array con las líneas de código a mostrar
const codeLines = [
    "Initializing system...",
    "Loading drivers...",
    "Loading modules...",
    "Establishing network connection...",
    "Starting processes...",
    "System ready!"
  ];
  
  // Variables para controlar el intervalo de tiempo entre las líneas de código
  let currentIndex = 0;
  let intervalId;
  
  // Función para agregar una línea de código al elemento HTML y mostrarla de forma animada
  function addCodeLine() {
    // Obtener el elemento HTML donde se mostrará el código
    const codeArea = document.getElementById("code-area");
  
    // Si ya se han mostrado todas las líneas, detener el intervalo
    if (currentIndex >= codeLines.length) {
      clearInterval(intervalId);
      return;
    }
  
    // Agregar la próxima línea de código
    const currentLine = codeLines[currentIndex];
    const newLine = document.createElement("div");
    newLine.innerText = currentLine;
    codeArea.appendChild(newLine);
  
    // Mostrar la línea de código de forma animada
    let index = 0;
    const intervalDuration = 50;
    const animateLine = setInterval(() => {
      if (index >= currentLine.length) {
        clearInterval(animateLine);
        currentIndex++;
        addCodeLine();
      } else {
        newLine.innerText = currentLine.slice(0, index + 1);
        index++;
      }
    }, intervalDuration);
  }
  
  // Iniciar el intervalo para mostrar las líneas de código
  intervalId = setInterval(() => {
    addCodeLine();
  }, 2000);
  
  // esperar 10 segundos antes de mostrar la animación
setTimeout(function() {
  document.getElementById('win-load').classList.remove('hidden');
}, 9000);

// esperar 10 segundos antes de ocultar la animación
setTimeout(function() {
  document.getElementById('code-area').classList.add('hidden');
}, 8500);

setTimeout(function() {
  document.getElementById('win-load').classList.add('hidden');
}, 14000);

setTimeout(function() {
  document.getElementById('home').classList.remove('hidden');
}, 15000);

var botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    // Quita la clase de selección de todos los botones
    botones.forEach(function(boton) {
      boton.classList.remove("botonact");
    });
    // Agrega la clase de selección al botón seleccionado
    boton.classList.add("botonact");
  });
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Agregar un cero delante de los números menores de 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Mostrar la hora en la página
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);


var iframe;

function toggleFrame() {
  // Verificar si el iframe ya está creado
  if (!iframe) {
    // Crear el iframe
    iframe = document.createElement("iframe");
    iframe.id = "my-iframe";
    iframe.src = "https://jcubic.github.io/jquery.terminal/";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    document.getElementById("iframeOne").appendChild(iframe);
  } else {
    // Eliminar el iframe
    var oldIframe = document.getElementById("my-iframe");
    if (oldIframe) {
      oldIframe.parentNode.removeChild(oldIframe);
      iframe = null;
    }
  }
}

var iframeTwo;

function toggleFrameTwo() {
  // Verificar si el iframe ya está creado
  if (!iframeTwo) {
    // Crear el iframe
    iframeTwo = document.createElement("iframe");
    iframeTwo.id = "my-iframe-two";
    iframeTwo.src = "src/html/firefox/index.html";
    iframeTwo.style.width = "100%";
    iframeTwo.style.height = "100%";
    document.getElementById("iframeTwo").appendChild(iframeTwo);
  } else {
    // Eliminar el iframe
    var oldIframe = document.getElementById("my-iframe-two");
    if (oldIframe) {
      oldIframe.parentNode.removeChild(oldIframe);
      iframeTwo = null;
    }
  }
}

var iframeThree;

function toggleFrameThree() {
  // Verificar si el iframe ya está creado
  if (!iframeThree) {
    // Crear el iframe
    iframeThree = document.createElement("iframe");
    iframeThree.id = "my-iframe-three";
    iframeThree.src = "https://github.com";
    iframeThree.style.width = "100%";
    iframeThree.style.height = "100%";
    document.getElementById("iframeThree").appendChild(iframeThree);
  } else {
    // Eliminar el iframe
    var oldIframe = document.getElementById("my-iframe-three");
    if (oldIframe) {
      oldIframe.parentNode.removeChild(oldIframe);
      iframeThree = null;
    }
  }
}

var iframeFour;

function toggleFrameFour() {
  // Verificar si el iframe ya está creado
  if (!iframeFour) {
    // Crear el iframe
    iframeFour = document.createElement("iframe");
    iframeFour.id = "my-iframe-four";
    iframeFour.src = "https://github.com";
    iframeFour.style.width = "100%";
    iframeFour.style.height = "100%";
    document.getElementById("iframeFour").appendChild(iframeFour);
  } else {
    // Eliminar el iframe
    var oldIframe = document.getElementById("my-iframe-four");
    if (oldIframe) {
      oldIframe.parentNode.removeChild(oldIframe);
      iframeFour = null;
    }
  }
}

var iframeFive;

function toggleFrameFive() {
  // Verificar si el iframe ya está creado
  if (!iframeFive) {
    // Crear el iframe
    iframeFive = document.createElement("iframe");
    iframeFive.id = "my-iframe-five";
    iframeFive.src = "https://github.com";
    iframeFive.style.width = "100%";
    iframeFive.style.height = "100%";
    document.getElementById("iframeFive").appendChild(iframeFive);
  } else {
    // Eliminar el iframe
    var oldIframe = document.getElementById("my-iframe-five");
    if (oldIframe) {
      oldIframe.parentNode.removeChild(oldIframe);
      iframeFive = null;
    }
  }
}