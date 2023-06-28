const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
  setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
 currentQuestionIndex=0
  //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************
   setNextQuestion()
  //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************
   resetState()
  //****************************************
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: ' Giải Grand Slam đầu tiên trong năm là giải nào?',
    answers: [
      { text: ' Austrlia mở rộng', correct: true },
      { text: 'Roland Garos', correct: false }
    ]
  },
  {
    question: ' Hệ thống đô thị ở Việt Nam được phân thành mấy loại?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct:false  },
      { text: '5', correct:false },
      { text: '6', correct: true },
    ]
  },
  {
    question: ' Cầu thủ nào đạt danh hiệu Quả bóng vàng Việt Nam năm 2010?',
    answers: [
      { text: 'Minh Phương', correct: true },
      { text: 'Vũ Phong', correct: false },
      { text: 'Tấn Trường', correct: false },
      { text: 'Trọng Hoàng', correct: false }
    ]
  },
  {
    question: 'Tính đến năm 2012, thành phố nào 3 lần đăng cai Thế vận hội mùa hè?',
    answers: [
      { text: 'London', correct:true },
      { text: 'Paris', correct:false }
    ]
  }
]