const User = require('database/Schema');

//"Error: MongooseError: Operation `users.insertOne()` buffering timed out after 10000ms",
export default function handler(req, res) {
  const { name, message, email } = req.body;
  if (req.method === 'POST') {
    const user = new User({
      name: name,
      message: message,
      email: email,
    });
    user.save();
    res.status(200).json({ name: name, message: message, email: email });
  } else {
  }
}
