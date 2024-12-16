// Science questions for grades 1 to 6
const scienceQuestions = {
    1: [
        { question: "What do plants need to grow?", answers: ["Sunlight", "Darkness", "Cold"], correct: 0 },
        { question: "What is the largest planet?", answers: ["Earth", "Jupiter", "Mars"], correct: 1 },
        { question: "What do you call water that falls from the sky?", answers: ["Rain", "Snow", "Fog"], correct: 0 },
        { question: "What do you call a baby cat?", answers: ["Kitten", "Cub", "Puppy"], correct: 0 },
        { question: "What is the hardest natural substance on Earth?", answers: ["Diamond", "Gold", "Iron"], correct: 0 }
    ],
    2: [
        { question: "What gas do humans need to breathe?", answers: ["Oxygen", "Helium", "Carbon dioxide"], correct: 0 },
        { question: "What do we call animals that eat only plants?", answers: ["Herbivores", "Carnivores", "Omnivores"], correct: 0 },
        { question: "What is the process plants use to make food?", answers: ["Photosynthesis", "Respiration", "Digestion"], correct: 0 },
        { question: "Which part of the plant is responsible for reproduction?", answers: ["Flower", "Stem", "Roots"], correct: 0 },
        { question: "Which planet is known as the Red Planet?", answers: ["Mars", "Venus", "Mercury"], correct: 0 }
    ],
    3: [
        { question: "What do you call the study of stars and planets?", answers: ["Astronomy", "Biology", "Geography"], correct: 0 },
        { question: "What is the center of our solar system?", answers: ["The Sun", "The Earth", "The Moon"], correct: 0 },
        { question: "What is the main organ used for breathing?", answers: ["Lungs", "Heart", "Stomach"], correct: 0 },
        { question: "What is the smallest unit of life?", answers: ["Cell", "Atom", "Molecule"], correct: 0 },
        { question: "What do we call water in its solid form?", answers: ["Ice", "Vapor", "Cloud"], correct: 0 }
    ],
    4: [
        { question: "What is the boiling point of water in Celsius?", answers: ["100°C", "0°C", "50°C"], correct: 0 },
        { question: "Which planet has rings around it?", answers: ["Saturn", "Mars", "Earth"], correct: 0 },
        { question: "What is the chemical symbol for water?", answers: ["H2O", "O2", "CO2"], correct: 0 },
        { question: "What force keeps us on the ground?", answers: ["Gravity", "Magnetism", "Friction"], correct: 0 },
        { question: "What is the largest organ in the human body?", answers: ["Skin", "Heart", "Liver"], correct: 0 }
    ],
    5: [
        { question: "What is the nearest star to Earth?", answers: ["The Sun", "Proxima Centauri", "Sirius"], correct: 0 },
        { question: "What do we call animals that live in water?", answers: ["Aquatic", "Terrestrial", "Aerial"], correct: 0 },
        { question: "What is the most abundant gas in Earth's atmosphere?", answers: ["Nitrogen", "Oxygen", "Carbon Dioxide"], correct: 0 },
        { question: "What type of rock is formed from molten lava?", answers: ["Igneous", "Sedimentary", "Metamorphic"], correct: 0 },
        { question: "What do we call the study of fossils?", answers: ["Paleontology", "Geology", "Archaeology"], correct: 0 }
    ],
    6: [
        { question: "What is the main source of energy for life on Earth?", answers: ["The Sun", "The Moon", "The Ocean"], correct: 0 },
        { question: "What is the process by which water changes to vapor?", answers: ["Evaporation", "Condensation", "Precipitation"], correct: 0 },
        { question: "What do we call the molten rock inside Earth?", answers: ["Magma", "Lava", "Basalt"], correct: 0 },
        { question: "What organ pumps blood through the body?", answers: ["Heart", "Liver", "Lungs"], correct: 0 },
        { question: "What is Earth's only natural satellite?", answers: ["The Moon", "Mars", "Venus"], correct: 0 }
    ]
};

// Current grade and quiz state
let currentGrade = 1;
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const gradeSelect = document.getElementById("grade-select");
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsContainer = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

// Event listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);

// Start the quiz
function startQuiz() {
    currentGrade = parseInt(gradeSelect.value);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("quiz-container").classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
}

// Display a question
function showQuestion() {
    const questions = scienceQuestions[currentGrade];
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        // Clear previous answers
        answerButtonsContainer.innerHTML = "";
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("btn");
            button.dataset.index = index;
            answerButtonsContainer.appendChild(button);

            // Select answer
            button.addEventListener("click", () => {
                document.querySelectorAll(".btn").forEach((btn) => btn.classList.remove("selected"));
                button.classList.add("selected");
            });
        });
    } else {
        endQuiz();
    }
}

// Check the selected answer
function checkAnswer() {
    const questions = scienceQuestions[currentGrade];
    const selectedButton = document.querySelector(".btn.selected");
    if (!selectedButton) {
        alert("Please select an answer!");
        return;
    }

    const selectedIndex = parseInt(selectedButton.dataset.index);
    const correctIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;
    showQuestion();
}

// End the quiz
function endQuiz() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${scienceQuestions[currentGrade].length}`;
}