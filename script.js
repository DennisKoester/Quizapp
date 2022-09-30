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
        "question": "Who developed HTML?",
        "answer_1": "Robbie-Williams",
        "answer_2": "Lady-Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Who developed HTML?",
        "answer_1": "Robbie-Williams",
        "answer_2": "Lady-Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Who developed HTML?",
        "answer_1": "Robbie-Williams",
        "answer_2": "Lady-Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    // console.log('Selected answer is ', selection);
    // console.log('selectedQuestionNumber is', selectedQuestionNumber)
    // console.log('Current question is ', question['right_answer']);

    if (selectedQuestionNumber == 3) {
        console.log('Right Answer');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        disableBtn();


    } else {
        console.log('Wrong Answer');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        disableBtn();

    }
    document.getElementById('next-btn').disabled = false;
}


/*  Disable all Buttons after selection */

function disableBtn(){
    let btns = document.getElementsByClassName('card');

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.classList.remove("quiz-answer");
        btn.onclick = null;
    }
}

