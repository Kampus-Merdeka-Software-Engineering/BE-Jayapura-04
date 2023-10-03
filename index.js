const express = require("express");
const path = require('path');
const connection = require('./app/model/index');
const mainRouter = require('./app/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRouter);

app.use('/static', express.static(path.join(__dirname, 'static')));

const port = 3000;
app.listen(port, function () {
    console.log("Server start on", port);
    connection.authenticate()
        .then(function () {
            console.log("Database terhubung");
        })
        .catch(function (err) {
            console.log("Error saat koneksi ke database", err);
            process.exit();
        });
});
