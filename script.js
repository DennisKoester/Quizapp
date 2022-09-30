let questions = [
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
        "question": "What does HTML stand for?",
        "answer_1": "Hyper Trainer Marking Language",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hyper Text Marketing Language",
        "answer_4": "Hyper Text Markup Leveler",
        "right_answer": 2
    },

    {
        "question": "What does HTML stand for?",
        "answer_1": "Hyper Trainer Marking Language",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hyper Text Marketing Language",
        "answer_4": "Hyper Text Markup Leveler",
        "right_answer": 2
    },



];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        console.log('DONE')
    } else {
        let question = questions[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    // console.log('Selected answer is ', selection);
    // console.log('selectedQuestionNumber is', selectedQuestionNumber)
    // console.log('Current question is ', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('right anser')
        document.getElementById(selection).parentNode.classList.add('bg-success');
        disableBtn();


    } else {
        console.log('wrong anser')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        disableBtn();

    }
    document.getElementById('next-btn').disabled = false;
}


/*  Disable all Buttons after selection */

// To disable: document.getElementById('id').style.pointerEvents = 'none'; 
// To re-enable: document.getElementById('id').style.pointerEvents = 'auto';  

// Use '' if you want to allow CSS rules to set the value 

function disableBtn() {
    let btns = document.getElementsByClassName('hover');

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.style.pointerEvents = 'none';
    }
}

function nextQuestion() {
    currentQuestion++; //Variable gets from 0 to 1
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


