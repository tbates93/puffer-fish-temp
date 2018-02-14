require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    PORT =3007;
const app = express();

app.use(express.static(`./`))

app.use(cors())
app.use(bodyParser.json());





app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))