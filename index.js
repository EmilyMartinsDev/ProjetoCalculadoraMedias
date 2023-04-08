let nota_input = document.getElementById("nota");
let nome_input = document.getElementById("nome");
const form = document.getElementById("form");
const resultado = document.getElementById('resultado');
const corpoTabela = document.querySelector(".body_line");
const media = document.getElementById("media");

let notas = [];
let nomeAtividade = [];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = nome_input.value;
    let nota = nota_input.value;

    preencheNomeNotaAtividade(nome, nota);
    
    let media = calculaMedia(notas);
  
    atualizaMedia(media);
});


function atualizaMedia(media_nota){
    media.innerHTML = media_nota;

    if (media_nota < 6){
        resultado.classList.remove("aprovado");
        resultado.classList.add("reprovado");
        resultado.innerHTML = "reprovado";
    }else{
       resultado.classList.remove("reprovado");
        resultado.classList.add("aprovado");
        resultado.innerHTML = "aprovado";
    }
}

function calculaMedia(notas){
    let soma = 0;

    for(let nota of notas){
        soma += parseFloat(nota);
    }

    let media = soma / notas.length

    return media.toFixed(2);
}

function preencheNomeNotaAtividade(nome, nota){
    const repetida = document.querySelector('.materiaExistente');

    if(nomeAtividade.some(atividade=> atividade === nome)){
        repetida.style.display = 'block';
        return;
    }else{
        repetida.style.display = 'none';
    }

    const tr = criaTr();
    const tdNome = criaTd();
    tdNome.innerText = nome;
    tr.appendChild(tdNome);
    nomeAtividade.push(nome);

    const tdNota = criaTd();
    tdNota.innerHTML = nota;
    tr.appendChild(tdNota);
    notas.push(nota);

    const tdEmoji = criaTd();
    const imgAprovado = criaImgAprovado();
    const imgReprovado = criaImgReprovado();
    nota < 6 ? tdEmoji.appendChild(imgReprovado) : tdEmoji.appendChild(imgAprovado);
    tr.appendChild(tdEmoji);

    corpoTabela.appendChild(tr);
}


function criaTr(){
    const tr = document.createElement('tr');
    return tr;
}



function criaTd(){
    const td = document.createElement('td');
    return td;
}

function criaImgAprovado(){
    const img = document.createElement('img');
    img.src = './images/aprovado.png';
    return img;

}


function criaImgReprovado(){
    const img = document.createElement('img');
    img.src = './images/reprovado.png';
    return img;

}