// Full WAEC‑style question pool
const questionPool = {
    Math: [
        { question: "Solve for x: 2x + 3 = 11.", answers: ["3","4","5","6"], correct: "4" },
        { question: "What is the value of 15% of 260?", answers: ["39","38","40","36"], correct: "39" },
        { question: "If angle A and B are complementary and A = 35°, find B.", answers: ["45°","55°","60°","75°"], correct: "55°" },
        { question: "Find the LCM of 12 and 18.", answers: ["36","54","18","24"], correct: "36" },
        { question: "Simplify: (3 × 2³) + 4².", answers: ["20","28","32","22"], correct: "28" },
        { question: "If x² = 49, x = ?", answers: ["±7","7 only","-7 only","0"], correct: "±7" },
        { question: "In triangle ABC, A = 90°, B = 45°, C = ?", answers: ["45°","60°","30°","90°"], correct: "45°" },
        { question: "Convert 3.75 to a fraction.", answers: ["15/4","5/2","7/4","3/5"], correct: "15/4" },
        { question: "Which is a factor of 42?", answers: ["6","8","5","9"], correct: "6" },
        { question: "Find HCF of 8, 16 and 24.", answers: ["8","4","2","6"], correct: "8" },
        { question: "What is 7 × 8 - 4?", answers: ["52","54","50","48"], correct: "52" },
        { question: "If y = 3x and x = 4, find y.", answers: ["9","12","15","18"], correct: "12" },
        { question: "10² × 10 = ?", answers: ["1000","100","10","10000"], correct: "1000" },
        { question: "Solve: 3(2x - 1) = 15.", answers: ["2","3","4","5"], correct: "3" },
        { question: "Find the perimeter of a rectangle with sides 5 and 12.", answers: ["34","17","40","36"], correct: "34" },
        { question: "45% of 200 = ?", answers: ["90","80","85","95"], correct: "90" },
        { question: "Divide: 144 ÷ 12.", answers: ["12","14","10","16"], correct: "12" },
        { question: "If 3x = 18, x = ?", answers: ["5","6","7","8"], correct: "6" },
        { question: "Area of triangle with base 6 and height 8.", answers: ["24","30","28","32"], correct: "24" },
        { question: "Find 5⁴.", answers: ["625","500","512","120"], correct: "625" }
    ],
    English: [
        { question: "Choose the correct meaning of ‘ambiguity’.", answers: ["Clarity","Doubtfulness","Excitement","Brightness"], correct: "Doubtfulness" },
        { question: "Choose the correct antonym of ‘scarce’.", answers: ["Plentiful","Rare","Small","Tiny"], correct: "Plentiful" },
        { question: "Find the synonym of ‘ardent’.", answers: ["Lazy","Passionate","Angry","Weak"], correct: "Passionate" },
        { question: "The correct plural of ‘criterion’ is:", answers: ["Criteria","Criterions","Criteries","Criterion"], correct: "Criteria" },
        { question: "Choose the word that best completes: She speaks English ___.", answers: ["Fluently","Fluent","Fluency","More fluent"], correct: "Fluently" },
        { question: "Identify the verb in: The crowd cheered loudly.", answers: ["crowd","cheered","loudly","The"], correct: "cheered" },
        { question: "Which sentence is correct?", answers: ["He go to school","He goes to school","He going to school","He gone to school"], correct: "He goes to school" },
        { question: "Choose the antonym of ‘ancient’.", answers: ["Old","Modern","Old‑fashioned","Aged"], correct: "Modern" },
        { question: "Correct spelling:", answers: ["Receive","Recieve","Receve","Reciv"], correct: "Receive" },
        { question: "Find the subject in: 'The students read the book.'", answers: ["students","book","read","The"], correct: "students" },
        { question: "The figure of speech in: “As brave as a lion” is:", answers: ["Metaphor","Simile","Hyperbole","Idiom"], correct: "Simile" },
        { question: "What is a homophone of 'pair'?", answers: ["pear","pare","peer","pier"], correct: "pear" },
        { question: "Correct tense: She ___ already left.", answers: ["had","has","have","is"], correct: "has" },
        { question: "The opposite of ‘ascend’ is:", answers: ["descend","hover","climb","rise"], correct: "descend" },
        { question: "Choose the correct article: ___ apple.", answers: ["An","A","The","None"], correct: "An" },
        { question: "Which is an adverb?", answers: ["quick","quickly","quickness","quicker"], correct: "quickly" },
        { question: "Choose the correct preposition in: He sat ___ the chair.", answers: ["on","in","at","by"], correct: "on" },
        { question: "‘Their’ is ___ than ‘there’.", answers: ["Possessive","Adverb","Verb","Noun"], correct: "Possessive" },
        { question: "Choose correct form: 'I ___ go.'", answers: ["will","would","will be","shall"], correct: "will" },
        { question: "Identify the object: She gave him a gift.", answers: ["She","gave","him","gift"], correct: "gift" }
    ],
    Chemistry: [
        { question: "The pH of pure water at 25°C is:", answers: ["7","1","14","0"], correct: "7" },
        { question: "Which element has atomic number 6?", answers: ["Carbon","Oxygen","Nitrogen","Hydrogen"], correct: "Carbon" },
        { question: "Formula of sodium chloride is:", answers: ["NaCl","KCl","Na2O","Cl2"], correct: "NaCl" },
        { question: "Which gas is evolved when hydrochloric acid reacts with zinc?", answers: ["Hydrogen","Oxygen","Nitrogen","Carbon dioxide"], correct: "Hydrogen" },
        { question: "The molar mass of CO2 is:", answers: ["44 g/mol","28 g/mol","32 g/mol","12 g/mol"], correct: "44 g/mol" },
        { question: "Which type of bond in water?", answers: ["Covalent","Ionic","Metallic","Hydrogen"], correct: "Covalent" },
        { question: "Common name for NaHCO3 is:", answers: ["Baking soda","Salt","Sugar","Lime"], correct: "Baking soda" },
        { question: "Which is an acid?", answers: ["HCl","NaOH","KNO3","CaCO3"], correct: "HCl" },
        { question: "The catalyst speeds up:", answers: ["Reaction","Temperature","Volume","Pressure"], correct: "Reaction" },
        { question: "Which is a halogen?", answers: ["Chlorine","Oxygen","Sodium","Calcium"], correct: "Chlorine" },
        { question: "The state of matter with fixed volume but not fixed shape:", answers: ["Liquid","Gas","Solid","Plasma"], correct: "Liquid" },
        { question: "Atomic number represents:", answers: ["Protons","Neutrons","Electrons","Mass number"], correct: "Protons" },
        { question: "pH < 7 indicates a(n):", answers: ["Acidic","Neutral","Basic","Alkaline"], correct: "Acidic" },
        { question: "Electrolysis involves ___ of ions.", answers: ["Movement","Creation","Destruction","Freezing"], correct: "Movement" },
        { question: "Formula for ammonia:", answers: ["NH3","CH4","H2O","CO2"], correct: "NH3" },
        { question: "Which is a base?", answers: ["NaOH","HCl","H2SO4","CO2"], correct: "NaOH" },
        { question: "Rust is mainly formed on ___ in presence of moisture.", answers: ["Iron","Aluminium","Copper","Lead"], correct: "Iron" },
        { question: "What is electroplating used for?", answers: ["Coating","Heating","Melting","Cooling"], correct: "Coating" },
        { question: "Avogadro’s number gives number of:", answers: ["Particles in mole","Volume of gas","Mass of water","Atoms in nucleus"], correct: "Particles in mole" },
        { question: "In titration, indicator shows:", answers: ["End point","Start point","Temperature","Pressure"], correct: "End point" }
    ],
    Physics: [
        { question: "Unit of force is:", answers: ["Newton","Watt","Pascal","Joule"], correct: "Newton" },
        { question: "Velocity is:", answers: ["Displacement/time","Distance/time","Speed/time","Acceleration/time"], correct: "Displacement/time" },
        { question: "Acceleration due to gravity is approx:", answers: ["9.8 m/s²","10 m/s","8.9 m/s","9.2 m/s²"], correct: "9.8 m/s²" },
        { question: "Ohm’s law states V = ___", answers: ["IR","I/R","R/I","I+R"], correct: "IR" },
        { question: "Work done is:", answers: ["Force × distance","Mass × velocity","Distance × speed","Force × speed"], correct: "Force × distance" },
        { question: "Which instrument measures current?", answers: ["Ammeter","Voltmeter","Ohmmeter","Barometer"], correct: "Ammeter" },
        { question: "Sound travels fastest in:", answers: ["Solids","Liquids","Gases","Vacuum"], correct: "Solids" },
        { question: "Light reflects according to:", answers: ["Angle of incidence = angle of reflection","More reflection","No reflection","All absorbed"], correct: "Angle of incidence = angle of reflection" },
        { question: "Energy is measured in:", answers: ["Joule","Newton","Watt","Pascal"], correct: "Joule" },
        { question: "Density = ___?", answers: ["Mass/volume","Volume/mass","Mass×volume","Mass+volume"], correct: "Mass/volume" },
        { question: "Force that opposes motion:", answers: ["Friction","Gravity","Tension","Lift"], correct: "Friction" },
        { question: "Reflection of light when hitting smooth surface:", answers: ["Specular","Diffuse","No reflection","Scattering"], correct: "Specular" },
        { question: "S.I unit of energy:", answers: ["Joule","Newton","Kelvin","Watt"], correct: "Joule" },
        { question: "Ohmmeter measures:", answers: ["Resistance","Current","Voltage","Temperature"], correct: "Resistance" },
        { question: "The slope of velocity-time graph is:", answers: ["Acceleration","Displacement","Distance","Speed"], correct: "Acceleration" },
        { question: "Heat is transfer of:", answers: ["Energy","Mass","Force","Distance"], correct: "Energy" },
        { question: "Projectile motion is affected by ___?", answers: ["Gravity","Lift","Magnetism","Density"], correct: "Gravity" },
        { question: "Which has highest elasticity?", answers: ["Solid","Liquid","Gas","Plasma"], correct: "Solid" },
        { question: "Refraction is bending of:", answers: ["Light","Sound","Heat","Magnetism"], correct: "Light" },
        { question: "SI unit of frequency is:", answers: ["Hertz","Newton","Watt","Joule"], correct: "Hertz" }
    ],
    Biology: [
        { question: "Basic unit of life is:", answers: ["Cell","Atom","Tissue","Organ"], correct: "Cell" },
        { question: "Photosynthesis occurs in:", answers: ["Chloroplast","Mitochondria","Ribosome","Nucleus"], correct: "Chloroplast" },
        { question: "Which transports water in plants?", answers: ["Xylem","Phloem","Leaves","Stem"], correct: "Xylem" },
        { question: "Human blood group with universal donor:", answers: ["O","A","B","AB"], correct: "O" },
        { question: "Which enzyme helps digestion?", answers: ["Amylase","Lipase","Pepsin","All"], correct: "All" },
        { question: "Which kingdom are fungi?", answers: ["Fungi","Animalia","Plantae","Monera"], correct: "Fungi" },
        { question: "What is osmosis?", answers: ["Movement of water","Movement of ions","Movement of air","Movement of heat"], correct: "Movement of water" },
        { question: "Respiration releases:", answers: ["Energy","Water","Salt","Sugar"], correct: "Energy" },
        { question: "Which part of cell contains DNA?", answers: ["Nucleus","Cytoplasm","Membrane","Ribosome"], correct: "Nucleus" },
        { question: "Which gas is needed for respiration?", answers: ["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], correct: "Oxygen" },
        { question: "The backbone of DNA is:", answers: ["Sugar & Phosphate","Proteins","Lipids","Water"], correct: "Sugar & Phosphate" },
        { question: "Enzymes are:", answers: ["Proteins","Lipids","Carbohydrates","Vitamins"], correct: "Proteins" },
        { question: "Which organ filters blood?", answers: ["Kidney","Liver","Heart","Lung"], correct: "Kidney" },
        { question: "Which blood vessel carries oxygenated blood?", answers: ["Artery","Vein","Capillary","Venule"], correct: "Artery" },
        { question: "Plants store food as:", answers: ["Starch","Glucose","Sucrose","Cellulose"], correct: "Starch" },
        { question: "Which vitamin is from sunlight?", answers: ["D","A","C","K"], correct: "D" },
        { question: "What does HIV attack?", answers: ["Immune cells","Red cells","Platelets","Bone"], correct: "Immune cells" },
        { question: "What causes malaria?", answers: ["Plasmodium","Virus","Bacteria","Fungus"], correct: "Plasmodium" },
        { question: "Which part of plant absorbs nutrients?", answers: ["Root","Stem","Leaf","Flower"], correct: "Root" },
        { question: "What is pollination?", answers: ["Transfer of pollen","Seed formation","Fertilization","Germination"], correct: "Transfer of pollen" }
    ]
};

// Game logic that picks a random set each load
let questions = [];
let currentIndex = 0;
let score = 0;

const subjectSelectionEl = document.getElementById('subject-selection');
const gameAreaEl = document.getElementById('game-area');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const restartBtn = document.getElementById('restart-btn');

function startGame(subject) {
    const pool = questionPool[subject];
    questions = pool.sort(() => Math.random() - 0.5).slice(0, 10); // pick random 10
    currentIndex = 0;
    score = 0;

    subjectSelectionEl.style.display = "none";
    gameAreaEl.style.display = "block";
    restartBtn.style.display = "none";

    showQuestion();
}

function showQuestion() {
    if (currentIndex >= questions.length) {
        questionEl.innerText = `🎉 You finished! Score: ${score}/${questions.length}`;
        answersEl.innerHTML = "";
        resultEl.innerText = "";
        progressEl.style.width = "100%";
        restartBtn.style.display = "block";
        return;
    }

    const q = questions[currentIndex];
    questionEl.innerText = q.question;
    answersEl.innerHTML = "";
    resultEl.innerText = "";
    progressEl.style.width = `${(currentIndex / questions.length) * 100}%`;
    scoreEl.innerText = `Score: ${score}`;

    q.answers.sort(() => Math.random() - 0.5).forEach(ans => {
        const btn = document.createElement('button');
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(btn, ans);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(button, ans) {
    const q = questions[currentIndex];
    if (ans === q.correct) {
        button.classList.add('correct');
        resultEl.innerText = "Correct! 🎉";
        score++;
    } else {
        button.classList.add('wrong');
        resultEl.innerText = `Wrong 😢 Correct: ${q.correct}`;
        [...answersEl.children].forEach(b => {
            if (b.innerText === q.correct) b.classList.add('correct');
        });
    }
    currentIndex++;
    setTimeout(showQuestion, 1300);
}

function restartGame() {
    subjectSelectionEl.style.display = "block";
    gameAreaEl.style.display = "none";
    restartBtn.style.display = "none";
}
