import express from "express";
import morgan from "morgan";
import { engine as handlebars } from "express-handlebars";
import path from "path";

const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

//HTTP LOGGER
// app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);

app.listen(port, () => console.log(`localhost:${3000}`));
