function escolhaPc() {
    return Math.floor(Math.random() * (3 - 0)) + 0;
} 

let pc = escolhaPc()
const opcJogador = document.getElementById('opc-jogador');
const opcComputador = document.getElementById('opc-computador');
const result = document.getElementById('result');
const img = document.createElement('img');
const imgPc = document.createElement('img');
const p = document.createElement('p');
p.innerText = "Player";
const comp = document.createElement('p');
comp.innerText = "Computador"

function pedra() {
    img.src = "./img/pedra.png";
    opcJogador.appendChild(img);
    opcJogador.appendChild(p);
    if ( pc == 0 ){
        result.innerText = "Empate!";
        imgPc.src = "./img/pedra.png";
    } else if(pc == 1) {
        result.innerText = "Você Perdeu!";
        imgPc.src = "./img/papel-higienico.png";
        result.style.color = "red";
    } else if (pc == 2) {
        result.innerText = "Você Venceu!";
        imgPc.src = "./img/tesouras.png";
        result.style.color = "green";
    }
    document.getElementById('x').innerText = "x";
    opcComputador.appendChild(imgPc);
    opcComputador.appendChild(comp);
    
}

function papel() {
    img.src = "./img/papel-higienico.png";
    opcJogador.appendChild(img);
    opcJogador.appendChild(p);
    if (pc == 0) {
        result.innerText = "Você Venceu!";
        imgPc.src = "./img/pedra.png";
        result.style.color = "green";
    } else if (pc == 1) {
        result.innerText = "Empate!";
        imgPc.src = "./img/papel-higienico.png";
    } else if (pc == 2) {
        result.innerText = "Você Perdeu!";
        imgPc.src = "./img/tesouras.png";
        result.style.color = "red";
    }
    document.getElementById('x').innerText = "x";
    opcComputador.appendChild(imgPc);
    opcComputador.appendChild(comp);
}

function tesoura() {
    img.src = "./img/tesouras.png";
    opcJogador.appendChild(img);
    opcJogador.appendChild(p);
    if (pc == 0) {
        result.innerText = "Você Perdeu!";
        imgPc.src = "./img/pedra.png";
        result.style.color = "red";
    } else if (pc == 1) {
        result.innerText = "Você Venceu!";
        imgPc.src = "./img/papel-higienico.png";
        result.style.color = "green";
    } else if (pc ==2) {
        result.innerText = "Empate!";
        imgPc.src = "./img/tesouras.png";
    }
    document.getElementById('x').innerText = "x";
    opcComputador.appendChild(imgPc);
    opcComputador.appendChild(comp);
} 

function hidden() {
    document.getElementById('input').classList.add('hi');
}
document.getElementById('pedra').addEventListener('click', pedra); 
document.getElementById('pedra').addEventListener('click', hidden);
document.getElementById('papel').addEventListener('click', papel);
document.getElementById('papel').addEventListener('click', hidden);
document.getElementById('tesoura').addEventListener('click', tesoura);
document.getElementById('tesoura').addEventListener('click', hidden);