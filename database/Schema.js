import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = models.Users || model('Users', userSchema);
