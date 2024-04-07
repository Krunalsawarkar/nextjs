import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected!!");
    });
    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error, please make sure db is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!!");
    console.log(error);
  }
}
