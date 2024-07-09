const express = require('express');
const app = express();
const port = 3000;

// Import the JSON file
const data = require('./data.json');

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
app.get('/', (req, res)=> {

    console.log("a dsdff")
    res.json({"entry": "this is empty"});
});

app.get('/fetchdata', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});