const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    const nombre = req.cookies["Nombre"] || '';
    const direccion = req.cookies["Direccion"] || '';
    const edad = req.cookies["Edad"] || '';
    const profesion = req.cookies["Profesion"] || '';
    res.send(`Nombre: ${nombre}<br>Dirección: ${direccion}<br>Edad: ${edad}<br>Profesión: ${profesion}`);
});

app.listen(port, () => {
    console.log(`Servidor web funcionando en http://localhost:${port}`);
});
