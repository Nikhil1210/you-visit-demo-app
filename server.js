import express from 'express';
import hbs from 'express-handlebars';

const app = express();
app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
    res.render('index', { layout: false, data: 11233 })
})
app.listen(3000, () => console.log('listening on port 3000....'));