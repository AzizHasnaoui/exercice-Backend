import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerBooks from "./routers/routersBook.js";
import routerAuthUser from "./routers/routersAuthUser.js";
import routerAuthors from "./routers/routersAuthor.js";
import routerCategories from "./routers/routersCategory.js";

const app = express();

//MIDDLEWARES//
app.use(cors());
app.use(express.json());

//MAIN URL//
app.use("/api/auth", routerAuthUser);
app.use("/api/authors", routerAuthors);
app.use("/api/categories", routerCategories);
app.use("/api/books", routerBooks);

//CONNECT TO DATABASE//
mongoose
  .connect("mongodb://localhost/hasnaouiDB")
  .then(() => {
    console.log("Connected to database hasnaouiDB");
  })
  .catch((err) => {
    console.error("Won't connect to database hasnaouiDB", err);
  });

export default app;
