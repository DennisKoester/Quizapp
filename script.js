let currentQuestion = 0;
let rightQuestions = 0
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let questions = [];


function init() {
    showStartScreen();
}


function startQuiz(quiz) {
    questions = quiz;
    resetAll();
    showQuestionScreen();
    showQuestions();
    document.getElementById('header-img').src = `${questions[0]['question-image']}`;
}


function showQuestions() {

    if (gameIsOver()) {
        // console.log('DONE')
        showEndScreen();
        updateProgressBar();
    } else {
        updateProgressBar()
        updateNextQuestion();
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    // console.log('Selected answer is ', selection);
    // console.log('selectedQuestionNumber is', selectedQuestionNumber)
    // console.log('Current question is ', question['right_answer']);
    disableBtns();

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        // console.log('right anser')
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.play();

    } else {
        // console.log('wrong anser')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();

    }
    document.getElementById('next-btn').disabled = false;
}


/*  Disable all Buttons after selection */

/** 
 * ! To disable: document.getElementById('id').style.pointerEvents = 'none'; 
 * ! To re-enable: document.getElementById('id').style.pointerEvents = 'auto'; 
 * ! Use '' if you want to allow CSS rules to set the value
 */

function disableBtns() {
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
    showQuestions();
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


function resetAll() {
    resetAnswerButtons();
    resetOnclick();
    restartQuiz();
}


function restartQuiz() {
    document.getElementById('header-img').src = 'Quizapp Design/quiz-night.png'; // Changes the image
    document.getElementById('endScreen').style = 'display: none;'; // hide the end screen
    document.getElementById('questionBody').style = ''; // displays the questions screen
    document.getElementById('progress').style = '';
    document.getElementById('questionBody').style = 'display: none';

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}


function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'Quizapp Design/trophy-gabff6e205_640.png';
}


function updateNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function updateProgressBar() {
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;

    document.getElementById('all-questions').innerHTML = `${questions.length}`;
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}


function showStartScreen() {
    document.getElementById('startScreen').style = '';
    document.getElementById('progress').style = 'display: none';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('header-img').src = 'Quizapp Design/quiz-night.png'
}


function showQuestionScreen() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('progress').style = '';
}