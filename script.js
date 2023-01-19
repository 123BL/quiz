//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "What is an inventory?",
        optionA: "A list of items a person owned along with each item's value",
        optionB: "A place where scientific experiments are conducted",
        optionC: "A list of things that are similar ",
        optionD: "None of the above",
        correctOption: "optionA",
        correctPopUp: "Enslaved people were listed in house and farm inventories, among other items such as animals, tools, and furniture."
    },

    {
        question: "What is an abolitionist?",
        optionA: "A person who had a lot of skills",
        optionB: "A person who didn't like anything",
        optionC: "A person who fought to end the practice of slavery",
        optionD: "A person who knew where to find all the enslaved people ",
        correctOption: "optionC",
        correctPopUp: "An abolitionist did not believe in slavery and made an effort to work towards freeing the enslaved. They refused to own slaves, they felt Blacks should be paid the same as Whites for the same work, and they worked hard to convince other people through speeches and newspapers that slavery was wrong."
    },

    {
        question: "Which best describes an indentured servant: <br>(*Hint - see 'Other Sources of Colonial Labor' in the Life Before Enslavement box)",
        optionA: "Someone who is forced to work for someone else for the rest of their lives",
        optionB: "Someone who willingly signed a contract to work for an employer for a term of four to seven years and was freed after that time was done",
        optionC: "Someone who was born into servitude",
        optionD: "Someone who had a lot of problems with their teeth",
        correctOption: "optionB",
        correctPopUp: "Indentured servants made the choice to sell their time and labor to someone in exchange for things like ship fare to get to this country. In addition, the employer would provide them a place to sleep and food and clothing. At the end of their term of servitude, they were free."
    },

    {
        question: "What would some typical tasks be for the enslaved women of the house? <br> (*Hint- see the House and Kitchen section in the Daily Life box)",
        optionA: "Cooking and cleaning",
        optionB: "Laundry and sewing",
        optionC: "Candle making and child care",
        optionD: "All of the above",
        correctOption: "optionD",
        correctPopUp: "Women were responsible for a great number of tasks. In addition to the ones listed above, they were also responsible for kitchen gardens, soap making, hauling up heavy buckets of water from a well or stream, and all the food preparation, which included the slaughtering and cleaning of animals."
    },

    {
        question: "Who was born into slavery at Marlpit Hall and continued to work for the Taylor family after she was freed?",
        optionA: "Matilda",
        optionB: "Hannah",
        optionC: "Elizabeth",
        optionD: "Mary",
        correctOption: "optionC",
        correctPopUp: "Elizabeth Van Cleaf was born at Marlpit in 1806. She was freed at 21, but remained with the Taylor family. She had been Mary’s caretaker since she was eight years old, and worked for Mary for the next seven decades."
    },

    {
        question: "What was found Beneath the Floorboards of the slave quarters in Marlpit Hall?",
        optionA: "Shards",
        optionB: "Clamshells",
        optionC: "Pieces of clothing",
        optionD: "All of the above",
        correctOption: "optionD",
        correctPopUp: "The items found beneath the floorboards were evidence of Hoodoo, a religion that blended African traditions with Christian beliefs. Enslavers did not like Hoodoo because it held on to traditions from Africa, which they felt was an uncivilized place. The enslaved needed to hide the Hoodoo objects where they would not easily be seen if they wanted to be able to practice it without getting in trouble."
    },

    {
        question: "What type of traditional African song do we still hear in our music today?",
        optionA: "Jazz",
        optionB: "Call and response",
        optionC: "Hoodoo",
        optionD: "Spirituals",
        correctOption: "optionB",
        correctPopUp: "Call and response entails a person calling out to a group, who then respond back together right after. We still hear this in the music of today in the form of vocals and of clapping."
    },

    {
        question: "What is true about spirituals?",
        optionA: "They were sung by the enslaved to express emotions of religious devotion, joy, sorrow, and hope",
        optionB: "They were a form of resistance",
        optionC: "They could contain secret messages",
        optionD: "All of the above",
        correctOption: "optionD",
        correctPopUp: "All of the above are true. Spirituals were sung by the enslaved to express different emotions, and could contain secret messages that would help their chances of escape. Because the songs often protested the condition of enslavement, they are considered a form of resistance."
    },

    {
        question: "Pretending to be sick, breaking tools, burning meals, and running away were all forms of",
        optionA: "Not understanding what they were supposed to do",
        optionB: "Resistance",
        optionC: "Being bad",
        optionD: "Fooling around",
        correctOption: "optionB",
        correctPopUp: "There were many different ways to resist. Running away was the most extreme because it would come with a heavy punishment if the individual got caught. Little daily forms of resistance would be done to slow work production or protest their condition."
    },

    {
        question: "What is a primary source?",
        optionA: "When a person tells you something true",
        optionB: "Original items created during the time you are studying that help to tell you about that time period",
        optionC: "The best explanation you can find on a topic",
        optionD: "None of the above",
        correctOption: "optionB",
        correctPopUp: "Primary sources include diaries, newspapers, account books, maps, photographs, letters, and artifacts like tools or clothing."
    }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    document.getElementById("option-popup").innerHTML = correctPopUp;//i hope "option-popup" and "correctPopUp" are in the right spots, and not mixed up
//the new correctPopUp needs these things to work:
//the graphics taken from the "please choose an option" modal
//it needs to be in each question object thingy(done)
//it needs to be set invisible, only to be visible when the correct option is choosen
//the correctPopUp text needs to change along with the rest of the questions changing
//and probably other things too that i forgor
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            document.getElementById(correctPopUp).style.visibility = "true"
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 2000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}