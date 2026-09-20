/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require("readline-sync");

// Player items
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("Welcome to the Adventure Game!");
console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question(
  "Do you go to the 'mountains' or the 'village'? "
).toLowerCase();

// Mountain path
if (choice === "mountains" && hasTorch) {
  console.log("You use your torch and safely travel through the dark mountains.");

  const mountainChoice = readline.question(
    "You find a 'cave' and a 'bridge'. Which one do you choose? "
  ).toLowerCase();

  if (mountainChoice === "cave") {
    if (hasSword && hasTorch) {
      console.log(
        "You enter the cave with your sword and torch and find a treasure chest!"
      );
    } else if (!hasSword) {
      console.log("You do not have a sword, so you decide not to enter the cave.");
    } else {
      console.log("The cave is too dark to explore.");
    }
  } else if (mountainChoice === "bridge") {
    if (hasCompass || hasMap) {
      console.log(
        "You cross the bridge and use your navigation item to find your way home!"
      );
    } else {
      console.log("You cross the bridge but get lost on the other side.");
    }
  } else {
    console.log("You wait in the mountains because you cannot decide where to go.");
  }

// Mountains without torch
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed, so you turn back.");

// Village path
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  const villageChoice = readline.question(
    "You see a 'shop' and an 'inn'. Where do you go? "
  ).toLowerCase();

  if (villageChoice === "shop") {
    if (hasSword) {
      console.log("The shopkeeper notices your sword and gives you a free shield.");
    } else {
      console.log("You look around the shop and buy some supplies.");
    }
  } else if (villageChoice === "inn") {
    console.log("You rest at the inn and finish your adventure safely.");
  } else {
    console.log("You explore the village.");
  }

// Invalid choice
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("Thanks for playing!");
