
// asi se crea un servidor con nodejs 
/*const http = require('http');   


const server = http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000,()=>{
    console.log('Server On POrt 3000');
});*/

// con express un framework para nodejs
const express = require('express');
// lo anterior me devuelve un objeto el cual es mi servidor y lo utilizamos de la siguiente manera:

const app = express();

app.get('/', (req,res)=>{
res.end('Hello World !!');
});

app.get('/about',(req,res)=>{
    res.send('About me');
});

app.get('/contact',(req,res)=>{
    res.send('Form contact');
});

app.listen(3000,()=>{
console.log('Server On Port 3000');
});

