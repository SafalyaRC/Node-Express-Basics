// In client-server interactions, cookies are small pieces of data that a website stores on a user's computer (client) to remember information about the user or their browsing session. These cookies are then sent back to the server with subsequent requests, allowing the server to identify the user and personalize their experience or maintain session state
// uses: session mgmt. , user tracking, personalization

import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 5000;
app.use(cookieParser());

app.get("/", (req, res) => {
  // cookies are set in key-value pairs
  res.cookie("name", "safalya", { maxAge: 600000 }); // max-age property (opt.) is the expiry duration for how long cookies will last
  res.send("Hello express");
});

app.get("/fetch", (req, res) => {
  console.log(res.cookies);
  res.send(`API Called`);
});

// removing the cookie:
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send(`Cookie removed`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
