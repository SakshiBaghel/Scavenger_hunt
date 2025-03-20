const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // You can add more fields here if needed (e.g., role, createdAt, etc.)
});

module.exports = mongoose.model("User", userSchema);
