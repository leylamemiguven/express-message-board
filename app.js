const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});