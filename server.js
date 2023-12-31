const express = require('express');
const fetch = require('node-fetch');
const expressHandlebars = require('express-handlebars');
const helpers = require("./utils/helpers");
const routes = require('./routes');
// merged for user routes and session
const path = require('path');
const session = require('express-session')
const sequelize = require('./connection/connection');

const db = require('./connection/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);




const PORT = process.env.PORT || 3000;

const expHbs = expressHandlebars.create({
  helpers,
});

const app = express();

// app.set('view engine', 'handlebars');

app.engine('handlebars', expHbs.engine);
app.set('view engine', 'handlebars');

// creating user session
// moved since session needs to be initialized before app.use
const userSession = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 60 * 60 * 2000,
        // httpOnly: true,
        // secure: false,
        // sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};
app.use(session(userSession))

// app.use for routes needs to be after session
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// moved routes to path-routes.js

// Fetch plant data from the plants database
app.get('/api/plants', (req, res) => {
    db.Plant.findAll()
        .then((plants) => {
            res.json(plants);
        })
        .catch((error) => {
            console.error('Error fetching plant data: ', error);
            res.status(500).json({ error: 'An error occurred while fetching plant data' });
        });
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
});

// duplicate app.listen
// app.listen(process.env.PORT || 3000);






