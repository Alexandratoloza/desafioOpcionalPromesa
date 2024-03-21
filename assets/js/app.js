async function TitulosDeAlbumes() {
  const url = 'https://jsonplaceholder.typicode.com/photos';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const idMaximo = 20; 
    
    const titulos = [];
    data.slice(0, idMaximo).forEach(photo => {
      if (photo.albumId <= idMaximo) {
        titulos.push(photo.title);
      }
    });
    
    titulos.forEach((titulo, index) => {
      console.log(`Título ${index + 1}: ${titulo}`);
    });
  } catch (e) {
    console.e('Ocurrió un error:', e);
  }
}

function enviarInformacion() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Información Enviada');
    }, 3000);
  });
}

async function mostrarMensaje() {
  const mensaje = await enviarInformacion();
  console.log(mensaje);
}


TitulosDeAlbumes();


mostrarMensaje();
