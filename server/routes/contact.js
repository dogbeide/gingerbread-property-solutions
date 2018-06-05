import express from 'express';
import nodemailer from 'nodemailer'

import { company } from '../utils/constants'


const contact = express.Router();

// router.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send('500 Internal Server Error')
// });

contact.get('/', (req, res) => {
    res.render('contact', {
        title: `${company} | Contact`
    })
});

contact.post('/', (req, res) => {
    res.send('TODO: email form');
    // TODO: implement form emailing to info@gingerbreadpropertysolutions.com
    // TODO: store all sent emails in database
})

export default contact;
