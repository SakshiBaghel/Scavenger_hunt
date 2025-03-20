require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


  console.log("CLOUDINARY ENV VALUES:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
  });
  

 // Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});
// cloudinary.config({
//   cloud_name:"dezumasud",
//   api_key:"429611478315431",
//   api_secret:"PwjXvOsvbJi9EVzzoEjJ4JEZhaE",
// });

// console.log("Cloudinary Config:", {
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
//   api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET ? "****" : "Not Set",
// });


// ✅ Multer Storage Setup for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "scavenger-hunt", // Cloudinary ke andar folder ka naam
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage: storage });

// ✅ Mongoose Schema (If needed for storing image URL)
const Photo = mongoose.model("Photo", new mongoose.Schema({
  imageUrl: String,
  uploadedAt: { type: Date, default: Date.now }
}));

// ✅ Photo Upload Route
app.post("/upload", upload.single("photo"), async (req, res) => {
  try {
    const newPhoto = new Photo({ imageUrl: req.file.path });
    await newPhoto.save();
    res.json({ success: true, imageUrl: req.file.path });
  } catch (error) {
    res.status(500).json({ success: false, message: "Upload failed", error });
  }
  
});

// ✅ Get All Uploaded Photos
app.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching photos" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
