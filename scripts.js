document.addEventListener("DOMContentLoaded", function() {

    const cards = [
        { name: "imagem1", img: "img/pequena.png" },
        { name: "imagem2", img: "img/pequena2.png" },
        { name: "imagem3", img: "img/pequena3.png" },
        { name: "imagem4", img: "img/pequena4.png" },
        { name: "imagem5", img: "img/pequena5.png" },
        { name: "imagem6", img: "img/pequena6.png" },
        { name: "imagem1", img: "img/pequena.png" },
        { name: "imagem2", img: "img/pequena2.png" },
        { name: "imagem3", img: "img/pequena3.png" },
        { name: "imagem4", img: "img/pequena4.png" },
        { name: "imagem5", img: "img/pequena5.png" },
        { name: "imagem6", img: "img/pequena6.png" }
    ];

    // Embaralhar todas as cartas
    cards.sort(() => Math.random() - 0.5);

    // Carregar elementos HTML no JavaScript
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = []; // Cartas escolhidas
    let cardsChosenId = []; // ID das cartas escolhidas
    let cardsWon = []; // Cartas combinadas

    // Função para verificar combinações de cartas
    function checkForMatch() {
        const [optionOneId, optionTwoId] = cardsChosenId;
        const [optionOneName, optionTwoName] = cardsChosen;

        if (optionOneId === optionTwoId) {
            alert('Você clicou na mesma imagem');
        } else if (optionOneName === optionTwoName) {
            alert('Você encontrou uma combinação');
            cardsWon.push(cardsChosen);
            disableCards(optionOneId, optionTwoId);
        } else {
            resetCards(optionOneId, optionTwoId);
            alert('Tente novamente');
        }

        clearChosenCards();
    }

    // Função para desativar cartas após combinação
    function disableCards(id1, id2) {
        document.querySelectorAll('img').forEach((card, index) => {
            if (index == id1 || index == id2) {
                card.removeEventListener('click', flipCard);
            }
        });
    }

    // Função para redefinir cartas após erro
    function resetCards(id1, id2) {
        setTimeout(() => {
            document.querySelectorAll('img').forEach((card, index) => {
                if (index == id1 || index == id2) {
                    card.setAttribute('src', 'img/rosa.png');
                }
            });
        }, 1000);
    }

    // Função para limpar cartas escolhidas
    function clearChosenCards() {
        cardsChosen = [];
        cardsChosenId = [];
    }

    // Função para criar o quadro de cartas
    function createBoard() {
        cards.forEach((card, index) => {
            const cardElement = document.createElement('img');
            cardElement.setAttribute('src', 'img/rosa.png');
            cardElement.setAttribute('data-id', index);
            cardElement.addEventListener('click', flipCard);
            board.appendChild(cardElement);
        });
    }

    // Função para virar uma carta
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        const card = cards[cardId];
        
        if (cardsChosenId.length < 2 && !cardsChosenId.includes(cardId)) {
            this.setAttribute('src', card.img);
            cardsChosen.push(card.name);
            cardsChosenId.push(cardId);

            if (cardsChosenId.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    // Chamar a função para criar o quadro de cartas
    createBoard();

});

    // Função para redefinir cartas após erro
    function resetCards(id1, id2) {
        setTimeout(() => {
            document.querySelectorAll('img').forEach((card, index) => {
                if (index == id1 || index == id2) {
                    card.setAttribute('src', 'img/pequena.jpg');
                }
            });
        }, 1000);
    }

    // Função para limpar cartas escolhidas
    function clearChosenCards() {
        cardsChosen = [];
        cardsChosenId = [];
    }

    // Função para criar o quadro de cartas
    function createBoard() {
        cards.forEach((card, index) => {
            const cardElement = document.createElement('img');
            cardElement.setAttribute('src', 'img/rosa.png');
            cardElement.setAttribute('data-id', index);
            cardElement.addEventListener('click', flipCard);
            board.appendChild(cardElement);

        
        
    });

    }

    // Função para virar uma carta

    function flipCard() {
    const cardId = this.getAttribute('data-id');
    const card = cards[cardId];
    
    if (cardsChosenId.length < 2 && !cardsChosenId.includes(cardId)) {
        this.setAttribute('src', card.img);
        cardsChosen.push(card.name);
        cardsChosenId.push(cardId);

        if (cardsChosenId.length === 2) {
            setTimeout(checkForMatch, 500);
        }


// Chamar a função para criar o quadro de cartas
createBoard();



}

}
