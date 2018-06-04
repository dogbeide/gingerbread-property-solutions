import express from 'express';
import { company } from '../utils/constants';


const router = express.Router();

router.get('/', (req, res) => {
    res.render('portfolio', {
        title: `${company} | Portfolio`
    });
});

export default router;
