import mongoose from "mongoose";
import dotenv from "dotenv";
import Hunt from "./models/huntModel.js"; // adjust the path as needed

dotenv.config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
  deleteOldHunts();
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

async function deleteOldHunts() {
  try {
    const aprilStart = new Date(new Date().getFullYear(), 4, 1); // April 1st (month 3 = April)

    const result = await Hunt.deleteMany({ startTime: { $lt: aprilStart } });

    console.log(`🗑️ Deleted ${result.deletedCount} hunt(s) with startTime before April`);
  } catch (err) {
    console.error("❌ Error deleting old hunts:", err);
  } finally {
    mongoose.connection.close();
  }
}
