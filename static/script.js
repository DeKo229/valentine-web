// Grab elements
const mainGif = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const questionRow = document.getElementById("question-row");
const msgLine1 = document.getElementById("msg-line-1");
const msgLine2 = document.getElementById("msg-line-2");

// GIFs
const PLEASE_GIF = "/static/img/please.GIF";
const SAID_YES_GIF = "/static/img/said_yes.GIF";

// Emoji icons (use exact filenames from your static/img folder)
const KISS_ICON = "/static/img/kiss_lips.png";
const SMIRK_ICON = "/static/img/smirk.png";
const DEVIL_ICON = "/static/img/devil.png";
const PUNCH_ICON = "/static/img/punch.png";            // update name if different
const FINGER_ICON = "/static/img/middle_finger.png";   // update name if different

// Make sure startup GIF is correct
mainGif.src = PLEASE_GIF;

function clearMessage() {
  msgLine1.innerHTML = "";
  msgLine2.innerHTML = "";
}

// YES button
yesBtn.addEventListener("click", () => {
  clearMessage();
  mainGif.src = SAID_YES_GIF;
  questionRow.style.display = "none";

  msgLine1.innerHTML = `
    <span style="font-weight:bold;">YAYYYY!!!! I Love You BOOOO </span>
    <img src="${KISS_ICON}" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Lets make our first Valentine memorable </span>
    <img src="${SMIRK_ICON}" class="icon-small">
    <img src="${DEVIL_ICON}" class="icon-small">
  `;

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// NO button
noBtn.addEventListener("click", () => {
  clearMessage();

  msgLine1.innerHTML = `
    <span style="font-weight:bold;">NO??? WTF </span>
    <img src="${PUNCH_ICON}" class="icon-small">
  `;

  msgLine2.innerHTML = `
    <span>Just say yes to me bitch </span>
    <img src="${FINGER_ICON}" class="icon-small">
  `;
});
