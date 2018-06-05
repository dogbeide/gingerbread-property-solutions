import path from 'path';

import express from 'express';
import logger from 'morgan';
import pug from 'pug';

import contact from './routes/contact';
import portfolio from './routes/portfolio';
import services from './routes/services';
// import fooMiddleware from './utils/foo';
import { company } from './utils/constants'

const port = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views')); // views directory
app.set('view engine', 'pug'); // sets the view engine to pug
// app.engine('html', pug.__express); // I would ALSO like pug to render html

app.use(express.static(__dirname + '/public')); // serve static content
app.use(express.static(__dirname + '/media')); // serve images

app.use(logger('dev')); // log all http requests

app.get('/', (req, res) => {
    res.render('index', {
        title: `${company} | Home`
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: `${company} | About`
    });
});
app.use('/contact', contact);
app.use('/services', services);
app.use('/portfolio', portfolio);
app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy', {
        title: `${company} | Privacy Policy`
    });
});
app.get('/reviews', (req, res) => {
    res.render('reviews', {
        title: `${company} | Reviews`
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
