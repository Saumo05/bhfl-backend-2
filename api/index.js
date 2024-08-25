const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3001", "https://bhfl-frontend.vercel.app"],
  })
);

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const userId = "saumodeepdutta_5";
  const email = "saumodeepdutta@gmail.com";
  const rollNumber = "21BIT0319";

  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = null;

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercaseAlphabet || item > highestLowercaseAlphabet) {
          highestLowercaseAlphabet = item;
        }
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Export the app for Vercel
module.exports = app;
