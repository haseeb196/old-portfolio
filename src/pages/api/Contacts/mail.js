import db from 'database/connection';
import User from 'database/Schema';
export default function handler(req, res) {
  const { name, message, email } = req.body;
  if (req.method === 'POST' && name && message && email) {
    const user = new User({
      name: name,
      email: email,
      message: message,
    });
    user.save();
    res.json({ message: 'success' });
    
  } else {
    res.status(404).send('Error: ///<>hjnda34');
  }
}
