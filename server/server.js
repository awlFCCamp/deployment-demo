const express = require("express");
const app = express();
const path = require("path");
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "6fc3641c23f34a5f8f018ab47f39a82d",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!!!!");
app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(4000, () => console.log(`server running on 4000`));
