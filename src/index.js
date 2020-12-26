const app = require("./app");
const express = require("express");
const port = process.env.PORT;
const path = require("path");
const history = require("connect-history-api-fallback");

app.use(history());

// if (process.env.NODE_ENV === "production") {
//   // Express will serve up production assets
//   // like our main.js file, or main.css file!
//   app.use(express.static("client/build"));

//   // Express will serve up the index.html file
//   // if it doesn't recognize the route
//   app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log("Port is up on " + port);
});
