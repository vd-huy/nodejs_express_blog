import express from "express";
import morgan from "morgan";
import { engine as handlebars } from "express-handlebars";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//HTTP LOGGER
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`localhost:${3000}`));
