import express from 'express';
import { company } from '../utils/constants'


const router = express.Router();

// router.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send('500 Internal Server Error')
// });

router.get('/', (req, res) => {
    res.render('contact', {company})
});

router.post('/', (req, res) => {
    res.send('form should be submitted');
})

export default router;
