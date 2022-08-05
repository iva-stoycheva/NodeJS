const math = require('mathjs');
const express = require('express'), bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({limit: '2mb', extended:true}));
app.use(express.json());

const port = 8084;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {result: ''});
})

app.post('/getexpression', (req, res) => {
    const expression = req.body.expression;
    //const result = math.evaluate(String(expression));
    //res.send(`${result}`);
    res.render('index', {result : math.evaluate(expression)})
});

app.listen(
    port, 
    () => console.log(`Server is running on port ${port}`)
);