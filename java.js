let listaImagens = ['dilicia1','dilicia2','dilicia3','gostoso','gostoso2','linda','esposa','esposa2']

function trocarImagen() {
    let imagenAtual = document.getElementById('img');
    imagenAtual.src = `${listaImagens[numeroAleatorio()]}.jpg`;
}

function numeroAleatorio() {
 return parseInt(Math.random() * (listaImagens.length - 0) + 0);
}