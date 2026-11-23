/**
 * T.R.A.N.S.F.O.R.M. Teaching Model & Grade 6 Camping Showcase
 * Interactive Application Logic (Polished & Bug-Free)
 * Toshkent Viloyati Pedagogik Mahorat Markazi
 */

// 1. Scene Items (Appendix B.1 - 10 objects in the illustrated campsite scene)
const SCENE_ITEMS = {
  1: { num: 1, en: "tent", uz: "chodir", sentence: "We sleep in a tent near the lake." },
  2: { num: 2, en: "campfire", uz: "gulxan", sentence: "We sit around the campfire in the evening." },
  3: { num: 3, en: "backpack", uz: "ryukzak", sentence: "My backpack is heavy." },
  4: { num: 4, en: "tree", uz: "daraxt", sentence: "There are green pine trees around the campsite." },
  5: { num: 5, en: "mountain", uz: "tog‘", sentence: "High snow-capped mountains surround the valley." },
  6: { num: 6, en: "lake", uz: "ko‘l", sentence: "The blue lake is clean and calm." },
  7: { num: 7, en: "sun", uz: "quyosh", sentence: "The sun is shining brightly in the clear sky." },
  8: { num: 8, en: "lantern", uz: "fonus", sentence: "The lantern gives light in the tent." },
  9: { num: 9, en: "log", uz: "g‘o‘la / o‘tin", sentence: "We sit on wooden logs near the campfire." },
  10: { num: 10, en: "bird", uz: "qush", sentence: "Wild birds are flying across the clouds." }
};

// 2. 12 Flashcard Vocabulary Items (Appendix B.2 & B.3)
const CAMPING_DATA = [
  { id: 1, en: "tent", uz: "chodir", sentence: "We sleep in a tent near the lake.", icon: "assets/items/tent.svg", letter: "A" },
  { id: 2, en: "campfire", uz: "gulxan", sentence: "We sit around the campfire in the evening.", icon: "assets/items/campfire.svg", letter: "B" },
  { id: 3, en: "backpack", uz: "ryukzak", sentence: "My backpack is heavy.", icon: "assets/items/backpack.svg", letter: "C" },
  { id: 4, en: "flashlight", uz: "qoʻl fonari", sentence: "I use a flashlight at night.", icon: "assets/items/flashlight.svg", letter: "D" },
  { id: 5, en: "compass", uz: "kompas", sentence: "The compass shows north.", icon: "assets/items/compass.svg", letter: "E" },
  { id: 6, en: "sleeping bag", uz: "uyqu xaltasi", sentence: "My sleeping bag is warm.", icon: "assets/items/sleeping_bag.svg", letter: "F" },
  { id: 7, en: "map", uz: "xarita", sentence: "Let’s look at the map.", icon: "assets/items/map.svg", letter: "G" },
  { id: 8, en: "water bottle", uz: "suv idishi", sentence: "Take a water bottle with you.", icon: "assets/items/water_bottle.svg", letter: "H" },
  { id: 9, en: "marshmallows", uz: "zefir", sentence: "We roast marshmallows on sticks.", icon: "assets/items/marshmallows.svg", letter: "I" },
  { id: 10, en: "binoculars", uz: "durbin", sentence: "She looks at birds with binoculars.", icon: "assets/items/binoculars.svg", letter: "J" },
  { id: 11, en: "fishing rod", uz: "qarmoq", sentence: "He catches a fish with a fishing rod.", icon: "assets/items/fishing_rod.svg", letter: "K" },
  { id: 12, en: "lantern", uz: "fonus", sentence: "The lantern gives light in the tent.", icon: "assets/items/lantern.svg", letter: "L" }
];

// 3. Word Search Grid Definition (12x12)
const WS_GRID_LETTERS = [
  ['F','K','E','P','N','B','B','W','C','S','T','K'],
  ['K','Y','F','L','U','P','I','T','O','T','C','C'],
  ['I','B','L','P','Y','W','N','C','B','E','Y','J'],
  ['V','T','A','W','O','J','O','Y','M','N','W','L'],
  ['C','L','S','C','A','O','C','L','F','T','U','A'],
  ['A','D','H','P','K','B','U','G','J','E','H','N'],
  ['M','M','L','M','P','P','L','C','M','A','P','T'],
  ['P','F','I','O','M','S','A','I','E','N','S','E'],
  ['F','I','G','Y','N','L','R','C','W','M','H','R'],
  ['I','E','H','C','F','E','S','H','K','W','H','N'],
  ['R','A','T','P','T','F','I','J','A','E','N','S'],
  ['E','L','U','T','C','O','M','P','A','S','S','K']
];

// Target words and exact coordinates in the 12x12 grid
const WS_TARGET_WORDS = [
  { word: "CAMPFIRE", cells: [[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0]], found: false, colorClass: "found-0" },
  { word: "FLASHLIGHT", cells: [[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2]], found: false, colorClass: "found-1" },
  { word: "BINOCULARS", cells: [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6]], found: false, colorClass: "found-2" },
  { word: "BACKPACK", cells: [[2,1],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7],[9,8]], found: false, colorClass: "found-3" },
  { word: "TENT", cells: [[1,9],[2,9],[3,9],[4,9]], found: false, colorClass: "found-4" },
  { word: "LANTERN", cells: [[3,11],[4,11],[5,11],[6,11],[7,11],[8,11],[9,11]], found: false, colorClass: "found-5" },
  { word: "COMPASS", cells: [[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10]], found: false, colorClass: "found-6" },
  { word: "MAP", cells: [[6,8],[6,9],[6,10]], found: false, colorClass: "found-7" }
];

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initSceneExplorer();
  renderVocabularyCards();
  initFlashAndGuessGame();
  initMatchingGame();
  initGapFillGame();
  initWordSearchGame();
  initLessonPlanTimer();
  initRubricCalculator();
  initModals();
  initSpeechSynthesis();
});

/* ==========================================================================
   SPEECH SYNTHESIS HELPER
   ========================================================================== */
function speakText(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")));
    if (naturalVoice) utterance.voice = naturalVoice;
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("Speech synthesis error:", err);
  }
}

function initSpeechSynthesis() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }
}

/* ==========================================================================
   TAB NAVIGATION SYSTEM
   ========================================================================== */
function initTabs() {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchTab(targetId);
    });
  });

  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
}

function switchTab(tabId) {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  tabPanes.forEach(pane => {
    pane.classList.toggle("active", pane.id === tabId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   SCENE EXPLORER (APPENDIX B.1) - FIXED & ROCK SOLID
   ========================================================================== */
let sceneQuizActive = false;
let currentQuizTarget = null;
let currentActivePin = 1;

function initSceneExplorer() {
  const container = document.getElementById("scene-interactive-mount");
  if (!container) return;

  attachSceneEvents();
  selectSceneItem(1);

  // Quick Chips
  const chips = document.querySelectorAll(".scene-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const num = parseInt(chip.getAttribute("data-number"));
      selectSceneItem(num);
    });
  });

  // Quiz Mode Toggle
  const quizBtn = document.getElementById("btn-scene-quiz-mode");
  if (quizBtn) {
    quizBtn.addEventListener("click", () => {
      toggleSceneQuiz();
    });
  }

  // Explore Mode Button
  const exploreBtn = document.getElementById("btn-scene-explore-mode");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      if (sceneQuizActive) toggleSceneQuiz();
    });
  }
}

function attachSceneEvents() {
  const svg = document.getElementById("camping-scene-svg");
  if (!svg) return;

  // 1. Pin Badges (1 to 10)
  const pinBadges = svg.querySelectorAll(".pin-badge");
  pinBadges.forEach(pin => {
    const num = parseInt(pin.getAttribute("data-number"));
    pin.style.cursor = "pointer";

    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      handlePinClick(num);
    });

    pin.addEventListener("mouseenter", () => {
      highlightSceneTarget(num, true);
    });

    pin.addEventListener("mouseleave", () => {
      highlightSceneTarget(num, false);
    });
  });

  // 2. Illustrated Scene Objects (tent, campfire, backpack, tree, mountain, lake, sun, lantern, log, bird)
  const hotspots = svg.querySelectorAll(".scene-hotspot");
  hotspots.forEach(spot => {
    const target = parseInt(spot.getAttribute("data-target"));
    spot.style.cursor = "pointer";

    spot.addEventListener("click", (e) => {
      e.stopPropagation();
      handlePinClick(target);
    });

    spot.addEventListener("mouseenter", () => {
      highlightSceneTarget(target, true);
    });

    spot.addEventListener("mouseleave", () => {
      highlightSceneTarget(target, false);
    });
  });
}

function highlightSceneTarget(num, isHover) {
  const svg = document.getElementById("camping-scene-svg");
  if (!svg) return;
  const pin = svg.querySelector(`.pin-badge[data-number="${num}"]`);
  const spot = svg.querySelector(`.scene-hotspot[data-target="${num}"]`);

  if (isHover) {
    pin?.classList.add("highlighted");
    spot?.classList.add("highlighted");
  } else {
    if (currentActivePin !== num) {
      pin?.classList.remove("highlighted");
      spot?.classList.remove("highlighted");
    }
  }
}

function handlePinClick(pinNumber) {
  if (sceneQuizActive) {
    handleQuizAnswer(pinNumber);
  } else {
    selectSceneItem(pinNumber);
  }
}

function selectSceneItem(pinNumber) {
  const item = SCENE_ITEMS[pinNumber];
  if (!item) return;

  currentActivePin = pinNumber;

  const numBadge = document.getElementById("scene-active-num");
  const enEl = document.getElementById("scene-active-en");
  const uzEl = document.getElementById("scene-active-uz");
  const sentEl = document.getElementById("scene-active-sentence");
  const speakBtn = document.getElementById("scene-active-speak-btn");

  if (numBadge) numBadge.textContent = item.num;
  if (enEl) enEl.textContent = item.en;
  if (uzEl) uzEl.textContent = item.uz;
  if (sentEl) sentEl.textContent = `"${item.sentence}"`;

  if (speakBtn) {
    speakBtn.onclick = () => speakText(`${item.en}. ${item.sentence}`);
  }

  // Update chips
  document.querySelectorAll(".scene-chip").forEach(chip => {
    chip.classList.toggle("active", parseInt(chip.getAttribute("data-number")) === pinNumber);
  });

  // Highlight active pin & hotspot on SVG
  const svg = document.getElementById("camping-scene-svg");
  if (svg) {
    svg.querySelectorAll(".pin-badge").forEach(p => {
      p.classList.toggle("highlighted", parseInt(p.getAttribute("data-number")) === pinNumber);
    });
    svg.querySelectorAll(".scene-hotspot").forEach(s => {
      s.classList.toggle("highlighted", parseInt(s.getAttribute("data-target")) === pinNumber);
    });
  }
}

function toggleSceneQuiz() {
  const quizBtn = document.getElementById("btn-scene-quiz-mode");
  const exploreBtn = document.getElementById("btn-scene-explore-mode");
  const promptBox = document.getElementById("scene-quiz-prompt-box");

  sceneQuizActive = !sceneQuizActive;

  if (sceneQuizActive) {
    quizBtn?.classList.add("active");
    exploreBtn?.classList.remove("active");
    promptBox?.classList.remove("hidden");
    pickNextSceneQuizItem();
  } else {
    quizBtn?.classList.remove("active");
    exploreBtn?.classList.add("active");
    promptBox?.classList.add("hidden");
    selectSceneItem(1);
  }
}

function pickNextSceneQuizItem() {
  const keys = Object.keys(SCENE_ITEMS);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  currentQuizTarget = SCENE_ITEMS[randKey];

  const promptText = document.getElementById("scene-quiz-prompt-text");
  if (promptText) {
    promptText.innerHTML = `Qani, rasmdan <strong>"${currentQuizTarget.en.toUpperCase()}" (${currentQuizTarget.uz})</strong> qayerdaligini toping va ustiga bosing!`;
    promptText.style.color = "var(--slate-900)";
  }
  speakText(`Find: ${currentQuizTarget.en}`);
}

function handleQuizAnswer(selectedNum) {
  const promptText = document.getElementById("scene-quiz-prompt-text");

  if (selectedNum === currentQuizTarget.num) {
    triggerConfetti();
    speakText("Correct! Well done!");

    selectSceneItem(selectedNum);

    if (promptText) {
      promptText.innerHTML = `<span style="color:#15803d; font-weight:800;">🎉 Barakalla! To‘g‘ri! / Correct!</span> Siz "${currentQuizTarget.en}" (${currentQuizTarget.uz}) obyektini topdingiz!`;
    }

    setTimeout(() => {
      if (sceneQuizActive) {
        pickNextSceneQuizItem();
      }
    }, 1400);
  } else {
    const wrongItem = SCENE_ITEMS[selectedNum];
    speakText("Try again!");

    if (promptText) {
      promptText.innerHTML = `<span style="color:#dc2626; font-weight:700;">Qaytadan urinib ko‘ring!</span> Siz <strong>${selectedNum} - ${wrongItem ? wrongItem.en : ''} (${wrongItem ? wrongItem.uz : ''})</strong> ni bosdingiz. Qidirilayotgan so‘z: <strong>"${currentQuizTarget.en.toUpperCase()}" (${currentQuizTarget.uz})</strong>`;
    }
  }
}

/* ==========================================================================
   VOCABULARY 12 CARDS GRID (APPENDIX B.2 & B.3)
   ========================================================================== */
function renderVocabularyCards() {
  const container = document.getElementById("vocab-cards-grid");
  if (!container) return;

  container.innerHTML = "";

  CAMPING_DATA.forEach(item => {
    const card = document.createElement("div");
    card.className = "vocab-card";
    card.innerHTML = `
      <div class="vocab-img-wrap">
        <img src="${item.icon}" alt="${item.en}" loading="lazy">
      </div>
      <div class="vocab-card-header">
        <div class="vocab-en-title">${item.en}</div>
        <div class="vocab-num-badge">№ ${item.id}</div>
      </div>
      <div class="vocab-uz-title">${item.uz}</div>
      <div class="vocab-sentence-box">
        "${item.sentence}"
      </div>
      <div class="vocab-card-footer">
        <button class="btn-card-audio" data-en="${item.en}">
          <span>🔊</span> Eshitish (Audio)
        </button>
        <span style="font-size: 0.78rem; color: var(--slate-400); font-weight:700;">Karta: ${item.letter}</span>
      </div>
    `;

    const audioBtn = card.querySelector(".btn-card-audio");
    audioBtn.addEventListener("click", () => {
      speakText(`${item.en}. ${item.sentence}`);
    });

    container.appendChild(card);
  });
}

/* ==========================================================================
   FLASH AND GUESS CLASSROOM GAME
   ========================================================================== */
let currentFlashIndex = 0;

function initFlashAndGuessGame() {
  const playBtn = document.getElementById("btn-flash-start");
  const nextBtn = document.getElementById("btn-flash-next");
  const revealBtn = document.getElementById("btn-flash-reveal");

  if (playBtn) playBtn.addEventListener("click", startFlashRound);
  if (nextBtn) nextBtn.addEventListener("click", startFlashRound);
  if (revealBtn) revealBtn.addEventListener("click", revealFlashAnswer);
}

function startFlashRound() {
  const imgDisplay = document.getElementById("flash-card-img");
  const wordDisplay = document.getElementById("flash-word-reveal");
  const timerBar = document.getElementById("flash-timer-bar");
  const revealBtn = document.getElementById("btn-flash-reveal");
  const playBtn = document.getElementById("btn-flash-start");
  const nextBtn = document.getElementById("btn-flash-next");

  currentFlashIndex = Math.floor(Math.random() * CAMPING_DATA.length);
  const item = CAMPING_DATA[currentFlashIndex];

  if (wordDisplay) wordDisplay.textContent = "Diqqat bilan qarang...";
  if (revealBtn) revealBtn.style.display = "inline-flex";
  if (nextBtn) nextBtn.style.display = "none";
  if (playBtn) playBtn.style.display = "none";

  if (imgDisplay) {
    imgDisplay.src = item.icon;
    imgDisplay.style.opacity = "1";
    imgDisplay.style.filter = "none";
  }

  if (timerBar) {
    timerBar.style.transition = "none";
    timerBar.style.width = "100%";
    setTimeout(() => {
      timerBar.style.transition = "width 2s linear";
      timerBar.style.width = "0%";
    }, 50);
  }

  setTimeout(() => {
    if (imgDisplay) {
      imgDisplay.style.filter = "blur(18px) grayscale(100%)";
    }
    if (wordDisplay) {
      wordDisplay.textContent = "Bu qaysi so‘z edi? / What was it?";
    }
  }, 2000);
}

function revealFlashAnswer() {
  const item = CAMPING_DATA[currentFlashIndex];
  const imgDisplay = document.getElementById("flash-card-img");
  const wordDisplay = document.getElementById("flash-word-reveal");
  const revealBtn = document.getElementById("btn-flash-reveal");
  const nextBtn = document.getElementById("btn-flash-next");

  if (imgDisplay) imgDisplay.style.filter = "none";
  if (wordDisplay) {
    wordDisplay.innerHTML = `<span style="color:var(--amber-400); font-weight:800; font-size:1.4rem;">${item.en.toUpperCase()}</span> — ${item.uz}`;
    speakText(item.en);
  }
  if (revealBtn) revealBtn.style.display = "none";
  if (nextBtn) nextBtn.style.display = "inline-flex";
}

/* ==========================================================================
   HANDOUT 1: INTERACTIVE MATCHING GAME (BI-DIRECTIONAL & ROCK-SOLID)
   ========================================================================== */
let matchSelectedLetter = null;
let matchSelectedWordId = null;
let pairedMatches = {};

const MATCH_SOLUTIONS = {
  1: "E", 2: "L", 3: "A", 4: "J", 5: "C", 6: "H",
  7: "F", 8: "B", 9: "K", 10: "I", 11: "D", 12: "G"
};

function initMatchingGame() {
  const letterCards = document.querySelectorAll(".match-img-item");
  const wordCards = document.querySelectorAll(".match-word-item");
  const resetBtn = document.getElementById("btn-match-reset");
  const checkBtn = document.getElementById("btn-match-check");

  letterCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("paired")) return;
      const letter = card.getAttribute("data-letter");

      letterCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      matchSelectedLetter = letter;
      checkPairAttempt();
    });
  });

  wordCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("paired")) return;
      const id = parseInt(card.getAttribute("data-id"));

      wordCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      matchSelectedWordId = id;
      checkPairAttempt();
    });
  });

  if (resetBtn) resetBtn.addEventListener("click", resetMatchGame);
  if (checkBtn) checkBtn.addEventListener("click", checkMatchGameAnswers);
}

function checkPairAttempt() {
  if (!matchSelectedLetter || !matchSelectedWordId) return;

  const correctLetter = MATCH_SOLUTIONS[matchSelectedWordId];
  const wordCard = document.querySelector(`.match-word-item[data-id="${matchSelectedWordId}"]`);
  const letterCard = document.querySelector(`.match-img-item[data-letter="${matchSelectedLetter}"]`);

  if (correctLetter === matchSelectedLetter) {
    pairedMatches[matchSelectedWordId] = matchSelectedLetter;
    if (wordCard) {
      wordCard.classList.remove("selected");
      wordCard.classList.add("paired");
      const badge = wordCard.querySelector(".matched-badge");
      if (badge) badge.textContent = `[${matchSelectedLetter}] ✓`;
    }
    if (letterCard) {
      letterCard.classList.remove("selected");
      letterCard.classList.add("paired");
    }

    speakText("Good!");
    matchSelectedLetter = null;
    matchSelectedWordId = null;
    updateMatchScore();
  } else {
    wordCard?.classList.add("shake-error");
    letterCard?.classList.add("shake-error");
    setTimeout(() => {
      wordCard?.classList.remove("shake-error", "selected");
      letterCard?.classList.remove("shake-error", "selected");
    }, 600);
    matchSelectedLetter = null;
    matchSelectedWordId = null;
  }
}

function updateMatchScore() {
  const count = Object.keys(pairedMatches).length;
  const scoreEl = document.getElementById("match-score-counter");
  if (scoreEl) scoreEl.textContent = `${count} / 12`;

  if (count === 12) {
    triggerConfetti();
  }
}

function resetMatchGame() {
  pairedMatches = {};
  matchSelectedLetter = null;
  matchSelectedWordId = null;

  document.querySelectorAll(".match-img-item, .match-word-item").forEach(card => {
    card.classList.remove("selected", "paired", "shake-error");
    const badge = card.querySelector(".matched-badge");
    if (badge) badge.textContent = "___";
  });

  const scoreEl = document.getElementById("match-score-counter");
  if (scoreEl) scoreEl.textContent = `0 / 12`;
}

function checkMatchGameAnswers() {
  for (const [id, letter] of Object.entries(MATCH_SOLUTIONS)) {
    const wordCard = document.querySelector(`.match-word-item[data-id="${id}"]`);
    const letterCard = document.querySelector(`.match-img-item[data-letter="${letter}"]`);
    if (wordCard) {
      wordCard.classList.add("paired");
      const badge = wordCard.querySelector(".matched-badge");
      if (badge) badge.textContent = `[${letter}] ✓`;
    }
    if (letterCard) letterCard.classList.add("paired");
    pairedMatches[id] = letter;
  }
  updateMatchScore();
}

/* ==========================================================================
   HANDOUT 2: GAP FILL SENTENCES
   ========================================================================== */
const GAP_FILL_ANSWERS = {
  1: "tent",
  2: "campfire",
  3: "backpack",
  4: "flashlight",
  5: "compass",
  6: "sleeping bag",
  7: "map",
  8: "water bottle",
  9: "marshmallows",
  10: "binoculars"
};

function initGapFillGame() {
  const checkBtn = document.getElementById("btn-gap-check");
  const resetBtn = document.getElementById("btn-gap-reset");

  if (checkBtn) checkBtn.addEventListener("click", checkGapFillAnswers);
  if (resetBtn) resetBtn.addEventListener("click", resetGapFill);
}

function checkGapFillAnswers() {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const select = document.getElementById(`gap-select-${i}`);
    if (!select) continue;

    const val = select.value.trim().toLowerCase();
    const correct = GAP_FILL_ANSWERS[i].toLowerCase();

    if (val === correct) {
      select.classList.remove("incorrect");
      select.classList.add("correct");
      score++;
    } else {
      select.classList.remove("correct");
      select.classList.add("incorrect");
    }
  }

  const scoreEl = document.getElementById("gap-score-display");
  if (scoreEl) {
    scoreEl.textContent = `Natija: ${score} / 10`;
    scoreEl.style.display = "inline-block";
  }

  if (score === 10) triggerConfetti();
}

function resetGapFill() {
  for (let i = 1; i <= 10; i++) {
    const select = document.getElementById(`gap-select-${i}`);
    if (select) {
      select.value = "";
      select.classList.remove("correct", "incorrect");
    }
  }
  const scoreEl = document.getElementById("gap-score-display");
  if (scoreEl) scoreEl.style.display = "none";
}

/* ==========================================================================
   HANDOUT 4: PLAYABLE WORD SEARCH (12x12 GRID - CLEAN DRAG & CLICK)
   ========================================================================== */
let isMouseDown = false;
let startCell = null;
let currentHighlightedCells = [];
let foundWordsCount = 0;

function initWordSearchGame() {
  const gridContainer = document.getElementById("wordsearch-grid-mount");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 12; c++) {
      const cell = document.createElement("div");
      cell.className = "ws-cell";
      cell.textContent = WS_GRID_LETTERS[r][c];
      cell.setAttribute("data-row", r);
      cell.setAttribute("data-col", c);

      cell.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isMouseDown = true;
        startCell = { r, c };
        highlightLine(startCell, { r, c });
      });

      cell.addEventListener("mouseenter", () => {
        if (isMouseDown && startCell) {
          highlightLine(startCell, { r, c });
        }
      });

      cell.addEventListener("click", () => {
        if (!startCell) {
          startCell = { r, c };
          highlightLine(startCell, { r, c });
        } else {
          highlightLine(startCell, { r, c });
          validateWordSelection();
          startCell = null;
        }
      });

      gridContainer.appendChild(cell);
    }
  }

  document.addEventListener("mouseup", () => {
    if (isMouseDown) {
      isMouseDown = false;
      validateWordSelection();
      startCell = null;
    }
  });

  const resetBtn = document.getElementById("btn-ws-reset");
  if (resetBtn) resetBtn.addEventListener("click", resetWordSearch);
}

function highlightLine(start, end) {
  clearSelection();

  const dr = end.r - start.r;
  const dc = end.c - start.c;
  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

  // Must be strictly horizontal, vertical, or 45-degree diagonal
  const isHorizontal = dr === 0;
  const isVertical = dc === 0;
  const isDiagonal = Math.abs(dr) === Math.abs(dc);

  if (!isHorizontal && !isVertical && !isDiagonal) {
    const startEl = document.querySelector(`.ws-cell[data-row="${start.r}"][data-col="${start.c}"]`);
    if (startEl) {
      startEl.classList.add("selecting");
      currentHighlightedCells.push({ r: start.r, c: start.c, letter: WS_GRID_LETTERS[start.r][start.c] });
    }
    return;
  }

  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  for (let i = 0; i <= steps; i++) {
    const curR = start.r + i * stepR;
    const curC = start.c + i * stepC;
    const cellEl = document.querySelector(`.ws-cell[data-row="${curR}"][data-col="${curC}"]`);
    if (cellEl) {
      cellEl.classList.add("selecting");
      currentHighlightedCells.push({ r: curR, c: curC, letter: WS_GRID_LETTERS[curR][curC] });
    }
  }
}

function clearSelection() {
  document.querySelectorAll(".ws-cell.selecting").forEach(el => {
    el.classList.remove("selecting");
  });
  currentHighlightedCells = [];
}

function validateWordSelection() {
  if (currentHighlightedCells.length === 0) return;

  const formedWord = currentHighlightedCells.map(c => c.letter).join("");
  const reversedWord = formedWord.split("").reverse().join("");

  const matchedTarget = WS_TARGET_WORDS.find(t => !t.found && (t.word === formedWord || t.word === reversedWord));

  if (matchedTarget) {
    matchedTarget.found = true;
    foundWordsCount++;

    matchedTarget.cells.forEach(([r, c]) => {
      const cellEl = document.querySelector(`.ws-cell[data-row="${r}"][data-col="${c}"]`);
      if (cellEl) {
        cellEl.classList.remove("selecting");
        cellEl.classList.add(matchedTarget.colorClass);
      }
    });

    const pill = document.querySelector(`.ws-word-pill[data-word="${matchedTarget.word}"]`);
    if (pill) pill.classList.add("found");

    speakText(matchedTarget.word);

    const counterEl = document.getElementById("ws-found-counter");
    if (counterEl) counterEl.textContent = `${foundWordsCount} / 8`;

    if (foundWordsCount === 8) {
      triggerConfetti();
    }
  } else {
    clearSelection();
  }

  currentHighlightedCells = [];
}

function resetWordSearch() {
  foundWordsCount = 0;
  startCell = null;
  WS_TARGET_WORDS.forEach(t => t.found = false);

  document.querySelectorAll(".ws-cell").forEach(cell => {
    cell.className = "ws-cell";
  });

  document.querySelectorAll(".ws-word-pill").forEach(pill => {
    pill.classList.remove("found");
  });

  const counterEl = document.getElementById("ws-found-counter");
  if (counterEl) counterEl.textContent = `0 / 8`;
}

/* ==========================================================================
   45-MINUTE LESSON PLAN LIVE TIMER & HIGHLIGHTER
   ========================================================================== */
let timerSeconds = 45 * 60;
let timerInterval = null;
let isTimerRunning = false;

const STAGE_INTERVALS = [
  { stage: 1, start: 0, end: 2 },
  { stage: 2, start: 2, end: 7 },
  { stage: 3, start: 7, end: 15 },
  { stage: 4, start: 15, end: 19 },
  { stage: 5, start: 19, end: 23 },
  { stage: 6, start: 23, end: 28 },
  { stage: 7, start: 28, end: 36 },
  { stage: 8, start: 36, end: 40 },
  { stage: 9, start: 40, end: 43 },
  { stage: 10, start: 43, end: 45 }
];

function initLessonPlanTimer() {
  const playBtn = document.getElementById("btn-timer-start");
  const pauseBtn = document.getElementById("btn-timer-pause");
  const resetBtn = document.getElementById("btn-timer-reset");

  if (playBtn) playBtn.addEventListener("click", startClassTimer);
  if (pauseBtn) pauseBtn.addEventListener("click", pauseClassTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetClassTimer);

  updateTimerDisplay();
  highlightActiveStage(0);
}

function startClassTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
      const elapsedMin = (45 * 60 - timerSeconds) / 60;
      highlightActiveStage(elapsedMin);
    } else {
      pauseClassTimer();
    }
  }, 1000);
}

function pauseClassTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
}

function resetClassTimer() {
  pauseClassTimer();
  timerSeconds = 45 * 60;
  updateTimerDisplay();
  highlightActiveStage(0);
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-digits");
  if (!display) return;
  const min = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  display.textContent = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function highlightActiveStage(elapsedMinutes) {
  let activeStageNum = 1;
  for (const item of STAGE_INTERVALS) {
    if (elapsedMinutes >= item.start && elapsedMinutes < item.end) {
      activeStageNum = item.stage;
      break;
    }
  }

  document.querySelectorAll(".timeline-row").forEach(row => {
    const s = parseInt(row.getAttribute("data-stage"));
    row.classList.toggle("active-stage", s === activeStageNum);
  });
}

/* ==========================================================================
   15-POINT RUBRIC CALCULATOR
   ========================================================================== */
const rubricScores = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3 };

function initRubricCalculator() {
  const buttons = document.querySelectorAll(".rubric-score-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const criterion = parseInt(btn.getAttribute("data-crit"));
      const score = parseInt(btn.getAttribute("data-score"));

      rubricScores[criterion] = score;

      document.querySelectorAll(`.rubric-score-btn[data-crit="${criterion}"]`).forEach(b => {
        b.classList.remove("selected");
      });
      btn.classList.add("selected");

      calculateRubricTotal();
    });
  });

  calculateRubricTotal();
}

function calculateRubricTotal() {
  let total = 0;
  for (const c in rubricScores) {
    total += rubricScores[c];
  }

  const scoreNum = document.getElementById("rubric-total-num");
  const levelBadge = document.getElementById("rubric-level-badge");
  const feedbackText = document.getElementById("rubric-feedback-text");

  if (scoreNum) scoreNum.textContent = `${total} / 15`;

  let level = "";
  let feedback = "";

  if (total >= 13) {
    level = "Juda yaxshi natija (Very Good Achievement)";
    feedback = "O‘quvchilar kamping mavzusi bo‘yicha lug‘at va jumlalarni to‘liq o‘zlashtirgan, erkin muloqot qilib, guruhda hamjihatlikda loyiha rejasini taqdim etdilar.";
  } else if (total >= 10) {
    level = "Yaxshi natija (Good Achievement)";
    feedback = "O‘quvchilar so‘zlardan to‘g‘ri foydalanmoqda. Keyingi darsda jumlalarni to‘liq ifodalash va sabablarni batafsil tushuntirishga e’tibor qaratish tavsiya etiladi.";
  } else if (total >= 7) {
    level = "Rivojlanayotgan (Developing)";
    feedback = "Asosiy tushunchalar shakllangan. So‘z birikmalari va gap qoliplari bilan ko‘proq mashq bajarish zarur.";
  } else {
    level = "Qo‘shimcha yordam zarur (Needs Further Support)";
    feedback = "O‘quvchiga rasmli lug‘at kartalari va tayyor iboralar (sentence starters) orqali individual yordam ko‘rsatish lozim.";
  }

  if (levelBadge) levelBadge.textContent = level;
  if (feedbackText) feedbackText.textContent = `Tavsiya: "${feedback}"`;
}

/* ==========================================================================
   MODAL CONTROLS & ABSTRACT LANGUAGE TOGGLE
   ========================================================================== */
function initModals() {
  const answerKeyBtn = document.getElementById("btn-open-answer-key");
  const modal = document.getElementById("answer-key-modal");
  const closeBtn = document.getElementById("btn-close-answer-key");

  if (answerKeyBtn && modal) {
    answerKeyBtn.addEventListener("click", () => modal.classList.add("open"));
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }

  const printBtns = document.querySelectorAll(".btn-trigger-print");
  printBtns.forEach(btn => {
    btn.addEventListener("click", () => window.print());
  });

  const abstractUzBtn = document.getElementById("btn-abstract-uz");
  const abstractEnBtn = document.getElementById("btn-abstract-en");
  const abstractUzBox = document.getElementById("abstract-content-uz");
  const abstractEnBox = document.getElementById("abstract-content-en");

  if (abstractUzBtn && abstractEnBtn) {
    abstractUzBtn.addEventListener("click", () => {
      abstractUzBtn.classList.add("active");
      abstractEnBtn.classList.remove("active");
      if (abstractUzBox) abstractUzBox.style.display = "block";
      if (abstractEnBox) abstractEnBox.style.display = "none";
    });

    abstractEnBtn.addEventListener("click", () => {
      abstractEnBtn.classList.add("active");
      abstractUzBtn.classList.remove("active");
      if (abstractUzBox) abstractUzBox.style.display = "none";
      if (abstractEnBox) abstractEnBox.style.display = "block";
    });
  }
}

/* ==========================================================================
   LIGHTWEIGHT CONFETTI GENERATOR
   ========================================================================== */
function triggerConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "99999";
  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");
  const colors = ["#246a51", "#d97706", "#f59e0b", "#0284c7", "#ec4899", "#10b981"];
  const particles = [];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.alpha -= 0.015;

      if (p.alpha > 0) {
        alive = true;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  update();
}