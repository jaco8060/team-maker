import React, { useState } from "react";

const NameList = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const addNameToList = () => {
    if (name.trim()) {
      setNames([...names, name.trim()]);
      setName("");
    }
  };

  const removeName = (nameToRemove) => {
    setNames(names.filter((n) => n !== nameToRemove));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name and press Enter"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addNameToList();
          }
        }}
      />
      <button onClick={addNameToList}>Add Name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button className="removeBtn" onClick={() => removeName(name)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
