import express from 'express';
import routes from './routes/route';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);

app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
});