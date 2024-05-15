import React, { useState } from "react";
import "./App.css";
import ApiKeyInput from "./components/ApiKeyInput";
import NameList from "./components/NameList";
import RankFetcher from "./components/RankFetcher";
import TeamGenerator from "./components/TeamGenerator";

const App = () => {
  const [names, setNames] = useState([]);
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="container">
      <h1>Team Maker</h1>
      <a
        href="https://developer.riotgames.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get your API Key
      </a>
      <ApiKeyInput setApiKey={setApiKey} />
      <NameList names={names} setNames={setNames} />
      <TeamGenerator names={names} />
      <RankFetcher apiKey={apiKey} />
    </div>
  );
};

export default App;
