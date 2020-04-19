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
   console.log(`Listening on port ${port}`}; 
}

// Express provides methods that define routing and correspond directly to HTTP methods
   app.get("/", function(req,res) { res.send("hello") });
   
               
// Accepting a POST request as the backend server
const data = [{animal:"elephant", score: 10},{animal:"kangaroo",score:3}] // what we add entry to
function makeData(request){
   let incomingData = request.body; // assign the incoming post request info to a variable
   let newAnimal = {                // assign that variable's properties to your own formatted variable
      animal: incomingData.animal,
      score: incomingData.score
   }
   data.push(newAnimal);         // push the formatted variable to your database array
}
makeData({body:{animal:"turtle", score:7}})

// Add the data directly client-side
   projectData = [];
   app.post('/add', function(request, response){
      projectData.push(request.body);
   }) 

// Client-side Post Request
   const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json', // if json here then json in body also
    },
    body: JSON.stringify(data),       
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}
   
// Client-side GET request
   const getData = async(url= '') => {
      const request = await fetch(url);
      try {
         const allData = await request.json();
      }
      catch(err) {
         console.log(err);
      }
   }
