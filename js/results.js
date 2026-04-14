/*
  ============================================================
  RESULTS.JS — End Screen Builder
  ============================================================
*/

function showResults(history, finalScore, totalQuestions, topicName) {
  const percentage = totalQuestions
    ? Math.round((finalScore / totalQuestions) * 100)
    : 0;

  document.querySelector('#results-score-fraction').textContent =
    `${finalScore} / ${totalQuestions}`;

  document.querySelector('#results-score-percent').textContent =
    `${percentage}%`;

  document.querySelector('#results-topic-label').textContent =
    `Topic: ${topicName}`;

  const resultsList = document.querySelector('#results-list');
  resultsList.replaceChildren();

  history.forEach(function(entry, index) {
    const card = document.createElement('article');
    const outcomeClass = entry.isCorrect ? 'result-correct' : 'result-wrong';
    const icon = entry.isCorrect ? '\u2705' : '\u274C';

    card.classList.add('result-card', outcomeClass);

    const header = document.createElement('div');
    header.className = 'result-card-header';

    const iconEl = document.createElement('span');
    iconEl.className = 'result-icon';
    iconEl.textContent = icon;
    header.appendChild(iconEl);

    const scenarioText = document.createElement('p');
    scenarioText.className = 'result-scenario-text';

    const sourceLine = document.createElement('span');
    sourceLine.className = 'result-source';
    sourceLine.textContent = entry.chapter;
    scenarioText.appendChild(sourceLine);

    const scenarioLabel = document.createElement('strong');
    scenarioLabel.textContent = `Scenario ${index + 1}: `;
    scenarioText.appendChild(scenarioLabel);
    scenarioText.appendChild(document.createTextNode(entry.scenario));
    header.appendChild(scenarioText);

    card.appendChild(header);

    const answerLine = document.createElement('div');
    answerLine.className = 'result-answer-line';
    answerLine.appendChild(document.createTextNode('Your answer: '));

    const userAnswer = document.createElement('strong');
    userAnswer.textContent = entry.userAnswer;
    answerLine.appendChild(userAnswer);

    answerLine.appendChild(document.createTextNode(' | Correct answer: '));

    const correctAnswer = document.createElement('strong');
    correctAnswer.textContent = entry.correctAnswer;
    answerLine.appendChild(correctAnswer);

    card.appendChild(answerLine);

    if (!entry.isCorrect) {
      const explanationBlock = document.createElement('div');
      explanationBlock.className = 'result-explanation';

      const whyLabel = document.createElement('strong');
      whyLabel.textContent = 'Why: ';
      explanationBlock.appendChild(whyLabel);
      explanationBlock.appendChild(document.createTextNode(entry.explanation));

      card.appendChild(explanationBlock);
    }

    resultsList.appendChild(card);
  });

  document.querySelector('#screen-home').classList.add('hidden');
  document.querySelector('#screen-home').setAttribute('aria-hidden', 'true');
  document.querySelector('#screen-quiz').classList.add('hidden');
  document.querySelector('#screen-quiz').setAttribute('aria-hidden', 'true');
  document.querySelector('#screen-results').classList.remove('hidden');
  document.querySelector('#screen-results').removeAttribute('aria-hidden');

  const behavior = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';

  window.scrollTo({ top: 0, behavior: behavior });
}
