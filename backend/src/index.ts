import express, { Application, Request, Response } from 'express';
const app: Application = express();
const request = require('request');
const cors = require('cors');
const utilities = require('./utilities');

app.use(cors());
app.use(express.json());
app.post('/getProduct', (req: Request, res: Response) => {

    // We can save req.body as customer data to the database below here
    // ...

    const validator = utilities.checkInputValidator(req.body);
    if (validator.status !== 200) {
        res.status(validator.status).json({error: true, message: `Bad Request: ${validator.message}`});
        return;
    }

    const options = {
        method: 'POST',
        url: 'https://api.fwd.co.th/dev-ecommerce/getProduct',
        header: {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache',
        },
        body: JSON.stringify(req.body),
    };

    request(options, (error: any, response: any) => {
        if (error) throw new Error(error);
        res.status(200).json({ data: response.body });
    });
});

module.exports = app.listen(process.env.PORT || 8080);
