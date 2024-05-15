import { useEffect, useState } from "react";

const ApiKeyInput = ({ setApiKey }) => {
  const [inputApiKey, setInputApiKey] = useState("");

  useEffect(() => {
    const savedApiKey = localStorage.getItem("riotApiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, [setApiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("riotApiKey", inputApiKey);
    setApiKey(inputApiKey);
    setInputApiKey("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter API Key"
        value={inputApiKey}
        onChange={(e) => setInputApiKey(e.target.value)}
      />
      <button className="apiInput" type="submit">
        Save API Key
      </button>
    </form>
  );
};

export default ApiKeyInput;
