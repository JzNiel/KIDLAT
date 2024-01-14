const questions = [
    {
        question: "What is the SI unit for measuring force?",
        choices: ["Joule", "Watt", "Newton", "Volt"],
        correctAnswer: "Newton"
    },
    {
        question: "Which of the following is a fundamental particle found in the nucleus of an atom?",
        choices: ["Electron", "Proton", "Neutron", "Photon"],
        correctAnswer: "Proton"
    },
    {
        question: "What law states that an object at rest will stay at rest, and an object in motion will stay in motion unless acted upon by a net external force?",
        choices: ["Newton's Second Law", "Newton's Third Law", "Law of Inertia", "Law of Conservation of Energy"],
        correctAnswer: "Law of Inertia"
    },
    {
        question: "Which electromagnetic wave has the shortest wavelength?",
        choices: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
        correctAnswer: "Gamma rays"
    },
    {
        question: "What is the formula for calculating kinetic energy?",
        choices: ["E = mc^2", "E = mv^2", "E = mgh", "E = 1/2mv^2"],
        correctAnswer: "E = 1/2mv^2"
    },
    {
        question: "In a concave mirror, where does the image of an object placed beyond the focal point form?",
        choices: ["At the focal point", "Behind the mirror", "In front of the mirror", "Between the focal point and mirror"],
        correctAnswer: "Behind the mirror"
    },
    {
        question: "What is the law of conservation of energy?",
        choices: [
            "Energy cannot be created nor destroyed, only transferred or converted.",
            "Energy always flows from hot to cold.",
            "The total energy of a closed system remains constant over time.",
            "Energy is directly proportional to mass and velocity."
        ],
        correctAnswer: "Energy cannot be created nor destroyed, only transferred or converted."
    },
    {
        question: "Which type of wave does not require a medium for propagation?",
        choices: ["Sound waves", "Water waves", "Light waves", "Seismic waves"],
        correctAnswer: "Light waves"
    },
    {
        question: "What is the unit of electric current?",
        choices: ["Volt", "Ampere", "Watt", "Ohm"],
        correctAnswer: "Ampere"
    },
    {
        question: "Which law describes the relationship between the pressure and volume of a gas at constant temperature?",
        choices: ["Boyle's Law", "Charles's Law", "Archimedes' Principle", "Pascal's Law"],
        correctAnswer: "Boyle's Law"
    },
    {
        question: "What is the SI unit of electric current?",
        choices: ["Volt", "Watt", "Ampere", "Ohm"],
        correctAnswer: "Ampere"
    },
    {
        question: "In the double-slit experiment, what phenomenon is observed when light or particles pass through two closely spaced slits?",
        choices: ["Refraction", "Diffraction", "Reflection", "Dispersion"],
        correctAnswer: "Diffraction"
    },
    {
        question: "Which of the following is a fundamental force responsible for radioactivity?",
        choices: ["Gravitational force", "Electromagnetic force", "Strong nuclear force", "Weak nuclear force"],
        correctAnswer: "Weak nuclear force"
    },
    {
        question: "According to Einstein's theory of relativity, what happens to time as an object approaches the speed of light?",
        choices: ["Slows down", "Speeds up", "Stops", "Reverses"],
        correctAnswer: "Slows down"
    },
    {
        question: "What is the primary purpose of a Fresnel lens?",
        choices: ["Amplifying sound", "Focusing light", "Measuring temperature", "Generating electricity"],
        correctAnswer: "Focusing light"
    },
    {
        question: "Which law of thermodynamics states that energy cannot be created nor destroyed, only converted from one form to another?",
        choices: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
        correctAnswer: "First Law"
    },
    {
        question: "What is the unit of measurement for force in the International System of Units (SI)?",
        choices: ["Newton", "Pascal", "Joule", "Watt"],
        correctAnswer: "Newton"
    },
    {
        question: "What does the acronym MRI stand for in the field of medical imaging?",
        choices: [
            "Magnetic Resonance Imaging",
            "Medical Radiographic Imaging",
            "Microscopic Resolution Instrument",
            "Molecular Radiology Inspection"
        ],
        correctAnswer: "Magnetic Resonance Imaging"
    },
    {
        question: "Which subatomic particle is shared in common between an atom and a positron?",
        choices: ["Electron", "Proton", "Neutron", "Positron"],
        correctAnswer: "Electron"
    },
    {
        question: "What phenomenon occurs when a sound wave reflects off a surface and the reflected wave combines with the incident wave, causing reinforcement or cancellation?",
        choices: ["Refraction", "Diffraction", "Interference", "Resonance"],
        correctAnswer: "Interference"
    },
    {
        question: "What does DRR stand for?",
        choices: ["Disaster Resource Recovery", "Developmental Risk Reduction", "Disaster Risk Reduction", "Defective Response Resilience"],
        correctAnswer: "Disaster Risk Reduction"
    },
    {
        question: "Which phase of disaster management does DRR primarily focus on?",
        choices: ["Preparedness", "Response", "Recovery", "Mitigation"],
        correctAnswer: "Mitigation"
    },
    {
        question: "What is the main goal of DRR?",
        choices: ["Quick response to disasters", "Minimizing the impact of disasters", "Efficient recovery after disasters", "Identifying new disaster risks"],
        correctAnswer: "Minimizing the impact of disasters"
    },
    {
        question: "Which is a key principle of DRR?",
        choices: ["Reactive approach", "Business as usual", "Sustainability", "Ignoring community engagement"],
        correctAnswer: "Sustainability"
    },
    {
        question: "What is a risk assessment in the context of DRR?",
        choices: ["Evaluating the impact of disasters", "Identifying potential hazards and vulnerabilities", "Assessing economic losses post-disaster", "Ignoring community feedback"],
        correctAnswer: "Identifying potential hazards and vulnerabilities"
    },
    {
        question: "Which of the following is an example of structural mitigation in DRR?",
        choices: ["Public awareness campaigns", "Building earthquake-resistant structures", "Emergency evacuation drills", "Donating relief supplies"],
        correctAnswer: "Building earthquake-resistant structures"
    },
    {
        question: "What role does community participation play in DRR?",
        choices: ["No significant role", "Limited to disaster response", "Enhances resilience and effectiveness", "Delays recovery efforts"],
        correctAnswer: "Enhances resilience and effectiveness"
    },
    {
        question: "Which type of hazard does DRR aim to address?",
        choices: ["Positive impacts", "Only natural disasters", "Only man-made disasters", "Both natural and man-made disasters"],
        correctAnswer: "Both natural and man-made disasters"
    },
    {
        question: "What is the Sendai Framework for DRR?",
        choices: ["A disaster response team", "International agreement for disaster risk reduction", "Disaster recovery fund", "Software for risk analysis"],
        correctAnswer: "International agreement for disaster risk reduction"
    },
    {
        question: "In DRR terminology, what does 'resilience' refer to?",
        choices: ["Immediate recovery efforts", "Capacity to absorb and adapt to shocks", "Ignoring community needs", "Post-disaster reconstruction"],
        correctAnswer: "Capacity to absorb and adapt to shocks"
    },
    {
        question: "What is the primary source of energy that drives Earth's climate system?",
        choices: ["Geothermal energy", "Solar energy", "Wind energy", "Hydroelectric energy"],
        correctAnswer: "Solar energy"
    },
    {
        question: "Which layer of the Earth's atmosphere contains the ozone layer?",
        choices: ["Troposphere", "Mesosphere", "Stratosphere", "Thermosphere"],
        correctAnswer: "Stratosphere"
    },
    {
        question: "What type of rock is formed from the cooling and solidification of molten magma?",
        choices: ["Sedimentary", "Metamorphic", "Igneous", "Fossilized"],
        correctAnswer: "Igneous"
    },
    {
        question: "What is the process by which rocks are broken down into smaller particles due to weathering and erosion?",
        choices: ["Subduction", "Deposition", "Sedimentation", "Mechanical weathering"],
        correctAnswer: "Mechanical weathering"
    },
    {
        question: "Which of the following is a greenhouse gas responsible for trapping heat in Earth's atmosphere?",
        choices: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
        correctAnswer: "Carbon dioxide"
    },
    {
        question: "The Richter scale is used to measure the intensity of what natural phenomenon?",
        choices: ["Hurricanes", "Tornadoes", "Earthquakes", "Volcanic eruptions"],
        correctAnswer: "Earthquakes"
    },
    {
        question: "What is the name of the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which layer of the Earth is composed mostly of iron and nickel?",
        choices: ["Crust", "Mantle", "Outer core", "Inner core"],
        correctAnswer: "Inner core"
    },
    {
        question: "What is the process by which water vapor changes into liquid water?",
        choices: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
        correctAnswer: "Condensation"
    },
    {
        question: "In which atmospheric layer does weather, including clouds and precipitation, occur?",
        choices: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correctAnswer: "Troposphere"
    },
    {
        question: "Protons have a positive charge.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Water is considered a universal solvent.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The chemical symbol for gold is Au.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Oxygen supports combustion.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Neutrons carry a negative charge.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "The pH scale measures the acidity or alkalinity of a substance.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Carbon dioxide is a compound composed of two oxygen atoms and one carbon atom.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Elements in the same column of the periodic table have similar chemical properties.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Protons and electrons have nearly the same mass.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Nitrogen makes up the majority of Earth's atmosphere.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The mitochondria are known as the powerhouse of the cell.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "All living organisms are composed of cells.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "DNA is a double-stranded molecule.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Photosynthesis is the process by which plants convert carbon dioxide and water into glucose using sunlight.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The human body has four primary types of tissue: epithelial, connective, muscular, and nervous.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Evolution is a theory that explains the changes in the inherited characteristics of biological populations over successive generations.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Ribosomes are responsible for protein synthesis in cells.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Viruses are considered living organisms.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Blood in the human body is classified as a connective tissue.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The pH scale measures the acidity or basicity of a solution, ranging from 0 to 14.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The derivative of a constant function is always zero.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The integral of a function represents the area under the curve.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The chain rule is used to differentiate composite functions.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The limit of a function as x approaches a specific value can be found by direct substitution.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "The product rule is used to differentiate the product of two functions.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "A local minimum of a function occurs where its derivative changes from positive to negative.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Integration is the reverse process of differentiation.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The mean value theorem states that there exists at least one point in the interval (a, b) where the derivative is equal to the average rate of change of the function.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The area between the x-axis and a curve can be calculated using a definite integral.",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "A critical point of a function is a point where the derivative is undefined.",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Is the derivative of a constant function always zero?",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Can a function have more than one vertical asymptote?",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "In a right-angled triangle, is the hypotenuse always the longest side?",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Is the natural logarithm of a negative number defined?",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Can a rational function have an infinite number of vertical asymptotes?",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Is the product of two negative numbers positive?",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Can a function have more than one horizontal asymptote?",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Is the square root of a negative number a real number?",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "The limit of a function as x approaches a certain value can never be equal to the function's value at that point. True or False?",
        choices: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "The derivative of a constant function is always zero. True or False?",
        choices: ["True", "False"],
        correctAnswer: "True"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 600;
let timerInterval;
let gameStarted = false;

function startQuiz() {
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const choicesContainer = document.getElementById("choices-container");

    questionContainer.innerHTML = questions[currentQuestionIndex].question;
    choicesContainer.innerHTML = "";

    if (questions[currentQuestionIndex].choices) {
        for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
            const choiceElement = document.createElement("div");
            choiceElement.className = "choice";
            choiceElement.innerHTML = `<input type="radio" name="choice" value="${questions[currentQuestionIndex].choices[i]}"> ${questions[currentQuestionIndex].choices[i]}`;
            choicesContainer.appendChild(choiceElement);
        }
    } else {
        // Handle the case where choices are not defined for the current question
        console.error("Choices are not defined for the current question");
    }
}


function submitAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (selectedChoice) {
        const userAnswer = selectedChoice.value;

        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
}

function startGame() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
    gameStarted = true;
    startTimer();
    startQuiz();
}

function startTimer() {
    const timerElement = document.getElementById("timer");

    if (gameStarted) {
        timerInterval = setInterval(() => {
            timeRemaining--;

            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;

            timerElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                showResult();
            }
        }, 1000);
    }
}

function endQuiz() {
    clearInterval(timerInterval);

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length} questions.`;

    document.getElementById("submit-btn").disabled = true;
}

document.addEventListener("DOMContentLoaded", startQuiz);