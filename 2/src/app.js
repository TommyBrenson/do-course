require('dotenv').config();
require('./models/todo');

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const sequelize = require('./db/config');
const Todo = require('./models/todo');

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", __dirname + "/views/pages");

app.get('/', async (req, res) => {
    const todos = await Todo.findAll({ raw: true});
    res.render('home', {todos});
});

app.use(routes);

const PORT = process.env.PORT || 8080;

async function main() {
    await sequelize.authenticate()
        .then(() => console.log(`Successfully connected to database ${process.env.POSTGRES_DB}!`))
        .catch((e) => console.log(`Error while connecting to database: `, e));

    await sequelize.sync({ force: true }).then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });
}

main();