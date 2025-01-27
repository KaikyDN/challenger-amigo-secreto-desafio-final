let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultados = document.getElementById('resultado'); 



function adicionarAmigo(){

    let nomeSugerido = document.getElementById ('amigo');
    resultados.innerHTML = "";

    if(nomeSugerido.value == ''){

        alert("Por favor Digite um nome"); 

    }else if(amigos.includes(nomeSugerido.value)){

        alert("esse nome ja esta adicionado");
        nomeSugerido.value = ''; 

    } else {
            amigos.push(nomeSugerido.value);
            exibirNome();
            limparCampo()
        }        
             
}

function exibirNome() {
    listaAmigos.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if(amigos == ""){
        alert("Por favor, insira um nome.");
    }else{
        let numAleatorio = Math.floor(Math.random() * amigos.length);
        resultados.innerHTML = "O nome sorteado é: " + amigos[numAleatorio];
        listaAmigos.innerHTML = "";
        amigos = ['']; 
    }
}

function limparCampo() {
    nomeSugerido = document.getElementById ('amigo');
    nomeSugerido.value = "";
}   





    