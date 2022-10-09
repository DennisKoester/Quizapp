let currentQuestion = 0;
let rightQuestions = 0
let AUDIO_SUCCESS = new Audio('/audio/success.mp3');
let AUDIO_FAIL = new Audio('/audio/fail.mp3');

function init() {
    showStartScreen();
}

function startQuiz(quiz) {
    showQuestionScreen();
    showQuestions(quiz);
}

function chooseQuiz(quiz) {
    chosenquiz = quiz;
    if (chosenquiz == 'questionsHTML') {
        startQuiz(quiz);
    }
    if (chosenquiz == 'questionsCSS') {
        startQuiz(quiz);
    }
    if (chosenquiz == 'questionsJS') {
        startQuiz(quiz);
    }
}

function showQuestions(quiz) {

    if (gameIsOver(quiz)) {
        // console.log('DONE')
        showEndScreen();
    } else {
        updateProgressBar(quiz)
        updateNextQuestion(quiz);
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

function restartQuiz() {
    document.getElementById('header-img').src = '/Quizapp Design/quiz-night.png'; // Changes the image
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
    document.getElementById('amountOfQuestions').innerHTML = questionsHTML.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = '/Quizapp Design/trophy-gabff6e205_640.png';
    document.getElementById('progress').style = 'display: none';
}

function updateNextQuestion(quiz) {
    let question = quiz[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar(quiz) {
    let percent = currentQuestion / quiz.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function gameIsOver(quiz) {
    return currentQuestion >= quiz.length;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

function showStartScreen() {
    document.getElementById('startScreen').style = '';
    document.getElementById('progress').style = 'display: none';
}

function showQuestionScreen() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('progress').style = '';
}