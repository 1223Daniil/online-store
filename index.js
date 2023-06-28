let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));

// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/online-store");

let schema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
});

let schemaUser = new mongoose.Schema({
  login: String,
  password: String,
});

let schemaContact = new mongoose.Schema({
  Name: String,
  email: String,
  coment: String,
  Tem: String,
});

let User = mongoose.model("users", schemaUser);
let Card = mongoose.model("cards", schema);
let Contact = mongoose.model("contacts", schemaContact);

app.get("/Alldata", async function (req, res) {
  let events = await Card.find({});
  res.send(events);
});

app.get("/sweatshirt", async function (req, res) {
  let events = await Card.find({ sweatshirt: true });
  res.send(events);
});
app.get("/Coat", async function (req, res) {
  let events = await Card.find({ Coat: true });
  res.send(events);
});
app.get("/jacket", async function (req, res) {
  let events = await Card.find({ jacket: true });
  res.send(events);
});

app.post("/registration", (req, res) => {
  const { login, password } = req.body;

  const NewUser = new User({ login, password });

  NewUser.save()
    .then(() => res.send({ message: "Пользователь успешно создан" }))
    .catch((error) =>
      res.status(500).send({ error: "Ошибка при создании пользователя" })
    );
});

app.post("/Contact", (req, res) => {
  const { Name, Email, Comment, Tem } = req.body;

  const NewContact = new Contact({ Name, Email, Comment, Tem });

  NewContact.save()
    .then(() => res.send({ message: "Пользователь успешно создан" }))
    .catch((error) =>
      res.status(500).send({ error: "Ошибка при создании пользователя" })
    );
});
