var myQuestions = [
    {
        question: "What will be the output print(2++ * --2)" , //1
        answers : {
            a: '2',
            b: '1',
            c: '3'
        },
        correctAnswer: '3'
    },
    {
        question: "What does '#' stands for? ", //2
        answers: {
            a: 'predirector processor',
            b: 'per processor director',
            c: 'begin code'
        },
        correctAnswer: 'b'
    },
    {
        question:  "Which of the following is the correct way to use the standard namespace in C++?",  //3
        answers: {
            a: 'Using namespace std;',
            b: 'Using standard namespace;',
            c: 'Using namespace standard;'
        },
        correctAnswer: 'a'
    },
    {
        question: "What does HTML stand for?",  //4
        answers: {
            a: 'Hyper Trainer Marking Language',
            b: 'Hyper Text Markup Language',
            c: '1Hyper Text Marketing Language'
        },
        correctAnswer: 'b'
    },
    {
        question: "what is an array",  //5
        answers: {
            a: 'A Data Structure that contains group os elements',
            b: 'Is a format specifier',
            c: 'Is a data type'
        },
        correctAnswer: 'b'
    },
    
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        
        for (var i = 0; i < questions.length; i++) {

            answers = [];

           
            for (letter in questions[i].answers) {

             
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

           
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

       
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        
        var answerContainers = quizContainer.querySelectorAll('.answers');

        
        var userAnswer = '';
        var numCorrect = 0;

        
        for (var i = 0; i < questions.length; i++) {

           
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

          
            if (userAnswer === questions[i].correctAnswer) {
               
                numCorrect++;

               
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else {
                
                answerContainers[i].style.color = 'red';
            }
        }

       
        resultsContainer.innerHTML = "<span class='rr'> Congrats You Got </span>" + numCorrect + "<span class='rr'> out of </span>" + questions.length + "<span class='rr'> Questions Correct'</span>";
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}
