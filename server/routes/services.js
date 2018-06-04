import express from 'express';
import { company } from '../utils/constants'

const services = express.Router();

services.get('/', (req, res) => {
    res.render('services', {
        title: `${company} | Services`
    })
});

// services.use('/service1', require('./services/service1));
// services.use('/service2', require('./services/service2));
// services.use('/service3', require('./services/service3));


export default services;
