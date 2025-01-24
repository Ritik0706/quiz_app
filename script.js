// Question data for different categories and difficulty levels
const questions = {
    "general-knowledge": {
        "easy": [
            { "question": "What is the capital of France?", "options": ["Paris", "London", "Berlin", "Madrid"], "correct": 0 },
            { "question": "Which planet is known as the Red Planet?", "options": ["Earth", "Venus", "Mars", "Jupiter"], "correct": 2 },
            { "question": "What is the largest mammal in the world?", "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "correct": 1 },
            { "question": "How many continents are there in the world?", "options": ["5", "6", "7", "8"], "correct": 2 },
            { "question": "What is the boiling point of water in degrees Celsius?", "options": ["50", "100", "150", "200"], "correct": 1 },
            { "question": "Who is the current President of the United States? (2025)", "options": ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"], "correct": 0 },
            { "question": "What is the largest ocean on Earth?", "options": ["Atlantic", "Indian", "Arctic", "Pacific"], "correct": 3 },
            { "question": "What is the national currency of Japan?", "options": ["Yen", "Dollar", "Euro", "Won"], "correct": 0 },
            { "question": "How many legs does a spider have?", "options": ["6", "8", "10", "12"], "correct": 1 },
            { "question": "What is the chemical symbol for water?", "options": ["HO", "H2O", "O2", "H2"], "correct": 1 }
        ],
        "intermediate": [
            { "question": "Which country is known as the Land of the Rising Sun?", "options": ["China", "Japan", "South Korea", "Vietnam"], "correct": 1 },
            { "question": "Who painted the Mona Lisa?", "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], "correct": 1 },
            { "question": "Which is the smallest country in the world?", "options": ["Monaco", "Vatican City", "San Marino", "Malta"], "correct": 1 },
            { "question": "What is the hardest natural substance on Earth?", "options": ["Gold", "Iron", "Diamond", "Platinum"], "correct": 2 },
            { "question": "Who wrote the play 'Romeo and Juliet'?", "options": ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], "correct": 2 },
            { "question": "Which planet is the largest in the solar system?", "options": ["Saturn", "Neptune", "Jupiter", "Uranus"], "correct": 2 },
            { "question": "What is the smallest unit of life?", "options": ["Cell", "Atom", "Molecule", "Tissue"], "correct": 0 },
            { "question": "Which organ is responsible for pumping blood in the human body?", "options": ["Lungs", "Kidney", "Heart", "Liver"], "correct": 2 },
            { "question": "Which is the largest desert in the world?", "options": ["Sahara", "Antarctic", "Gobi", "Kalahari"], "correct": 1 },
            { "question": "What is the study of fossils called?", "options": ["Geology", "Biology", "Paleontology", "Archaeology"], "correct": 2 }
        ],
        "hard": [
            { "question": "What is the speed of light in a vacuum?", "options": ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"], "correct": 0 },
            { "question": "Who discovered penicillin?", "options": ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Louis Pasteur"], "correct": 0 },
            { "question": "Which ancient civilization built Machu Picchu?", "options": ["Aztec", "Maya", "Inca", "Olmec"], "correct": 2 },
            { "question": "What is the primary ingredient in traditional Japanese miso soup?", "options": ["Soybeans", "Rice", "Seaweed", "Fish"], "correct": 0 },
            { "question": "What is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "correct": 1 },
            { "question": "Which physicist developed the theory of general relativity?", "options": ["Albert Einstein", "Stephen Hawking", "Isaac Newton", "Galileo Galilei"], "correct": 0 },
            { "question": "What is the most spoken language in the world?", "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"], "correct": 2 },
            { "question": "Which metal is the best conductor of electricity?", "options": ["Gold", "Copper", "Silver", "Aluminum"], "correct": 2 },
            { "question": "What is the SI unit of force?", "options": ["Newton", "Joule", "Watt", "Pascal"], "correct": 0 },
            { "question": "Which war was fought between the North and South regions in the United States?", "options": ["World War I", "World War II", "The American Civil War", "The Revolutionary War"], "correct": 2 }
        ]
    },
    "english": {
        "easy": [
            { question: "What is the opposite of \"happy\"?", options: ["Sad", "Angry", "Excited", "Fearful"], correct: 0 },
            { question: "Which word is a synonym of \"fast\"?", options: ["Slow", "Quick", "Tired", "Heavy"], correct: 1 },
            { question: "Which of these is a verb?", options: ["Quick", "Running", "Beautiful", "House"], correct: 1 },
            { question: "What is the plural form of \"child\"?", options: ["Childs", "Children", "Childes", "Childer"], correct: 1 },
            { question: "Which of the following is a noun?", options: ["Laugh", "Run", "Beauty", "Eat"], correct: 2 },
            { question: "Which word is an adjective?", options: ["Quickly", "Run", "Beautiful", "Swimming"], correct: 2 },
            { question: "What does \"bilingual\" mean?", options: ["Knowing one language", "Knowing two languages", "Being able to read", "Writing in another language"], correct: 1 },
            { question: "What is the past tense of \"go\"?", options: ["Went", "Goed", "Gone", "Goes"], correct: 0 },
            { question: "What is the plural of \"fish\"?", options: ["Fishes", "Fish", "Fishs", "Fishe"], correct: 1 },
            { question: "Which of these words is an adverb?", options: ["Quick", "Quickly", "Run", "Smart"], correct: 1 }
        ],
        "intermediate": [
            { question: "Which sentence is correct?", options: ["She can sings very well.", "She can sing very well.", "She can sung very well.", "She can singing very well."], correct: 1 },
            { question: "What is the opposite of \"generous\"?", options: ["Greedy", "Kind", "Lazy", "Friendly"], correct: 0 },
            { question: "Which of the following is a compound word?", options: ["Sun", "Sunlight", "Light", "Bright"], correct: 1 },
            { question: "What is the correct form of the word \"run\" in future tense?", options: ["Running", "Ran", "Will run", "Run"], correct: 2 },
            { question: "Which of these words is a preposition?", options: ["In", "Walk", "Quick", "Sing"], correct: 0 },
            { question: "Which word is the synonym of \"happy\"?", options: ["Sad", "Content", "Fearful", "Angry"], correct: 1 },
            { question: "What is the correct form of the adjective in this sentence: \"She is the _____ person in the room.\"", options: ["Friendlier", "Friendliest", "Friendlier", "More friendly"], correct: 1 },
            { question: "Which of the following is a collective noun?", options: ["Flock", "House", "Dog", "Apple"], correct: 0 },
            { question: "Which sentence is in the passive voice?", options: ["The dog bit the man.", "The man was bitten by the dog.", "The dog runs fast.", "The man runs."], correct: 1 },
            { question: "Which of these is a conjunction?", options: ["And", "Beautiful", "Quickly", "Swim"], correct: 0 }
        ],
        "hard": [
            { question: "What is the subjunctive mood used for?", options: ["To show action", "To express wishes, desires, or suggestions", "To describe past events", "To make questions"], correct: 1 },
            { question: "What is the plural of \"ox\"?", options: ["Oxes", "Ox", "Oxen", "Oxes"], correct: 2 },
            { question: "Which of the following is an example of a dangling modifier?", options: ["Walking down the street, the sun was setting.", "The sun was setting while walking down the street.", "She was walking down the street when the sun set.", "None of the above."], correct: 0 },
            { question: "What is the past perfect tense of \"run\"?", options: ["Had run", "Ran", "Have run", "Run"], correct: 0 },
            { question: "Which of the following is a gerund?", options: ["Running", "Run", "To run", "Ran"], correct: 0 },
            { question: "What does \"ambivalent\" mean?", options: ["To feel undecided", "To feel happy", "To feel sad", "To feel in love"], correct: 0 },
            { question: "Which of the following is a complex sentence?", options: ["I like ice cream.", "I went to the store and bought some ice cream.", "Although it was cold, I went to the store.", "I like ice cream, and I also like cake."], correct: 2 },
            { question: "Which word is an antonym of \"lucid\"?", options: ["Clear", "Obscure", "Visible", "Understandable"], correct: 1 },
            { question: "Which of the following is a transitive verb?", options: ["Run", "Sleep", "Eat", "Dance"], correct: 2 },
            { question: "What is the meaning of \"oxymoron\"?", options: ["A figure of speech that combines contradictory terms", "A figure of speech that exaggerates", "A type of rhyme", "A simple sentence"], correct: 0 }
        ]
    },
    "science": {
        "easy": [
            { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "N2"], correct: 0 },
            { question: "Which planet is known as the \"Red Planet\"?", options: ["Earth", "Mars", "Venus", "Jupiter"], correct: 1 },
            { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
            { question: "Which part of the plant conducts photosynthesis?", options: ["Roots", "Leaves", "Stem", "Flowers"], correct: 1 },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
            { question: "Which gas do plants absorb from the air for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
            { question: "Which organ in the human body pumps blood?", options: ["Brain", "Lungs", "Heart", "Liver"], correct: 2 },
            { question: "What is the most common element in the Earth's crust?", options: ["Oxygen", "Iron", "Silicon", "Aluminum"], correct: 0 },
            { question: "How many bones are there in the adult human body?", options: ["206", "201", "212", "210"], correct: 0 },
            { question: "What is the primary source of energy for Earth?", options: ["The Moon", "The Sun", "The Wind", "The Earth’s Core"], correct: 1 }
        ],
        "intermediate": [
            { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], correct: 1 },
            { question: "Who developed the theory of evolution by natural selection?", options: ["Isaac Newton", "Charles Darwin", "Galileo Galilei", "Albert Einstein"], correct: 1 },
            { question: "What is the force that pulls objects toward the Earth?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], correct: 1 },
            { question: "Which planet has the most moons?", options: ["Mars", "Earth", "Saturn", "Jupiter"], correct: 3 },
            { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], correct: 2 },
            { question: "Which gas makes up about 78% of the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
            { question: "What is the second most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: 0 },
            { question: "Which planet is known as the \"Morning Star\"?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 0 },
            { question: "Who is known as the father of modern physics?", options: ["Nikola Tesla", "Isaac Newton", "Albert Einstein", "Marie Curie"], correct: 2 },
            { question: "What is the most abundant element in the universe?", options: ["Hydrogen", "Oxygen", "Carbon", "Helium"], correct: 0 }
        ],
        "hard": [
            { question: "What is the process by which plants make their food?", options: ["Fermentation", "Respiration", "Photosynthesis", "Digestion"], correct: 2 },
            { question: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], correct: 1 },
            { question: "What is the name of the force that causes objects to float in water?", options: ["Buoyancy", "Magnetism", "Gravity", "Inertia"], correct: 0 },
            { question: "What is the strongest muscle in the human body relative to its size?", options: ["Heart", "Masseter (Jaw Muscle)", "Biceps", "Glutes"], correct: 1 },
            { question: "What is the name of the chemical element with atomic number 79?", options: ["Gold", "Silver", "Copper", "Platinum"], correct: 0 },
            { question: "Who is credited with discovering the structure of DNA?", options: ["Albert Einstein", "James Watson and Francis Crick", "Charles Darwin", "Gregor Mendel"], correct: 1 },
            { question: "What is the chemical formula for methane?", options: ["CH4", "CO2", "H2O", "C2H6"], correct: 0 },
            { question: "What is the most common type of rock on Earth?", options: ["Granite", "Basalt", "Limestone", "Sandstone"], correct: 1 },
            { question: "Which particle in an atom has a positive charge?", options: ["Neutron", "Proton", "Electron", "Positron"], correct: 1 },
            { question: "What element does the symbol \"Na\" represent?", options: ["Nitrogen", "Sodium", "Nickel", "Neon"], correct: 1 }
        ]
    },
    "computer": {
        "easy": [
            { question: "What does \"CPU\" stand for?", options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Program Unit"], correct: 0 },
            { question: "Which company created the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], correct: 1 },
            { question: "What does \"URL\" stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"], correct: 0 },
            { question: "Which of the following is a programming language?", options: ["HTML", "Microsoft Word", "Windows 10", "Google Chrome"], correct: 0 },
            { question: "What does \"RAM\" stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Random Assignment Memory"], correct: 0 },
            { question: "Which device is used for pointing on a computer screen?", options: ["Keyboard", "Mouse", "Monitor", "Printer"], correct: 1 },
            { question: "What is the main function of an operating system?", options: ["Managing hardware", "Running applications", "Displaying graphics", "Printing documents"], correct: 0 },
            { question: "Which of the following is a web browser?", options: ["Microsoft Word", "Google Chrome", "Photoshop", "Windows"], correct: 1 },
            { question: "What is the full form of \"Wi-Fi\"?", options: ["Wireless Fidelity", "Wide Fidelity", "Wireless Finder", "Wired Fidelity"], correct: 0 },
            { question: "Which of the following is used to store data in a computer?", options: ["RAM", "CPU", "Hard Disk", "Monitor"], correct: 2 }
        ],
        "intermediate": [
            { question: "What is the function of the \"BIOS\" in a computer?", options: ["To manage memory", "To control input/output devices", "To boot the operating system", "To provide network connectivity"], correct: 2 },
            { question: "Which company created the first personal computer?", options: ["IBM", "Apple", "Microsoft", "Compaq"], correct: 1 },
            { question: "What is the purpose of an IP address?", options: ["Identify a device on a network", "Store files on a computer", "Allow a computer to access the internet", "Send emails"], correct: 0 },
            { question: "Which of these is a cloud storage service?", options: ["Dropbox", "Notepad", "Excel", "Windows 10"], correct: 0 },
            { question: "What is the primary function of a graphics card?", options: ["Processing graphics and images", "Running applications", "Storing files", "Processing text data"], correct: 0 },
            { question: "Which of the following is an example of an open-source software?", options: ["Windows", "Linux", "Microsoft Office", "Photoshop"], correct: 1 },
            { question: "What is the most common language for web development?", options: ["Java", "C++", "JavaScript", "Python"], correct: 2 },
            { question: "Which of the following is a type of computer network?", options: ["LAN", "USB", "DVD", "RAM"], correct: 0 },
            { question: "What is the name of the first computer virus?", options: ["ILOVEYOU", "Morris Worm", "Conficker", "Brain"], correct: 3 },
            { question: "What does \"HTTP\" stand for in a website address?", options: ["HyperText Transfer Protocol", "HyperTool Transfer Protocol", "Hyperlink Text Transfer Protocol", "HyperText Technology Protocol"], correct: 0 }
        ],
        "hard": [
            { question: "What is the function of the ALU (Arithmetic Logic Unit)?", options: ["Performing mathematical calculations", "Managing memory", "Performing logical operations", "Controlling the input/output operations"], correct: 0 },
            { question: "Which protocol is used for secure communication over the internet?", options: ["FTP", "HTTP", "HTTPS", "TCP"], correct: 2 },
            { question: "What does \"SSH\" stand for?", options: ["Secure Socket Header", "Secure Shell", "Simple Socket Helper", "Secure Server Hub"], correct: 1 },
            { question: "Which programming language is known for its use in artificial intelligence?", options: ["Python", "C", "Ruby", "Swift"], correct: 0 },
            { question: "What does \"DNS\" stand for in networking?", options: ["Domain Name System", "Digital Network System", "Direct Network System", "Data Network System"], correct: 0 },
            { question: "What is the primary purpose of a firewall in networking?", options: ["To block unauthorized access", "To improve internet speed", "To store files", "To manage network traffic"], correct: 0 },
            { question: "What does the \"ping\" command do in networking?", options: ["Check the status of a network", "Send a file to another computer", "Measure the speed of the internet", "Connect to a database"], correct: 0 },
            { question: "Which programming language is used to create Android apps?", options: ["Swift", "Java", "C#", "C++"], correct: 1 },
            { question: "What is the purpose of a database management system (DBMS)?", options: ["To store files", "To manage network resources", "To manage and manipulate data", "To run applications"], correct: 2 },
            { question: "What is the process of converting source code into machine code called?", options: ["Compilation", "Encryption", "Decryption", "Interpretation"], correct: 0 }
        ]
    },
};

// Global variables for handling the quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = '';
let selectedDifficulty = '';
let shuffledQuestions = [];

// Handle form submission to start the quiz
document.getElementById("category-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get selected category and difficulty level
    selectedCategory = document.getElementById("category").value;
    selectedDifficulty = document.getElementById("difficulty").value;

    // Get questions for the selected category and difficulty level
    let categoryQuestions = questions[selectedCategory][selectedDifficulty];

    // Shuffle the questions to randomize the order
    shuffledQuestions = shuffle(categoryQuestions);

    // Hide category selection and show the quiz
    document.getElementById("category-selection").classList.add("d-none");
    document.getElementById("quiz-container").classList.remove("d-none");

    // Load the first question
    loadQuestion();
});

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = shuffle(questions[selectedCategory][selectedDifficulty]);
    document.getElementById("quiz-container").classList.remove("d-none");
    document.getElementById("result-container").classList.add("d-none");
    loadQuestion();
}

// Shuffle function to randomize question order
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}


// Go back to category selection
function goBackToCategory() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("category-selection").classList.remove("d-none");
    document.getElementById("quiz-container").classList.add("d-none");
    clearInterval(timerInterval);
    document.getElementById("resultsContainer").style.display = "none";
}


// Add Animations and Sounds
function playSound(type) {
    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");
    const timeoutSound = document.getElementById("timeoutSound");

    if (type === "correct") {
        correctSound.play();
    } else if (type === "incorrect") {
        incorrectSound.play();
    } else if (type === "timeout") {
        timeoutSound.play();
    }
}

function showAnimation(type) {
    if (type === "correct") {
        anime({
            targets: ".quiz-container",
            backgroundColor: "#d4edda", // Light green for correct answer
            duration: 500,
            easing: "easeInOutQuad",
            direction: "alternate",
        });
    } else if (type === "incorrect") {
        anime({
            targets: ".quiz-container",
            backgroundColor: "#f8d7da", // Light red for incorrect answer
            duration: 500,
            easing: "easeInOutQuad",
            direction: "alternate",
        });
    } else if (type === "timeout") {
        anime({
            targets: ".quiz-container",
            backgroundColor: "#fff3cd", // Light yellow for timeout
            duration: 500,
            easing: "easeInOutQuad",
            direction: "alternate",
        });
    }
}
let timerInterval;
const timePerQuestion = 15; // Time in seconds
let timeLeft = timePerQuestion;
let questionTimes = []; // Track time taken for each question
let totalTime = 0; // Total time spent on quiz
let correctAnswers = 0; // Track correct answers
let incorrectAnswers = 0; // Track incorrect answers
let unattemptedQuestions = 0; // Track unattempted questions
let questionStartTime; // Start time for the current question
// Clear existing timer
clearInterval(timerInterval);

// Function to start the timer
function startTimer() {
    const timerDisplay = document.getElementById("timer");
    questionStartTime = Date.now(); // Record the current time in milliseconds
    // Reset timeLeft for each question
    timeLeft = timePerQuestion;

    // Reset the timer display to its initial state
    timerDisplay.classList.remove("alert-danger", "alert-info");
    timerDisplay.classList.add("alert-info"); // Default to blue

    // Clear any existing timer
    clearInterval(timerInterval);

    // Start a new timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        // When time runs out, automatically move to the next question
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            playSound("timeout");
            showAnimation("timeout");
            endQuestionTimer(); // Record time for this question
            nextQuestion(); // Move to the next question
        }

        if (timeLeft <= 5) {
            timerDisplay.classList.remove("alert-info");
            timerDisplay.classList.add("alert-danger"); // Turns the timer red when time is running out
        }

    }, 1000);
}

// End the timer and calculate time spent on the question

function endQuestionTimer() {
    if (questionStartTime) {
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000); // Time spent in seconds
        totalTime += timeSpent; // Add to total time
        questionTimes[currentQuestionIndex] = timeSpent; // Save time for this question
        questionStartTime = null; // Reset the start time
    }
}


// Check the answer selected by the user
function checkAnswer(selectedIndex) {
    const questionData = shuffledQuestions[currentQuestionIndex];
    const allOptions = document.querySelectorAll(".option-btn");
    allOptions.forEach((btn, index) => {
        btn.disabled = true; // Disable all options after selection
        if (index === questionData.correct) {
            btn.classList.add("correct"); // Highlight correct option
        } else if (index === selectedIndex) {
            btn.classList.add("incorrect"); // Highlight incorrect option if selected
        }
    });

    if (selectedIndex === questionData.correct) {
        correctAnswers++; // Increment correct answer count
        playSound("correct");
        showAnimation("correct");
    } else {
        incorrectAnswers++; // Increment incorrect answer count
        playSound("incorrect");
        showAnimation("incorrect");
    }

    questionTimes[currentQuestionIndex] = timePerQuestion - timeLeft; // Save time taken for this question

    document.getElementById("feedback").innerHTML =
        selectedIndex === questionData.correct ?
            "<div class='text-success'>Correct!</div>" :
            `<div class='text-danger'>Incorrect. The correct answer is: ${questionData.options[questionData.correct]}</div>`;

    document.getElementById("next-button").disabled = false; // Enable the next button
}

// Mark a question as unattempted
function markUnattempted() {
    unattemptedQuestions++; // Increment unattempted count
    questionTimes[currentQuestionIndex] = timePerQuestion; // Assign full time since it timed out
}

// Function to move to the next question or show results if all questions are answered
function nextQuestion() {
    endQuestionTimer(); // Record time for the current question

    const questionData = shuffledQuestions[currentQuestionIndex];
    if (!questionData.answered) {
        markUnattempted(); // Mark the current question as unattempted if not answered
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion(); // Load the next question
        startTimer(); // Restart the timer for the next question
    } else {
        clearInterval(timerInterval); // Stop the timer
        showResults(); // Display the results
    }
}

// Function to display detailed results
function showResults() {
    // Accuracy calculation
    const totalQuestions = shuffledQuestions.length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

    // Populate results container
    const quizContainer = document.getElementById("quiz-container");
    const resultsContainer = document.getElementById("resultsContainer");
    document.getElementById("accuracy").innerText = accuracy;
    document.getElementById("totalTime").innerText = totalTime;
    document.getElementById("correct").innerText = correctAnswers;
    document.getElementById("incorrect").innerText = incorrectAnswers;
    document.getElementById("unattempted").innerText = unattemptedQuestions;

    // Generate question review
    const questionReview = document.getElementById("questionReview");
    questionReview.innerHTML = ""; // Clear previous data
    shuffledQuestions.forEach((question, index) => {
        const status = question.answered === "correct" ?
            "Correct" :
            question.answered === "incorrect" ?
                "Incorrect" :
                "Unattempted";
        const color = status === "Correct" ? "green" : status === "Incorrect" ? "red" : "orange";
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            Q${index + 1}: ${question.question} 
            <span style="color: ${color};">${status}</span>
            (${questionTimes[index]} seconds)
        `;
        questionReview.appendChild(listItem);
    });

    // Suggestions based on performance
    const suggestions = document.getElementById("suggestions");
    if (accuracy === 100) {
        suggestions.innerText = "Excellent work! Keep it up!";
        suggestions.className = "alert alert-success";
    } else if (accuracy >= 55) {
        suggestions.innerText = "Great job! Review the questions you missed to improve.";
        suggestions.className = "alert alert-warning";
    } else {
        suggestions.innerText = "Consider revisiting the topics you struggled with.";
        suggestions.className = "alert alert-danger";
    }


    // Show the Chart Container
    Chart.register(ChartDataLabels);
    const ctx = document.getElementById("scoreChart").getContext("2d");
    const quizChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Correct Answers", "Incorrect Answers", "Unattempted Questions"],
            datasets: [
                {
                    label: "Quiz Results",
                    data: [correctAnswers, incorrectAnswers, unattemptedQuestions],
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.8)",
                        "rgba(54, 162, 235, 0.8)",
                        "rgba(255, 99, 132, 0.8)",
                    ],
                },
            ],
        },
        options: {
            plugins: {
                datalabels: {
                    color: "#fff",
                    anchor: "center",
                    align: "center",
                    font: {
                        size: 18,
                        weight: "bold",
                    },
                    formatter: function (value) {
                        return value;
                    },
                },
            },
        },

    });

    console.log(correctAnswers, incorrectAnswers, unattemptedQuestions);
    console.log("Chart Graph : ", quizChart);
    // Show the results container
    resultsContainer.style.display = "block";
    quizContainer.style.display = "none";
}

// Load the next question and start the quiz
function loadQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    // Populate options
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.textContent = option;
        button.onclick = () => {
            questionData.answered = index === questionData.correct ? "correct" : "incorrect"; // Mark the answer
            checkAnswer(index); // Check the selected answer
        };
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-button").disabled = true; // Disable next button until an option is selected
}
