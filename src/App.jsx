import React, { useState } from "react";
import "./App.css";
import ApiKeyInput from "./components/ApiKeyInput";
import NameList from "./components/NameList";
import RankFetcher from "./components/RankFetcher";
import TeamGenerator from "./components/TeamGenerator";

const App = () => {
  const [names, setNames] = useState([]);
  const [apiKey, setApiKey] = useState(
    "RGAPI-95976879-75c7-4641-a801-4f3a89550f8a"
  );

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
