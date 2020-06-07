import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/route';

const port = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);

app.listen(port,() => console.log(`Server is up on port ${port}`));