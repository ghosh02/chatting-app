const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("mongodb connection error", error);
  }
}
module.exports = connectDB;
// const mongoose = require("mongoose");

// function connectDB() {
//   mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log("Connected to MongoDB");
//   });
// }

// module.exports = connectDB;
