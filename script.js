// script.js
document
  .getElementById("nameInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addNameToList();
    }
  });

function addNameToList() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    const list = document.getElementById("nameList");
    const listItem = document.createElement("li");
    listItem.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = function () {
      list.removeChild(listItem);
    };
    removeBtn.classList = "removeBtn";
    listItem.appendChild(removeBtn);

    list.appendChild(listItem);
    input.value = ""; // Clear the input box
  }
}

function generateTeams() {
  const listItems = document.querySelectorAll("#nameList li");
  const names = Array.from(listItems).map((item) =>
    item.textContent.replace("Remove", "").trim()
  );
  const teamSize = parseInt(document.getElementById("teamSize").value) || 2;
  const teams = [];

  // Shuffle names array
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]]; // Swap elements
  }

  // Group names into teams
  for (let i = 0; i < names.length; i += teamSize) {
    teams.push(names.slice(i, i + teamSize));
  }

  // Display the teams
  const output = document.getElementById("teamOutput");
  output.innerHTML = "";
  teams.forEach((team, index) => {
    output.innerHTML += `<p>Team ${index + 1}: ${team.join(", ")}</p>`;
  });
}

function clearAllNames() {
  const list = document.getElementById("nameList");
  list.innerHTML = ""; // Remove all children from the list
}
