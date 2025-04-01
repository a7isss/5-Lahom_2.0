import mongoose from "mongoose";

// MongoDB connection URI (replace with your actual URI)
const MONGO_URI = process.env.MONGODB_URI || "WWW.GOOGLE.COM";

// Establish connection
const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        // Connection is already established, reuse it
        console.log("Mongoose is already connected to the database.");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process on a failure
    }
};

// Export the connection function
export default connectDB;