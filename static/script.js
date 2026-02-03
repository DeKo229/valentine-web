const mainGif = document.getElementById("main-gif");
const questionRow = document.getElementById("question-row");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const msgLine1 = document.getElementById("message-line1");
const msgLine2 = document.getElementById("message-line2");

// paths to gifs (match filenames in static/img)
const SAID_YES_GIF = "/static/img/said_yes.gif";
const SAID_NO_GIF = "/static/img/said_no.gif";

function clearMessage() {
  msgLine1.innerHTML = "";
  msgLine2.innerHTML = "";
}

// YES button click
yesBtn.addEventListener("click", () => {
  clearMessage();
  mainGif.src = SAID_YES_GIF;
  questionRow.style.display = "none";

  msgLine1.innerHTML = `
    <span style="font-weight:bold;">I LOVEEE YOUUU BOOO!!! Lets make our first Valentine special </span>
    <img src="/static/img/kiss_lips.png" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Also lets get freaky on Valentines baby </span>
    <img src="/static/img/smirk.png" class="icon-small">
    <img src="/static/img/devil.png" class="icon-small">
  `;

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// NO button hover (runaway)
noBtn.addEventListener("mouseenter", () => {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const minX = rect.left + 50;
  const maxX = rect.right - 150;
  const minY = rect.top + 420;
  const maxY = rect.bottom - 80;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// NO button click – hide No after message
noBtn.addEventListener("click", () => {
  clearMessage();
  questionRow.style.display = "none";
  mainGif.src = SAID_NO_GIF;

  msgLine1.innerHTML = `
    <span>Nope, you arent allowed to say No to me bitch </span>
    <img src="/static/img/finger.png" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span style="font-weight:bold;">just say yes </span>
    <img src="/static/img/punch.png" class="icon-small">
  `;

  noBtn.style.display = "none";

  alert("Nope, you arent allowed to say No to me bitch.\nJust say yes. 😉");
});
