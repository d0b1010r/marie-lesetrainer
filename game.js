// ─────────────────────────────────────────────────
//  GAME LOGIC
// ─────────────────────────────────────────────────

let currentIndex = 0;
let answered = false;   // true once the current sentence was typed correctly

// ─── INIT ───
function init() {
  currentIndex = 0;
  answered = false;
  showSentence();
  document.getElementById('type-input').focus();
}

function showSentence() {
  const s = sentences[currentIndex];
  const raw = s.text;
  answered = false;

  // Step 1: mark the target word with a placeholder (case-insensitive)
  const escapedWord = s.typeWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordRegex = new RegExp('(' + escapedWord + ')', 'i');
  let highlighted = raw.replace(wordRegex, '[[TW]]$1[[/TW]]');

  // Step 2: highlight every B/b in the whole sentence
  highlighted = highlighted.replace(/([Bb])/g, '<span class="b-letter">$1</span>');

  // Step 3: replace placeholder with the target-word span
  highlighted = highlighted.replace(
    /\[\[TW\]\](.*?)\[\[\/TW\]\]/g,
    '<span class="target-word">$1</span>'
  );

  document.getElementById('sentence-display').innerHTML = highlighted;

  document.getElementById('type-input').value = '';
  document.getElementById('type-input').classList.remove('correct', 'wrong');
  document.getElementById('hint-text').textContent = s.hint;
  document.getElementById('btn-next').classList.remove('visible');

  // update progress
  const pct = Math.round((currentIndex / sentences.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('counter-badge').textContent =
    `Satz ${currentIndex + 1} von ${sentences.length}`;
}

// ─── INPUT HANDLING ───
document.getElementById('type-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    if (answered) {
      // already correct – go straight to next sentence
      nextSentence();
    } else {
      checkInput();
    }
  }
});

document.getElementById('type-input').addEventListener('input', function() {
  const inp = this.value;
  const target = sentences[currentIndex].typeWord;
  // live feedback if matches
  if (inp.toLowerCase() === target.toLowerCase()) {
    this.classList.add('correct');
    this.classList.remove('wrong');
  } else {
    this.classList.remove('correct', 'wrong');
  }
});

function checkInput() {
  const inp = document.getElementById('type-input').value.trim();
  const target = sentences[currentIndex].typeWord;

  if (inp.toLowerCase() === target.toLowerCase()) {
    answered = true;
    document.getElementById('type-input').classList.add('correct');
    document.getElementById('hint-text').textContent = '🎉 Super! Klasse gemacht! Drück Enter für weiter!';
    document.getElementById('btn-next').classList.add('visible');
    celebrateSentence();
  } else {
    document.getElementById('type-input').classList.add('wrong');
    document.getElementById('type-input').classList.remove('correct');
    document.getElementById('hint-text').textContent = `Probiere es nochmal! Suche das Wort: „${target}"`;
    setTimeout(() => {
      document.getElementById('type-input').classList.remove('wrong');
    }, 600);
  }
}

function nextSentence() {
  currentIndex++;
  if (currentIndex >= sentences.length) {
    showFinish();
  } else {
    showSentence();
    document.getElementById('type-input').focus();
  }
}

function showFinish() {
  document.getElementById('progress-bar').style.width = '100%';
  document.getElementById('main-card').style.display = 'none';
  document.getElementById('finish-screen').classList.add('show');
  setTimeout(() => bigFinaleAnimation(), 300);
}

function restartGame() {
  document.getElementById('finish-screen').classList.remove('show');
  document.getElementById('main-card').style.display = '';
  init();
}

// ─── START ───
init();
