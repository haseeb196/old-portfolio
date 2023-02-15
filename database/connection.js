import { mongoose } from 'mongoose';

const db = mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default db;
