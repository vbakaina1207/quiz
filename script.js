let quizData = [
    {
        id: 1,
        question : "What is the capital of Canada? ",
        answer: 'b',
        options:  [
            {
                id: 'a',
			    opt: 'Hongkong'
            },
            {
                id: 'b',
                opt: 'Ottawa',
            },
            {
                id: 'c',
                opt: 'Toronto', 
            }
			
        ], 
    },
    {
        id: 2,
        question : "What is the longest river in the world?",
        answer: 'a',
        options:  [
            {
                id: 'a',
			    opt: 'The Nile'
            },
            {
                id: 'b',
                opt: 'The Dnieper',
            },
            {
                id: 'c',
                opt: 'The Danube', 
            }
			
        ], 
    },
    {
        id: 3,
        question : "Which desert is the largest in the world?",
        answer: 'c',
        options: [
            {
                id: 'a',
			    opt: 'The Arctic desert'
            },
            {
                id: 'b',
                opt: 'The Kalahari Desert',
            },
            {
                id: 'c',
                opt: 'The Sahara Desert', 
            }
			
        ], 
    },
    {
        id: 4,
        question : "What is the smallest country in the world?",
        answer: 'b',
        options: [
            {
                id: 'a',
			    opt: 'Lichtenshtin'
            },
            {
                id: 'b',
                opt: 'Vatican City',
            },
            {
                id: 'c',
                opt: 'Italy', 
            }
			
        ],
    }
    , {
        id: 5,
        question : "Which country is known as the Land of the Rising Sun?",
        answer: 'a',
        options: [
            {
                id: 'a',
			    opt: 'Japan'
            },
            {
                id: 'b',
                opt: 'China',
            },
            {
                id: 'c',
                opt: 'Vietnam', 
            }
			
        ],
    },
    {
        id: 6,
        question : "What is the longest river in the USA?",
        answer: 'b',
        options: [
            {
                id: 'a',
			    opt: 'The Nile'
            },
            {
                id: 'b',
                opt: 'The Missouri River',
            },
            {
                id: 'c',
                opt: 'The Mississippi River', 
            }
			
        ],
    },
    {
        id: 7,
        question : "What is the capital of Italy?",
        answer: 'a',
        options:[
            {
                id: 'a',
			    opt: 'Rome'
            },
            {
                id: 'b',
                opt: 'Venice',
            },
            {
                id: 'c',
                opt: 'Milan', 
            }
			
        ],
    },
    {
        id: 8,
        question : "In which year did the Titanic sink?",
        answer: 'c',
        options: [
            {
                id: 'a',
			    opt: '1861'
            },
            {
                id: 'b',
                opt: '1952',
            },
            {
                id: 'c',
                opt: '1912', 
            }
			
        ],
    },
    {
        id: 9,
        question : "Who was the first woman to win a Nobel Prize (in 1903)?",
        answer: 'a',
        options:[
            {
                id: 'a',
			    opt: 'Marie Curie'
            },
            {
                id: 'b',
                opt: 'Edith Quimby',
            },
            {
                id: 'c',
                opt: 'Lise Meitner', 
            }
			
        ]    
    }
];
const questionElement = document.getElementById("question");
let optionsDiv = document.getElementById('options');
let submitBtn = document.getElementById('submit');
let cards = document.querySelectorAll('.card');
let newGame = document.querySelector('.btn');
let currentQuestion;
let scorePositiv = 0;
let scoreNegativ = 0;
let score = 0;


function selectQuestion(event) {
    currentQuestion = event.target.getAttribute('data-value');
    event.target.classList.add('yellow');
    if (!event.target.classList.contains('green')){
        showQuestion(currentQuestion);
        disableCard();
    }
    else {
        questionElement.innerHTML = "You have alresdy answerd this question!";
        optionsDiv.innerHTML = '';
        undisableCard();
    }
    
  }

function showQuestion(currentQuestion) {    
    optionsDiv.innerHTML = "";
    currentQuestion = (parseInt(currentQuestion) - 1);
    
    const question = quizData[currentQuestion];
    let i = question.id - 1;
    questionElement.innerText = question.question;
    let options = question.options;
    for(let i = 0; i< options.length; i++){
      const button = document.createElement("button");      
      button.textContent =  options[i].opt;
      optionsDiv.append(button);
      button.value = options[i].id;
      button.classList.add('btn-option');
        button.addEventListener("click", selectAnswer);          
    };
   
    
  }

function selectAnswer(e) {   
   
    let answerSelect = e.target.value; 
    let i = parseInt(quizData[parseInt(currentQuestion) - 1].id) - 1;
    const answer = quizData[parseInt(currentQuestion) - 1].answer;
    let btn = document.querySelectorAll('.btn-option');   
    if (answerSelect === answer) {   
        undisableCard(); 
        scorePositiv++; 
        score++;        
        e.target.classList.add('green');
        for(let i = 0; i< btn.length; i++) {
            btn[i].classList.remove('red');
            btn[i].setAttribute('disabled',true);
        }            
        cards[i].classList.add('green');
        document.querySelector('.positiv').textContent = scorePositiv;
        if (quizData[parseInt(currentQuestion) - 1].id === parseInt(cards[i].getAttribute('data-value'))) {
            cards[i].classList.add('green');
        } 
    } else  {
        disableCard();        
        e.target.classList.add('red');
        cards[i].classList.add('red');
        scoreNegativ++;
        document.querySelector('.negativ').textContent = scoreNegativ;
    }
    
    console.log(score);
    if (score == cards.length)
        showResult();
      
  }

  function game(){
    for (let i = 0; i< cards.length; i++) {
        cards[i].classList.remove('red');
        cards[i].classList.remove('green');
        cards[i].classList.remove('yellow');
    }
    optionsDiv.innerHTML = "";
    questionElement.innerHTML = '';
    scoreNegativ = 0;
    scorePositiv = 0;
    document.querySelector('.negativ').textContent = scoreNegativ;
    document.querySelector('.positiv').textContent = scorePositiv;
    undisableCard();

  }
  
  function showResult() {
    let score = 0;
    for (let i = 0; i< cards.length; i++) {
        if (cards[i].classList.contains('green'))
        score++;
    }
    if (score == cards.length) {
        optionsDiv.innerHTML = '';
        questionElement.innerHTML = 'Quiz result: you answered ' + cards.length + ' questions incorrectly ' + scoreNegativ + ' teimes';
    }

  }

  function disableCard() { 
    cards.forEach((div) => { 
      div.style.pointerEvents = 'none'; 
      div.style.opacity = '0.6'; 
      div.setAttribute('disabled', true); 
    }); 
}

function undisableCard() { 
    cards.forEach((div) => { 
      div.style.pointerEvents = 'all'; 
      div.style.opacity = '1'; 
      div.setAttribute('disabled', false); 
    }); 
}
  for (let i = 0; i< cards.length; i++)
    cards[i].addEventListener('click', selectQuestion);

    newGame.addEventListener('click', game);

