import React, { useState } from "react";

const RankFetcher = ({ apiKey }) => {
  const [riotId, setRiotId] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [rankData, setRankData] = useState(null);
  const [error, setError] = useState("");

  const getPlayerRank = async () => {
    try {
      setError("");
      const accountResponse = await fetch(
        `https://jaco8060.github.io/team-maker/riot/account/v1/accounts/by-riot-id/${riotId}/${tagLine}?api_key=${apiKey}`
      );
      if (!accountResponse.ok) throw new Error("Failed to fetch account");

      const accountData = await accountResponse.json();
      const encryptedPUUID = accountData.puuid;

      const summonerResponse = await fetch(
        `https://jaco8060.github.io/team-maker/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}?api_key=${apiKey}`
      );
      if (!summonerResponse.ok) throw new Error("Failed to fetch summoner");

      const summonerData = await summonerResponse.json();
      const encryptedSummonerId = summonerData.id;

      const rankResponse = await fetch(
        `https://jaco8060.github.io/team-maker/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`
      );
      if (!rankResponse.ok) throw new Error("Failed to fetch rank");

      const rankData = await rankResponse.json();
      setRankData(rankData);
    } catch (error) {
      setError(error.message);
      setRankData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Riot ID (gameName)"
        value={riotId}
        onChange={(e) => setRiotId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Tagline"
        value={tagLine}
        onChange={(e) => setTagLine(e.target.value)}
      />
      <button onClick={getPlayerRank}>Get Player Rank</button>
      {error && <p>Error: {error}</p>}
      {rankData && (
        <div>
          {rankData.length === 0 ? (
            <p>No rank information available.</p>
          ) : (
            rankData.map((entry, index) => (
              <div key={index}>
                <p>Queue Type: {entry.queueType}</p>
                <p>
                  Tier: {entry.tier} {entry.rank}
                </p>
                <p>LP: {entry.leaguePoints}</p>
                <p>Wins: {entry.wins}</p>
                <p>Losses: {entry.losses}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default RankFetcher;
