
//variables
var counter = 0;
var question = $('.question');
//user answer array
var a_array = [];
var questionCount = 0;
var correctAnswerCounter = 0;
//hide elements before start
$('.question').hide();
$('.answerBox').hide();
$('#next').hide();
$('#previous').hide();
//array of questions    
var allQuestions = [
    {
        question: "Who is the president of the USA?",
        correctAnswer: "Barack Obama"
    },

    {
        question: "What is my middle name?",
        correctAnswer: "Walker"
    },

    {
        question: "What is my wife's name?",
        correctAnswer: "Haley"
    },

];



//on start button click, display elements
$('.start span').click(function(){
    $('.start span').hide();
    $('.question').show();
    $('.answerBox').show();
    $('#next').show();
    $('#previous').show();
    question.append(allQuestions[0].question)
});

//end quiz
function endGame() {
if (questionCount === 3) {
    $('.question').hide();
    $('.answerBox').hide();
    $('#next').hide();
    $('#previous').hide();
    $('#title').hide();
    $('#finalscore').text("You got " + scoreBoard() + " answers right.");
} else {
    console.log("He's still playing...");
}
}

//on submit, check answer, proceed to next question button, clear input 
$('#submit').click(function(){
    a_array.push($('#answer').val());
    displayNext();
    questionCount++;
    endGame();
    console.log(questionCount);
});

//function to load next question
function displayNext () {
        var question = $('.question');
        counter = counter + 1;
        counter = counter % allQuestions.length;
        question.empty();
        $("#answer").val("");
        question.append(allQuestions[counter].question);
}

//display final score
function scoreBoard() {
    if (a_array[0] == allQuestions[0].correctAnswer){
        correctAnswerCounter++;
    } if (a_array[1] == allQuestions[1].correctAnswer) {
        correctAnswerCounter++;
    } if (a_array[2] == allQuestions[2].correctAnswer) {
        correctAnswerCounter++;
    }
    return correctAnswerCounter;
}

