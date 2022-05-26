const express = require('express');
const app = express();

const PORT = 3000;

//This route requires a front-end 

app.get('/userId/:id/userName/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`<h1>Hello World! My Id is: ${id} and my name is: ${name}</h1>`);
})


//This route requires a query
/*
app.get('/', (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    res.send(`<h1>Hello World! My Id is: ${id} and my name is: ${name}</h1>`);
})
*/
app.use('/register', (req, res) => {
    res.send('Register');
})

app.use((req, res) => {
    res.send('404');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})