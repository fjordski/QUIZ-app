(function(){
//variables
var next = $('#next');
var previous = $('#previous');
var counter = 0;


//array of questions    
var allQuestions = [
    {
        question: "Who is the president of the USA?",
        choices: ["Barack", "Hillary", "Satan"],
        correctAnswer: 1
    },

    {
        question: "What is my middle name?",
        choices: ["Walker", "Billy", "Steven"],
        correctAnswer: 1
    },

    {
        question: "What is my wife's name?",
        choices: ["Steve", "Haley", "Whopper"],
        correctAnswer: 2
    },

];

//function to load next question
function displayNext () {
        var question = $('.question');
        counter = counter + 1;
        counter = counter % allQuestions.length;
        question.empty();
        question.append(allQuestions[counter].question);

}

//function to load previous question
function displayPrevious () {
        var question = $('.question');
         if (counter === 0) { // i would become 0
        counter = allQuestions.length; // so put it at the other end of the array
    }
        counter = counter - 1; // decrease by one
        question.empty();
        question.append(allQuestions[counter].question);
}

//answers
var opt1 = $('#opt1');
var opt2 = $('#opt2');
var opt3 = $('#opt3');

//load answers for loaded question
function loadAnswers (){
        opt1.text("butt");
}


//next button functionality
$('#next').click(function(){
    displayNext();
    loadAnswers();
});

//previous button functionality 
$('#previous').click(function(){
    displayPrevious();
});








})();