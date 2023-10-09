const express = require("express") // ini perlu
const cors = require('cors');
const path = require('path'); //tidak perlu npm install
const connection = require('./app/model/index');

// init express server and router
const app = express();
app.use(cors({
    origin: true
}))
const mainRouter = require('./app/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http router
app.use("/", mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
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