import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env file");
}

const cached = global.mongoose ?? {
  conn: null,
  promise: null,
};

global.mongoose = cached;

// Connect to MongoDB
export async function connectDb() {
  // Return the existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // Create a connection promise if one doesn't exist
  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      maxPoolSize: 10,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  try {
    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    cached.promise = null;

    console.error("MongoDB connection failed:", error);

    throw error;
  }
}
