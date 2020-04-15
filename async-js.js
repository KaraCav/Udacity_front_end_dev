// JavaScript is a single threaded programming language 
// This means it usually runs as a single process in your computer (essentially writing/running top to bottom).
// Basic example of async is a setTimeout() function- says wait until a condition is met (time) before running
// setTimeout() and AJAX are both workarounds, but now we have PROMISES (best practice)

// Example 1:
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
// promises are special functions that either satisfy (resolve) or fail (reject) to execute a task
// To make a fetch() call (or any method in a function) asynchronous we must use Javascript keywords.

// Example 2:
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
      try {
        const newData = await response.json();
        return newData
      } catch(error) {
      // appropriately handle the error
      }
  }
  postData('/addMovie', {movie:' the matrix', score: 5})

// Once you mark a function as 'async' you have access to the keywords await, try, and catch 
// FETCH is built on top of native promises
