import { Server } from "socket.io";

export const socketSetup = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  // SOcket.IO connection
  io.on("connection", (socket) => {
    console.log("User Connected: ", socket.id);

    // handle chat message
    socket.on("chat message", (msg) => {
      console.log("Message Received: ", msg);
      io.emit("chat message", msg); // Emit msg to all connected users(sockets/ clients)
    });

    // handle disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected: ", socket.id);
    });
  });
};
