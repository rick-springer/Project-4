var myQuestions = [
	{
		question: "Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes]",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},
	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Ever been told you had a stroke?",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Thinking about your mental health, for how many days during the past 30 days was your mental health not good?",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},	{
		question: "Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
		answers: {
			a: 'Yes',
			b: 'No',
		},
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}