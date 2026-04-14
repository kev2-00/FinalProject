/*
  ============================================================
  QUIZ.JS — The Quiz Engine
  ============================================================

  This version reads from the question bank in data.js so the
  project works whether you open index.html directly or serve it.
  ============================================================
*/

const TOPIC_QUESTIONS = window.QUIZ_DATA || {};
const ANSWER_OPTIONS = [
  { value: 'Ethical', label: 'Ethical', icon: '\u2696\uFE0F' },
  { value: 'Legal', label: 'Legal', icon: '\uD83D\uDCCB' },
  { value: 'Both', label: 'Both', icon: '\u2705' },
  { value: 'Neither', label: 'Neither', icon: '\u274C' }
];

let currentTopic = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answerHistory = [];

const screenHome = document.querySelector('#screen-home');
const screenQuiz = document.querySelector('#screen-quiz');
const screenResults = document.querySelector('#screen-results');

const quizTopicPill = document.querySelector('#quiz-topic-label');
const quizProgress = document.querySelector('#quiz-progress');
const quizScoreEl = document.querySelector('#quiz-score');
const quizLog = document.querySelector('#quiz-log');

const btnBackHome = document.querySelector('#btn-back-home');
const btnPlayAgain = document.querySelector('#btn-play-again');
const topicButtons = document.querySelectorAll('button.topic-card');

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollBehavior() {
  return prefersReducedMotion() ? 'auto' : 'smooth';
}

function clearElement(element) {
  element.replaceChildren();
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function createMessage(className, lines, role) {
  const box = document.createElement('div');
  box.className = className;

  if (role) {
    box.setAttribute('role', role);
  }

  lines.forEach(function(line) {
    let el;

    if (line.type === 'strong') {
      el = document.createElement('strong');
      el.textContent = line.text;
    } else if (line.type === 'small') {
      el = document.createElement('small');
      el.textContent = line.text;
    } else {
      el = document.createTextNode(line.text);
    }

    box.appendChild(el);

    if (line.breakAfter) {
      box.appendChild(document.createElement('br'));
    }
  });

  return box;
}

function showQuizMessage(className, lines, role) {
  clearElement(quizLog);
  quizLog.appendChild(createMessage(className, lines, role));
}

function resetQuizState() {
  currentTopic = null;
  currentQuestions = [];
  currentIndex = 0;
  score = 0;
  answerHistory = [];
  quizScoreEl.textContent = '0';
  quizProgress.textContent = '';
  clearElement(quizLog);
}

function returnHome() {
  resetQuizState();
  showScreen(screenHome);
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}

function syncTopicCounts() {
  topicButtons.forEach(function(btn) {
    const topicName = btn.dataset.topic;
    const count = Array.isArray(TOPIC_QUESTIONS[topicName]) ? TOPIC_QUESTIONS[topicName].length : 0;
    const countEl = btn.querySelector('.card-count');

    if (countEl) {
      countEl.textContent = `${count} scenario${count === 1 ? '' : 's'}`;
    }
  });
}

function isValidQuestion(question) {
  return Boolean(
    question &&
    typeof question.id === 'number' &&
    typeof question.topic === 'string' &&
    typeof question.chapter === 'string' &&
    typeof question.scenario === 'string' &&
    typeof question.correctAnswer === 'string' &&
    typeof question.explanation === 'string'
  );
}

function showScreen(screenEl) {
  [screenHome, screenQuiz, screenResults].forEach(function(screen) {
    screen.classList.add('hidden');
    screen.setAttribute('aria-hidden', 'true');
  });

  screenEl.classList.remove('hidden');
  screenEl.removeAttribute('aria-hidden');
}

function getTopicColorClass(topic) {
  switch (topic) {
    case 'CFAA':
      return 'cfaa';
    case 'DMCA':
      return 'dmca';
    default:
      return 'other';
  }
}

function loadQuestions(topicName) {
  showQuizMessage(
    'loading-message',
    [{ text: 'Loading questions...' }],
    'status'
  );

  const questions = TOPIC_QUESTIONS[topicName];

  if (!Array.isArray(questions) || questions.length === 0) {
    showQuizMessage(
      'error-message',
      [
        { type: 'strong', text: 'Could not load questions.', breakAfter: true },
        { text: `No questions are configured for "${topicName}".`, breakAfter: true },
        { type: 'small', text: 'Check js/data.js for the topic definition.' }
      ],
      'alert'
    );
    return null;
  }

  const invalidQuestion = questions.find(function(question) {
    return !isValidQuestion(question);
  });

  if (invalidQuestion) {
    showQuizMessage(
      'error-message',
      [
        { type: 'strong', text: 'Could not load questions.', breakAfter: true },
        { text: `Question ${invalidQuestion.id || '(unknown)'} is missing required fields.`, breakAfter: true },
        { type: 'small', text: 'Each question needs id, topic, chapter, scenario, correctAnswer, and explanation.' }
      ],
      'alert'
    );
    return null;
  }

  return shuffle(questions);
}

function startQuiz(topicName) {
  if (!TOPIC_QUESTIONS[topicName]) {
    showScreen(screenQuiz);
    showQuizMessage(
      'error-message',
      [
        { type: 'strong', text: 'Could not start quiz.', breakAfter: true },
        { text: `The topic "${topicName}" is not available.`, breakAfter: true },
        { type: 'small', text: 'Check the topic button data-topic value and js/data.js.' }
      ],
      'alert'
    );
    quizProgress.textContent = 'Unable to load topic';
    return;
  }

  currentTopic = topicName;
  currentQuestions = [];
  currentIndex = 0;
  score = 0;
  answerHistory = [];

  const colorClass = getTopicColorClass(topicName);
  quizTopicPill.textContent = topicName;
  quizTopicPill.className = `quiz-topic-pill pill-${colorClass}`;
  quizScoreEl.textContent = '0';

  showScreen(screenQuiz);

  const questions = loadQuestions(topicName);
  if (!questions) {
    quizProgress.textContent = 'Unable to load topic';
    return;
  }

  currentQuestions = questions;
  clearElement(quizLog);
  renderQuestion();
}

function renderQuestion() {
  if (!currentQuestions.length) {
    showQuizMessage(
      'error-message',
      [
        { type: 'strong', text: 'No questions available.', breakAfter: true },
        { type: 'small', text: 'The selected topic does not have any scenarios to display.' }
      ],
      'alert'
    );
    quizProgress.textContent = 'No questions available';
    return;
  }

  if (currentIndex >= currentQuestions.length) {
    showResults(answerHistory, score, currentQuestions.length, currentTopic);
    return;
  }

  quizProgress.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;

  const q = currentQuestions[currentIndex];
  const colorClass = getTopicColorClass(q.topic);

  const card = document.createElement('article');
  card.className = 'question-card';
  card.dataset.id = q.id;

  const strip = document.createElement('div');
  strip.className = `card-topic-strip strip-${colorClass}`;
  strip.textContent = q.topic;
  card.appendChild(strip);

  const body = document.createElement('div');
  body.className = 'card-body';

  const number = document.createElement('p');
  number.className = 'card-q-number';
  number.textContent = `Scenario ${currentIndex + 1}`;
  body.appendChild(number);

  const source = document.createElement('p');
  source.className = 'card-source';
  source.textContent = q.chapter;
  body.appendChild(source);

  const scenario = document.createElement('p');
  scenario.className = 'card-scenario';
  scenario.textContent = q.scenario;
  body.appendChild(scenario);

  const prompt = document.createElement('p');
  prompt.className = 'card-prompt';
  prompt.textContent = 'Is this action:';
  body.appendChild(prompt);

  const answerGrid = document.createElement('div');
  answerGrid.className = 'answer-grid';

  ANSWER_OPTIONS.forEach(function(option) {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.type = 'button';
    btn.dataset.answer = option.value;
    btn.textContent = `${option.icon} ${option.label}`;

    btn.addEventListener('click', function() {
      handleAnswer(q, option.value, card);
    });

    answerGrid.appendChild(btn);
  });

  body.appendChild(answerGrid);

  const feedbackPanel = document.createElement('div');
  feedbackPanel.className = 'feedback-panel';
  feedbackPanel.id = `feedback-${q.id}`;

  const feedbackResult = document.createElement('p');
  feedbackResult.className = 'feedback-result';
  feedbackResult.id = `feedback-result-${q.id}`;
  feedbackPanel.appendChild(feedbackResult);

  const feedbackExplanation = document.createElement('p');
  feedbackExplanation.className = 'feedback-explanation';
  feedbackExplanation.textContent = q.explanation;
  feedbackPanel.appendChild(feedbackExplanation);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-next';
  nextBtn.id = `btn-next-${q.id}`;
  nextBtn.type = 'button';
  nextBtn.textContent = 'Next Question \u2192';
  feedbackPanel.appendChild(nextBtn);

  body.appendChild(feedbackPanel);
  card.appendChild(body);
  quizLog.appendChild(card);

  setTimeout(function() {
    card.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
  }, 100);
}

function handleAnswer(questionData, selectedAnswer, cardEl) {
  const isCorrect = selectedAnswer === questionData.correctAnswer;

  if (isCorrect) {
    score++;
    quizScoreEl.textContent = score;
  }

  answerHistory.push({
    id: questionData.id,
    topic: questionData.topic,
    chapter: questionData.chapter,
    scenario: questionData.scenario,
    userAnswer: selectedAnswer,
    correctAnswer: questionData.correctAnswer,
    explanation: questionData.explanation,
    isCorrect: isCorrect
  });

  const allButtons = cardEl.querySelectorAll('.answer-btn');
  allButtons.forEach(function(btn) {
    btn.disabled = true;
  });

  allButtons.forEach(function(btn) {
    const btnAnswer = btn.dataset.answer;

    if (btnAnswer === questionData.correctAnswer) {
      btn.classList.add(btnAnswer === selectedAnswer ? 'correct' : 'reveal-correct');
    }

    if (btnAnswer === selectedAnswer && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const feedbackPanel = cardEl.querySelector(`#feedback-${questionData.id}`);
  const feedbackResult = cardEl.querySelector(`#feedback-result-${questionData.id}`);

  if (isCorrect) {
    feedbackResult.textContent = 'Correct!';
    feedbackResult.classList.add('result-correct');
    feedbackPanel.classList.add('feedback-correct');
  } else {
    feedbackResult.textContent = `Incorrect - the answer is: ${questionData.correctAnswer}`;
    feedbackResult.classList.add('result-wrong');
    feedbackPanel.classList.add('feedback-wrong');
  }

  feedbackPanel.classList.add('visible');

  const nextBtn = cardEl.querySelector(`#btn-next-${questionData.id}`);
  const isLastQuestion = currentIndex === currentQuestions.length - 1;

  if (isLastQuestion) {
    nextBtn.textContent = 'See Results';
    nextBtn.classList.add('btn-finish');
  }

  nextBtn.addEventListener('click', function() {
    nextBtn.disabled = true;

    if (isLastQuestion) {
      showResults(answerHistory, score, currentQuestions.length, currentTopic);
    } else {
      currentIndex++;
      renderQuestion();
    }
  }, { once: true });

  setTimeout(function() {
    feedbackPanel.scrollIntoView({ behavior: getScrollBehavior(), block: 'nearest' });
  }, 150);
}

topicButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    startQuiz(btn.dataset.topic);
  });
});

btnBackHome.addEventListener('click', function() {
  returnHome();
});

btnPlayAgain.addEventListener('click', function() {
  returnHome();
});

syncTopicCounts();
