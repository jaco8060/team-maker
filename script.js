// script.js
function generateTeams() {
  const names = document.getElementById("namesInput").value.split(",");
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
