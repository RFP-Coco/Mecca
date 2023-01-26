const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/posts/:postID', (req, res) => {
  

});

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
})