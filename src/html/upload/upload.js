function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
  
  function dropHandler(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    // Aquí puedes realizar alguna acción con los archivos, como subirlos a un servidor o procesarlos en el cliente
  }
