const form = document.getElementById('divsenha');
const divPass = document.getElementById('div-pass');
const divMsg = document.getElementById('div-msg');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const divBtn = document.getElementById('buttons');

function confirmPassword() {
    const passValue = document.getElementById('password');

    if (passValue.value === 'aries') {
        form.classList = 'hiddenObject';
        divPass.classList.remove('hiddenObject');
        console.log('funciona');
    }
}

btnSim.addEventListener('click', () => {
    const newMsg = document.createElement('p');
    newMsg.textContent = 'Obrigado por ter clicado de primeira no sim... É bom saber que estamos juntos apesar de tudo... e do meu jeito chato de ser.';
    
    const newMsg2 = document.createElement('p');
    newMsg2.textContent = 'Eu sei que não posso prometer que vou ser alguém melhor imediatamente... Também sei que tu não me deve nada pra ficar tendo paciência comigo...';

    const newMsg3 = document.createElement('p');
    newMsg3.textContent = 'Mas eu sei que a nossa relação é importante demais para nós dois... Seja qual for o nome que a gente prefira dar para ela. E sabendo disso, o que eu posso prometer é não sair daqui. Encarar de frente e sempre tentar resolver as coisas.'

    const newMsg4 = document.createElement('p');
    newMsg4.textContent = 'Eu sei que devo estar parecendo a porra de um adolecente fazendo uma cartinha pra me desculpar... Um adolecente nerd... Mas desculpa, é meu jeito de ser carinhoso... Queria muito poder fazer outras coisas pra compensar meu jeito tonto de ser...';

    const newMsg5 = document.createElement('p');
    newMsg5.textContent = 'Mas enfim, anja. O que eu quero dizer, resumido em uma frase, é que...';

    const newMsg6 = document.createElement('h3');
    newMsg6.textContent = '"Independente da dificuldade, do conflito... Da distância ou do contexto... Eu to aqui contigo, sempre em pensamento e te amando... Mesmo quando eu dou mancada, eu erro querendo mais que tudo acertar e ser melhor pra nós dois".';
    
    const newMsg7 = document.createElement('p');
    newMsg7.textContent = 'P.S: Fiz essa Playlist com algumas músicas que me lembram de ti... Apesar que tudo que fala de amor me lembra.';

    const newIFrame = document.createElement('div');
    newIFrame.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6d5oZCv9nJy7cNFyjdUkgO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

    divBtn.innerHTML = '';
    divMsg.innerHTML = '';
    divMsg.appendChild(newMsg);
    divMsg.appendChild(newMsg2);
    divMsg.appendChild(newMsg3);
    divMsg.appendChild(newMsg4);
    divMsg.appendChild(newMsg5);
    divMsg.appendChild(newMsg6);
    divMsg.appendChild(newMsg7);
    divMsg.appendChild(newIFrame);
});

let counter = 0;

function btnNaoClick() {
    if (counter === 0 || (counter % 2 === 0)) {
        btnNao.classList = '';
        btnNao.classList.add('btnNao1');
        divMsg.innerHTML = `<p>Acho que tu te enganou, o botão fica mais para o lado...</p>`;
        counter++;
        console.log(counter);
    } else if (counter % 2 !== 0) {
        btnNao.classList = '';
        btnNao.classList.add('btnNao2');
        divMsg.innerHTML = `<p>Parece que tu errou de novo... Ou é o universo tentando mostrar o caminho certo... Acho que tá ali do lado esquerdo...</p>`;
        counter++;
        console.log(counter);
    }
}

btnNao.addEventListener('click', btnNaoClick);
