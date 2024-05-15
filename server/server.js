const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000; // Vercel provides the PORT variable

const corsOptions = {
  origin: "https://jaco8060.github.io", // Allow only your frontend URL
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.json());

app.get(
  "/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine",
  async (req, res) => {
    const { gameName, tagLine } = req.params;
    const apiKey = req.query.api_key;

    try {
      const response = await axios.get(
        `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  }
);

app.get(
  "/lol/summoner/v4/summoners/by-puuid/:encryptedPUUID",
  async (req, res) => {
    const { encryptedPUUID } = req.params;
    const apiKey = req.query.api_key;

    try {
      const response = await axios.get(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  }
);

app.get(
  "/lol/league/v4/entries/by-summoner/:encryptedSummonerId",
  async (req, res) => {
    const { encryptedSummonerId } = req.params;
    const apiKey = req.query.api_key;

    try {
      const response = await axios.get(
        `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
