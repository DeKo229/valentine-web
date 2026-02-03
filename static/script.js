const mainGif = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const questionRow = document.getElementById("question-row");
const msgLine1 = document.getElementById("msg-line-1");
const msgLine2 = document.getElementById("msg-line-2");

// GIF paths (they must exist under static/img/)
const PLEASE_GIF = "/static/img/please.GIF";
const SAID_YES_GIF = "/static/img/said_yes.GIF";

function clearMessage() {
  msgLine1.innerHTML = "";
  msgLine2.innerHTML = "";
}

// Ensure startup GIF is correct
mainGif.src = PLEASE_GIF;

yesBtn.addEventListener("click", () => {
  clearMessage();
  mainGif.src = SAID_YES_GIF;
  questionRow.style.display = "none";

  msgLine1.innerHTML = `
    <span style="font-weight:bold;">YAYYYY!!!! I Love You BOOOO </span>
    <img src="/static/img/kiss_lips.png" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Lets make our first Valentine memorable </span>
    <img src="/static/img/smirk.png" class="icon-small">
    <img src="/static/img/devil.png" class="icon-small">
  `;

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// Your existing No button logic can stay here
// noBtn.addEventListener("click", () => { ... });
