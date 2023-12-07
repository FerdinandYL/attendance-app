// Server Utility
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(morgan);
app.use(cors);

app.listen(process.env.PORT, () => {
    console.log(`App listen to Port : ${PORT}`)
})