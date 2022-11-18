
require('dotenv').config();
const app = require('express')();
const router = require('./routes/Routes');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});


app.get('/', (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    const author = baseUrl + 'api/author';
    return res.status(200).send({
        message: 'Welcome to the Starter Express API deploy on Vercel',
        response: "Sucess",
        Author: author,
        Routes: [
            {
                index: baseUrl,
                api: baseUrl+"api",
                users: baseUrl+"api/users",
                usersSearch: baseUrl+"api/users/s?uid=1",
            }
        ]
    });
});

app.use('/api', router);

app.all('*', (req, res) => {
    return res.status(404).send(responseCreator({ message: 'Not found' }));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});