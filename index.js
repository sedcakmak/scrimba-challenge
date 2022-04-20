const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container");
const body = document.querySelector("body");

const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false,
  },
];

function renderBtns() {
  actionsArr.forEach((action) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn");
    buttonElement.innerHTML = ` ${action.text}  <br/>  ${action.emoji}`;
    action.good
      ? buttonElement.classList.add("btn-good")
      : buttonElement.classList.add("btn-bad");
    btnsContainer.appendChild(buttonElement);
    buttonElement.addEventListener("click", updatePoints);
  });
}

// Updating Points
let points = 0;
const pointsElSliced = pointsEl.textContent.slice(1);

function updatePoints(e) {
  pointsEl.textContent = pointsElSliced;
  e.target.classList.contains("btn-good") ? (points += 5) : (points -= 5);
  pointsEl.textContent = points + " " + pointsElSliced;
  changeBackgroundColor(e);
  updateActivityCount();
  animateText();
}

// Activity Count
const activityCount = document.createElement("p");
let count = 0;
activityCount.classList.add("points-p");
activityCount.textContent = `What did you do today?`;
body.insertBefore(activityCount, btnsContainer);

function updateActivityCount() {
  count++;
  let singularOrPlural = count === 1 ? "activity" : "activities";
  activityCount.textContent = `You did ${count} ${singularOrPlural} for Earth Day.`;
}

//  Change Background Color
let index = 13;
function changeBackgroundColor(e) {
  const colors = [
    "#ff160c",
    "#f44800",
    "#e96200",
    "#dd7600",
    "#d18600",
    "#c69300",
    "#bb9f1e",
    "#b1aa38",
    "#a9b34f",
    "#a3ba66",
    "#a0c17c",
    "#9fc791",
    "#a3cda5",
    "#aad1b6",
    "#a2d6b0",
    "#9adaaa",
    "#93dea3",
    "#8ce29b",
    "#85e692",
    "#7fea88",
    "#7aed7e",
    "#75f072",
    "#70f466",
    "#6df757",
    "#6afa46",
    "#67fc30",
    "#66ff00",
  ];

  if (e.target.classList.contains("btn-good")) {
    body.style.backgroundColor = colors[index++];
  } else {
    body.style.backgroundColor = colors[index--];
  }
}
renderBtns();

// Extra Animation for texts

function animateText() {
  if (points >= 100 || points <= -100) {
    pointsEl.classList.add("extreme");
  } else {
    pointsEl.classList.remove("extreme");
  }

  points > 0
    ? (pointsEl.textContent += " 😻")
    : (pointsEl.textContent += " 🙀");
}

// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

// stretch goal 1️⃣: Change each button color, green for good activities, red for bad.

// stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3️⃣: Add an activity count.
