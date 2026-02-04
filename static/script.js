// === GET ELEMENTS ===
const mainGif = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const questionRow = document.getElementById("question-row");
const msgLine1 = document.getElementById("msg-line-1");
const msgLine2 = document.getElementById("msg-line-2");
const questionText = document.getElementById("question-text");

// === GIF PATHS ===
const PLEASE_GIF   = "/static/img/please.GIF";
const SAID_YES_GIF = "/static/img/said_yes.GIF";
const SAID_NO_GIF  = "/static/img/said_no.gif";

// === ICON PATHS ===
const SMIRK_ICON       = "/static/img/smirk.png";
const DEVIL_ICON       = "/static/img/devil.png";
const LOVED_ICON       = "/static/img/loved.png";
const KISS2_ICON       = "/static/img/kiss.png";
const HEARTBREAK_ICON  = "/static/img/heartbreak.png";
const CRYING_ICON      = "/static/img/crying.png";
const HEART_ICON       = "/static/img/heart.png";
const ROSE_ICON        = "/static/img/rose.png";
const FINGER_ICON        = "/static/img/finger.png";
const PUNCH_ICON        = "/static/img/punch.png";



// === INITIAL STATE ===
mainGif.src = PLEASE_GIF;

questionText.innerHTML = `
  Will you be my Valentine?
  <img src="${HEART_ICON}" class="icon-small">
  <img src="${ROSE_ICON}" class="icon-small">
`;

function clearMessage() {
  msgLine1.innerHTML = "";
  msgLine2.innerHTML = "";
}

// === YES CLICK ===
yesBtn.addEventListener("click", () => {
  clearMessage();
  mainGif.src = SAID_YES_GIF;
  questionRow.style.display = "none";

  msgLine1.innerHTML = `
    <strong>YAYYYY!!!! I Love You BOOOO I can't wait for our first Valentine's Day Together </strong>
    <img src="${LOVED_ICON}" class="icon-small">
    <img src="${KISS2_ICON}" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Let’s make this Valentines memorable and Let's get freaky </span>
    <img src="${SMIRK_ICON}" class="icon-small">
    <img src="${DEVIL_ICON}" class="icon-small">
  `;

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// === NO CLICK ===
noBtn.addEventListener("click", () => {
  clearMessage();
  mainGif.src = SAID_NO_GIF;

  // Keep the question row visible so Yes stays there
  questionRow.style.display = "block";

  // Hide ONLY the No button
  noBtn.style.display = "none";

  // Make sure Yes is enabled and still visible
  yesBtn.disabled = false;
  yesBtn.style.display = "inline-flex";

  msgLine1.innerHTML = `
    <strong>NO??? WTF </strong>
    <img src="${FINGER_ICON}" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Just say yes to me </span>
    <img src="${PUNCH_ICON}" class="icon-small">
  `;
});

// === NO BUTTON RUNS AWAY ===
noBtn.addEventListener("mouseover", () => {
  const container = noBtn.parentElement;
  const rect = container.getBoundingClientRect();

  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
});

// === RESET POSITION WHEN MOUSE LEAVES ===
noBtn.addEventListener("mouseleave", () => {
  noBtn.style.position = "relative";
  noBtn.style.left = "";
  noBtn.style.top = "";
});
