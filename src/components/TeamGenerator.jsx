import React, { useState } from "react";

const TeamGenerator = ({ names }) => {
  const [teamSize, setTeamSize] = useState(2);
  const [teams, setTeams] = useState([]);

  const generateTeams = () => {
    const shuffledNames = [...names].sort(() => 0.5 - Math.random());
    const newTeams = [];

    for (let i = 0; i < shuffledNames.length; i += teamSize) {
      newTeams.push(shuffledNames.slice(i, i + teamSize));
    }

    setTeams(newTeams);
  };

  return (
    <div>
      <input
        type="number"
        value={teamSize}
        onChange={(e) => setTeamSize(parseInt(e.target.value))}
        min="2"
      />
      <button onClick={generateTeams}>Generate Teams</button>
      <div>
        {teams.map((team, index) => (
          <div key={index}>
            <h3>Team {index + 1}</h3>
            <ul>
              {team.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGenerator;
