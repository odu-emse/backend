import express from "express";
import logger from "express-simple-logger";
import routes from "./routes.js";

const PORT = 8080;
const app = express();

app.use(logger());
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
