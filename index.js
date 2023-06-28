let express = require(`express`)
let app = express()
let port = 3005

app.listen(port, function () {
	console.log(`http://localhost:${port}`)
})

// Настройка CORS
let cors = require('cors')
app.use(cors({ origin: 'http://localhost:5173' }))

// Настройка POST-запроса — JSON
app.use(express.json())

// Настройка БД
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/online-store')

let schema = new mongoose.Schema({
    title: String,
   price:String,
   image:String,
});

let Card = mongoose.model('cards', schema);

app.get('/Alldata', async function (req, res) {
    let events = await Card.find({});
    res.send(events);
});

app.get('/sweatshirt', async function (req, res) {
    let events = await Card.find({sweatshirt:true});
    res.send(events);
});
app.get('/Coat', async function (req, res) {
    let events = await Card.find({Coat:true});
    res.send(events);
});
app.get('/jacket', async function (req, res) {
    let events = await Card.find({jacket:true});
    res.send(events);
});





