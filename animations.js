// ─────────────────────────────────────────────────
//  ANIMATION ENGINE
// ─────────────────────────────────────────────────

const animations = [
  animRainbowWave,
  animConfetti,
  animStarBurst,
  animFloatUnicorns,
  animHearts,
  animSparkles,
  animBalloons,
  animBigEmoji,
  animFireworks,
  animBubbles,
  animRainbow,
  animMagic
];

let lastAnimIndex = -1;

function clearLayer() {
  document.getElementById('anim-layer').innerHTML = '';
}

function playRandomAnimation() {
  let idx;
  do { idx = Math.floor(Math.random() * animations.length); }
  while (idx === lastAnimIndex);
  lastAnimIndex = idx;
  animations[idx]();
}

// Play 3 animations in sequence – more and longer party!
function celebrateSentence() {
  playRandomAnimation();
  setTimeout(() => playRandomAnimation(), 1400);
  setTimeout(() => playRandomAnimation(), 2900);
}

// GAAAANZ viel Party am Ende mit großem Einhorn!
function bigFinaleAnimation() {
  animConfetti();
  setTimeout(animRainbowWave,    600);
  setTimeout(animStarBurst,     1200);
  setTimeout(animFloatUnicorns, 1800);
  setTimeout(animHearts,        2600);
  setTimeout(animFireworks,     3400);
  setTimeout(animSparkles,      4200);
  setTimeout(animBalloons,      5000);
  setTimeout(animMagic,         5800);
  setTimeout(animRainbow,       6600);
  setTimeout(animConfetti,      7400);  // zweites Mal Konfetti!
  setTimeout(animBigEmoji,      8200);
  setTimeout(animFloatUnicorns, 9000);  // nochmal Einhörner!
  setTimeout(animStarBurst,     9800);
}

// 1. Rainbow Wave
function animRainbowWave() {
  clearLayer();
  const wave = document.createElement('div');
  wave.className = 'rainbow-wave';
  document.getElementById('anim-layer').appendChild(wave);
  setTimeout(clearLayer, 1800);
}

// 2. Confetti  (increased particle count and duration)
function animConfetti() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const colors = ['#b06fd8','#f472b6','#60a5fa','#fde047','#a78bfa','#34d399'];
  for (let i = 0; i < 120; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-20px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = (8 + Math.random() * 12) + 'px';
    p.style.height = (8 + Math.random() * 12) + 'px';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    p.style.animationDuration = (1.5 + Math.random() * 2.5) + 's';
    p.style.animationDelay = (Math.random() * 0.8) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 4500);
}

// 3. Star Burst from center
function animStarBurst() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const emojis = ['⭐','✨','💫','🌟'];
  for (let i = 0; i < 24; i++) {
    const s = document.createElement('div');
    s.className = 'star-burst';
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = (i / 24) * 360;
    const dist = 130 + Math.random() * 100;
    const dx = Math.cos(angle * Math.PI / 180) * dist + 'px';
    const dy = Math.sin(angle * Math.PI / 180) * dist + 'px';
    s.style.setProperty('--dx', dx);
    s.style.setProperty('--dy', dy);
    s.style.left = '50%';
    s.style.top = '50%';
    s.style.animationDelay = (Math.random() * 0.2) + 's';
    layer.appendChild(s);
  }
  setTimeout(clearLayer, 1500);
}

// 4. Floating Unicorns
function animFloatUnicorns() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = '🦄';
    p.style.left = (5 + Math.random() * 90) + 'vw';
    p.style.top = (40 + Math.random() * 50) + 'vh';
    p.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
    p.style.animationDuration = (1.1 + Math.random() * 1) + 's';
    p.style.animationDelay = (Math.random() * 0.5) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 2800);
}

// 5. Hearts
function animHearts() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const hearts = ['💜','💗','💕','❤️','🩷','💙'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    p.style.left = (5 + Math.random() * 90) + 'vw';
    p.style.top = (20 + Math.random() * 70) + 'vh';
    p.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
    p.style.animationDuration = (1.2 + Math.random() * 1) + 's';
    p.style.animationDelay = (Math.random() * 0.6) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 3000);
}

// 6. Sparkles
function animSparkles() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = '✨';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = (10 + Math.random() * 80) + 'vh';
    p.style.fontSize = (1 + Math.random() * 2.2) + 'rem';
    p.style.animationDuration = (1 + Math.random() * 1) + 's';
    p.style.animationDelay = (Math.random() * 0.5) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 2500);
}

// 7. Balloons
function animBalloons() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const balloons = ['🎈','🎀','🎊','🎉'];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = balloons[Math.floor(Math.random() * balloons.length)];
    p.style.left = (5 + Math.random() * 90) + 'vw';
    p.style.top = (50 + Math.random() * 40) + 'vh';
    p.style.fontSize = (1.8 + Math.random() * 2) + 'rem';
    p.style.animationDuration = (1.4 + Math.random() * 1.2) + 's';
    p.style.animationDelay = (Math.random() * 0.6) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 3200);
}

// 8. Big Emoji Overlay
function animBigEmoji() {
  clearLayer();
  const emojis = ['🦄','🌈','⭐','💜','🌟','🎉'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const overlay = document.createElement('div');
  overlay.className = 'overlay-anim';
  overlay.style.background = 'rgba(255,255,255,0.3)';
  const e = document.createElement('div');
  e.className = 'overlay-emoji';
  e.textContent = emoji;
  overlay.appendChild(e);
  document.getElementById('anim-layer').appendChild(overlay);
  setTimeout(clearLayer, 2400);
}

// 9. Fireworks
function animFireworks() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const emojis = ['🎆','🎇','✨','💥','🌟'];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = (5 + Math.random() * 90) + 'vw';
    p.style.top = (20 + Math.random() * 70) + 'vh';
    p.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
    p.style.animationDuration = (1.1 + Math.random() * 1) + 's';
    p.style.animationDelay = (Math.random() * 0.7) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 2800);
}

// 10. Bubbles
function animBubbles() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const colors = ['#e9d5ff','#fce7f3','#bfdbfe','#fef9c3','#a5f3fc'];
  for (let i = 0; i < 28; i++) {
    const b = document.createElement('div');
    const size = 30 + Math.random() * 60;
    b.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border: 3px solid rgba(255,255,255,0.8);
      left: ${Math.random() * 100}vw;
      top: ${30 + Math.random() * 60}vh;
      opacity: 0.8;
      animation: flyUp ${1 + Math.random() * 1.2}s ease-out ${Math.random() * 0.6}s forwards;
    `;
    layer.appendChild(b);
  }
  setTimeout(clearLayer, 3000);
}

// 11. Rainbow text
function animRainbow() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none;
    animation: fadeOverlay 2s ease-in-out forwards;
    z-index: 1001;
  `;
  const txt = document.createElement('div');
  txt.style.cssText = `
    font-family: 'Fredoka One', cursive;
    font-size: clamp(3rem, 10vw, 6rem);
    background: linear-gradient(90deg, #b06fd8, #f472b6, #60a5fa, #fde047, #b06fd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 300%;
    animation: regenbogen 0.8s linear infinite;
    text-shadow: none;
    filter: drop-shadow(0 4px 12px rgba(244,114,182,0.5));
  `;
  txt.textContent = '🌈 Super! 🌈';
  overlay.appendChild(txt);
  layer.appendChild(overlay);
  setTimeout(clearLayer, 2200);
}

// 12. Magic sparkle circle
function animMagic() {
  clearLayer();
  const layer = document.getElementById('anim-layer');
  const cx = 50; const cy = 50;
  const moons = ['🌙','⭐','💫','✨','🌟','💜'];
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * 360;
    const r = 30 + Math.random() * 18;
    const x = cx + r * Math.cos(angle * Math.PI / 180);
    const y = cy + r * Math.sin(angle * Math.PI / 180);
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = moons[Math.floor(Math.random() * moons.length)];
    p.style.left = x + 'vw';
    p.style.top = y + 'vh';
    p.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
    p.style.animationDuration = (1 + Math.random() * 0.8) + 's';
    p.style.animationDelay = (Math.random() * 0.3) + 's';
    layer.appendChild(p);
  }
  setTimeout(clearLayer, 2400);
}
