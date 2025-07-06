import mongoose from "mongoose";
import dotenv from "dotenv";
import Player from "./models/playerModel.js"; // adjust if your path is different

dotenv.config();

const deletePlayers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Player.deleteMany({});
    console.log(`✅ Deleted ${result.deletedCount} players`);
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error deleting players:", err);
  }
};

deletePlayers();
