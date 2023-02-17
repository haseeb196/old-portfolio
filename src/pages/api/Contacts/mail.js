// prettier-ignore
import User from 'database/Schema';
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import db from 'database/connection'

export default function handler(req, res) {
  const { name, message, email } = req.body;

  if (req.method === 'POST' && name && message && email) {
    const user = new User({
      name: name,
      email: email,
      message: message,
    });

    user.save((err) => {
      if (err) {
        res.json({ message: 'error' });
      } else {
        res.json({ message: 'success' });
      }
    });
  } else {
    res.status(404).send('Error: ///<>hjnda34');
  }
}
