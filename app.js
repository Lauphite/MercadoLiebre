const express = require('express');
const app = express();
const path = require('path');
const home = "./views/home.html";
const login = "./views/login.html";
const register = "./views/register.html";
const PORT = proccess.env.PORT || 3001;

app.use(express.static('public'));

app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(home));
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(home));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(login));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(register));
})
