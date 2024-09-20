
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        correct: "William Shakespeare"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');

loadQuiz();

function loadQuiz() {
    const currentQuestionData = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `<div class="question">${currentQuestionData.question}</div>`;
    quizContainer.innerHTML += currentQuestionData.options.map(option => 
        `<label><input type="radio" name="option" value="${option}"> ${option}</label><br>`).join('');
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && selectedOption.value === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        showScore();
    }
});

function showScore() {
    quizContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    nextButton.style.display = 'none';
}
