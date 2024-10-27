let selectedSubject = '';
let selectedYear = '';
let currentQuestionIndex = 0;
let currentQuestions = [];

// Perguntas para cada matéria
const questions = {
    Biologia: [
        {
            question: "Qual é a unidade básica da vida?",
            options: ["Célula", "Átomo", "Molécula", "Organismo"],
            answer: "Célula"
        },
        {
            question: "Qual organela é conhecida como a 'usina de energia' da célula?",
            options: ["Ribossomo", "Mitocôndria", "Cloroplasto", "Núcleo"],
            answer: "Mitocôndria"
        },
        {
            question: "Qual é a função do DNA?",
            options: ["Produzir energia", "Armazenar informação genética", "Produzir proteínas", "Transportar nutrientes"],
            answer: "Armazenar informação genética"
        }
    ],
    Química: [
        {
            question: "Qual é a fórmula da água?",
            options: ["H2O", "CO2", "NaCl", "C6H12O6"],
            answer: "H2O"
        },
        {
            question: "Qual é o pH da água pura?",
            options: ["0", "7", "14", "10"],
            answer: "7"
        },
        {
            question: "O que é um elemento químico?",
            options: ["Uma substância pura", "Uma mistura", "Um composto", "Uma reação"],
            answer: "Uma substância pura"
        }
    ],
    Física: [
        {
            question: "Qual é a fórmula da velocidade?",
            options: ["v = d/t", "F = ma", "E = mc²", "P = F/A"],
            answer: "v = d/t"
        },
        {
            question: "O que é força?",
            options: ["Uma energia", "Uma massa", "Uma aceleração", "Uma interação que altera o movimento"],
            answer: "Uma interação que altera o movimento"
        },
        {
            question: "Qual é a unidade de medida de força no SI?",
            options: ["Joule", "Newton", "Pascal", "Watt"],
            answer: "Newton"
        }
    ]
};

// Função para selecionar a matéria
function selectSubject(subject) {
    selectedSubject = subject; // Armazena a matéria selecionada

    // Oculta a seleção de matéria e mostra a seleção de ano
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("year-selection").style.display = "flex";
}

// Função para iniciar o quiz com base no ano escolhido
function startQuiz(year) {
    selectedYear = year; // Armazena o ano selecionado
    currentQuestionIndex = 0; // Reinicia o índice da pergunta
    currentQuestions = questions[selectedSubject]; // Carrega as perguntas da matéria selecionada

    // Oculta a seleção de ano e mostra o quiz
    document.getElementById("year-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion(); // Exibe a primeira pergunta
}

// Função para exibir a pergunta atual
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");

    questionElement.textContent = currentQuestions[currentQuestionIndex].question;
    optionsElement.innerHTML = ""; // Limpa opções anteriores

    currentQuestions[currentQuestionIndex].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option-btn";
        btn.onclick = checkAnswer;
        optionsElement.appendChild(btn);
    });

    nextBtn.style.display = "none"; // Oculta o botão de próxima pergunta
}

// Função para verificar a resposta do usuário
function checkAnswer(e) {
    const selectedOption = e.target.textContent;
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta errada! A resposta correta é: ${correctAnswer}`);
    }

    currentQuestionIndex++;

    const nextBtn = document.getElementById("next-btn");
    if (currentQuestionIndex < currentQuestions.length) {
        nextBtn.style.display = "block"; // Exibe o botão de próxima pergunta
    } else {
        alert("Quiz concluído!");
        // Aqui você pode implementar a lógica para finalizar o quiz ou reiniciar
    }
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    displayQuestion();
}
