const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile('index.html'));
app.get("*", (req, res) => res.sendFile('404.html', { root: __dirname + '/public'}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})