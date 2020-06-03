function goScience(adjective) {
    return "Yeah Science! Yeah " + adjective + "!!!!";
}

const chemicals = "chemicals";

console.log(goScience(chemicals));

const responses = [
    {
        question: 'What is the phase where chromosomes line up in mitosis?',
        response: 'Metaphase',
        isCorrect: true,
        isEssayQuestion: false
    },
    {
        question: 'What anatomical structure connects the stomach to the mouth?',
        response: 'Esophagus',
        isCorrect: true,
        isEssayQuestion: false
    },
    {
        question: 'What are lysosomes?',
        response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
        isCorrect: true,
        isEssayQuestion: true
    },
    {
        question: 'True or False: Prostaglandins can only constrict blood vessels.',
        response: 'True',
        isCorrect: false,
        isEssayQuestion: false
    }
];

// Prompt 1 : countCorrectQuestions

function countCorrectQuestions(responses) {
    // before the loop, no questions counted correct so initilized to 0
    let correctQuestions = 0;
    // loop through the responses checking for a conditional in each response
    for (let i = 0; i < responses.length; i++) {
        // if the response is true, make the correct questions tally increase by one
        if (responses[i].isCorrect === true) {
            correctQuestions++;
        }
    }
    // Return the tally to display somewhere 
    return correctQuestions;
}
// displaying the tally of correct questions on the console
console.log(countCorrectQuestions(responses));

// Prompt 2 : filterQuestionsByType

function filterQuestionsByType(responses, isEssayQuestion) {
    // Establish a new list of questions that are filtered to meet the desired criteria
    let essayQuestions = [];
    // loop through each response
    for (let i = 0; i < responses.length; i++) {
        // check if any of the questions matches the desired criteria
        if (responses[i].isEssayQuestion === isEssayQuestion) {
            // if so, then add that entire response to the new array
            essayQuestions.push(responses[i]);
        }
    }
    // return the list of questions that matches the desired type to display somewhere
    return essayQuestions;
}
// console log questions that are true for being an essay question
console.log(filterQuestionsByType(responses, true));

// Prompt 3 : checkForPlagiarism
// use include method

function checkForPlagiarism(responses, externalSource) {
    // presumed innocent until proven guilty, set to false
    let isPlagarized = false;
    // loop through each response in the array
    for (let i = 0; i < responses.length; i++) {
        // if the response matches the external source
        if (responses[i].response.includes(externalSource)) {
            // if it matches, change the plagarized indicator to true
            isPlagarized = true;
        }
    }
    // return the indicator true or false
    return isPlagarized;
}

// The external source for lysosome question
const lysosomeAnswer = "A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules."

// reports the verdict if the response is plagarized true or false
console.log(checkForPlagiarism(responses, lysosomeAnswer))