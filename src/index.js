import express from 'express';
import routes from './routes/route';

const port = 3000;
const app = express();

app.use('/',routes);

app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
});