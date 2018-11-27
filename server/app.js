const express = require('express');
const expressHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./Schema/schema');
const DATABASE_URL = `mongodb://rehan-sattar:woaini18@ds017776.mlab.com:17776/books-app`

const app = express();

app.use(cors());

// connection code here
mongoose.connect(DATABASE_URL, err => {
    if (err) {
        console.log(`Error in connecting to database!`);
        return;
    }
    console.log('Database Connected Successfully!');
});

app.use('/graphql', expressHTTP({
    // schema here..
    schema,
    graphiql: true
}));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
