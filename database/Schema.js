import { mongoose, Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
  name: String,
  message: String,
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
