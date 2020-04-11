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

// Include the 'express' package in your project and create an instance of an express app in the file.
// Once an instance of the express app is saved to variable, the use() method can connect project dependencies:
const cors = require('cors');
app.use(cors());

// Use Node and Express to create a local server
const port = 8080;
const server = app.listen(port, listening);
function listening() {
   console.log(`Listening on port ${port}`}; }
