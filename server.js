import express from "express";
import http from "http";
import morgan from "morgan";
import { mongoConnect } from "./src/config/mongoConfig.js";
import { socketSetup } from "./src/socket/socketSetup.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// MongoDB setup
mongoConnect();

// Setup server with socket.io
const httpServer = http.createServer(app);

// Setup Socket.IO
socketSetup(httpServer);

// Server initialization
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server started at port ${PORT}`);
});
