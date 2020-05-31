import express from 'express';
import bodyParser from 'body-parser';

import routes from './src/routes/route';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);

app.listen(port,() => console.log(`Server is up on port ${port}`));