let questionsHTML = [
    {
        "question": "Who developed HTML?",
        "answer_1": "Robbie-Williams",
        "answer_2": "Lady-Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "What does HTML stand for?",
        "answer_1": "Hyper Trainer Marking Language",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hyper Text Marketing Language",
        "answer_4": "Hyper Text Markup Leveler",
        "right_answer": 2
    },

    {
        "question": "Choose the correct HTML element for the largest heading:",
        "answer_1": "&lt;h6&gt;",
        "answer_2": "&lt;h1&gt;",
        "answer_3": "&lt;heading&gt;",
        "answer_4": "&lt;head&gt;",
        "right_answer": 2
    },

    {
        "question": "What is the correct HTML element for inserting a line break?",
        "answer_1": "&lt;br&gt;",
        "answer_2": "&lt;break&gt;",
        "answer_3": "&lt;lb&gt;",
        "answer_4": "&lt;bl&gt;",
        "right_answer": 1
    },

    {
        "question": "How can you make a numbered list?",
        "answer_1": "&lt;list&gt;",
        "answer_2": "&lt;dl&gt;",
        "answer_3": "&lt;ul&gt;",
        "answer_4": "&lt;ol&gt;",
        "right_answer": 4
    },
];

let questionCSS = [
    {
        "question": "What does CSS stand for?",
        "answer_1": "Computer Style Sheets",
        "answer_2": "Creative Style Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 3
    },

    {
        "question": "What is the correct HTML for referring to an external style sheet?",
        "answer_1": "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
        "answer_2": "&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;mystyle.css&quot;&gt;",
        "answer_3": "&lt;style src=&quot;mystyle.css&quot;&gt;",
        "answer_4": "&lt;style&gt;mystyle.css&lt;/style&gt;",
        "right_answer": 2
    },

    {
        "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
        "answer_1": "styles",
        "answer_2": "class",
        "answer_3": "font",
        "answer_4": "style",
        "right_answer": 4
    },

    {
        "question": "Which HTML attribute is used to define inline styles?",
        "answer_1": "In the &lt;body&gt; section",
        "answer_2": "In the &lt;head&gt; section",
        "answer_3": "At the end of the document",
        "answer_4": "In the &lt;footer&gt; section",
        "right_answer": 2
    },

    {
        "question": "Which is the correct CSS syntax?",
        "answer_1": "body:color=black;",
        "answer_2": "{body:color=black;}",
        "answer_3": "{body;color=black;}",
        "answer_4": "body {color: black;}",
        "right_answer": 4
    },
]

let questionsJS = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "answer_1": "&lt;js&gt;",
        "answer_2": "&lt;javascript&gt;",
        "answer_3": "&lt;scripting&gt;",
        "answer_4": "&lt;script&gt;",
        "right_answer": 4
    },

    {
        "question": "What is the correct syntax for referring to an external script called &quot;xxx.js&quot;?",
        "answer_1": "&lt;script name=&quot;xxx.js&chot;&gt;",
        "answer_2": "&lt;script src=&chot;xxx.js&chot;&gt;",
        "answer_3": "&lt;script href=&chot;xxx.js&chot;&gt;",
        "answer_4": "&lt;script url=&chot;xxx.js&chot;&gt;",
        "right_answer": 2
    },

    {
        "question": `What is the correct JavaScript syntax to change the content of the HTML element below?<br><br>
        "&lt;p id=&quot;demo&quot;&gt;This is a demonstration.&lt;/p&gt;;`,
        "answer_1": `#demo.innerHTML = &quot;Hello World!&quot;`,
        "answer_2": `document.getElementByName(&quot;p&quot;).innerHTML = &quot;Hello World!&quot;;`,
        "answer_3": `document.getElement(&quot;p&quot;).innerHTML = &quot;Hello World!&quot;;`,
        "answer_4": `document.getElementById(&quot;demo&quot;).innerHTML = &quot;Hello World!&quot;;`,
        "right_answer": 4
    },

    {
        "question": "How do you create a function in JavaScript?",
        "answer_1": "function myFunction()",
        "answer_2": "function:myFunction()",
        "answer_3": "function = myFunction()",
        "answer_4": "function = {myFunction()}",
        "right_answer": 2
    },

    {
        "question": "How to write an IF statement in JavaScript?",
        "answer_1": "if i == 5 then",
        "answer_2": "if (i == 5)",
        "answer_3": "if i = 5",
        "answer_4": "if i = 5 then",
        "right_answer": 2
    },
]

let currentQuestion = 0;
let rightQuestions = 0
let AUDIO_SUCCESS = new Audio('/audio/success.mp3');
let AUDIO_FAIL = new Audio('/audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questionsHTML.length;
    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        // console.log('DONE')
        showEndScreen();
    } else {
        updateProgressBar()
        updateNextQuestion();
    }
}

function answer(selection) {
    let question = questionsHTML[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    // console.log('Selected answer is ', selection);
    // console.log('selectedQuestionNumber is', selectedQuestionNumber)
    // console.log('Current question is ', question['right_answer']);

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        // console.log('right anser')
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.play();
        disableBtn();


    } else {
        // console.log('wrong anser')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
        disableBtn();

    }
    document.getElementById('next-btn').disabled = false;
}


/*  Disable all Buttons after selection */

/** 
 * ! To disable: document.getElementById('id').style.pointerEvents = 'none'; 
 * ! To re-enable: document.getElementById('id').style.pointerEvents = 'auto'; 
 * ! Use '' if you want to allow CSS rules to set the value
 */

function disableBtn() {
    let btns = document.getElementsByClassName('hover');

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.style.pointerEvents = 'none';
    }
}

function nextQuestion() {
    currentQuestion++; //! Variable gets from 0 to 1
    document.getElementById('next-btn').disabled = true;
    resetAnswerButtons();
    resetOnclick()
    showQuestion();
}

function resetAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function resetOnclick() {
    let btns = document.getElementsByClassName('hover');

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.classList.add("quiz-answer");
        btn.style.pointerEvents = 'auto';
    }
}

function restartQuiz() {
    document.getElementById('header-img').src = '/Quizapp Design/quiz-night.png'; // Changes the image
    document.getElementById('endScreen').style = 'display: none;'; // hide the end screen
    document.getElementById('questionBody').style = ''; // displays the questions screen

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('amountOfQuestions').innerHTML = questionsHTML.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = '/Quizapp Design/trophy-gabff6e205_640.png';
}

function updateNextQuestion() {
    let question = questionsHTML[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questionsHTML.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function gameIsOver() {
    return currentQuestion >= questionsHTML.length;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}