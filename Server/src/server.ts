import App from "./App";
import dotenv from "dotenv";

dotenv.config()

App.listen(process.env.PORT);