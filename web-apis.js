// Can add event listeners to the document or elements
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});

// Express is used with cors (for cross origin allowance) and body-parser (middleware) to make requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
