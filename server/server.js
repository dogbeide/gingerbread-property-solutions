import path from 'path';

import express from 'express';
import logger from 'morgan';
import pug from 'pug';

import contact from './routes/contact';
import { company } from './utils/constants'

const port = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views')); // views directory
app.set('view engine', 'pug'); // sets the view engine to pug
// app.engine('html', pug.__express); // I would ALSO like pug to render html

app.use(express.static(__dirname + '/public')); // serve static content
app.use(express.static(__dirname + '/media')); // serve images

app.use(logger('dev')); // log all http requests to console

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
app.get('/services', (req, res) => {
    res.render('services', {
        title: `${company} | Services`
    })
});
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
app.get('/news', (req, res) => {
    res.render('news', {
        title: `${company} | News`
    })
});
app.get('*', (req, res) => {
    res.render('error404');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
