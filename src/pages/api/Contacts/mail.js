/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import User from 'database/Schema';

export default function handler(req, res) {
  const { name, message, email } = req.body;

  if (req.method === 'POST' || !name || !message || !email) {
    const user = new User({
      name: name,
      email: email,
      message: message,
    });

    user.save((err) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.json({ message: 'success' });
      }
    });
  } else {
    res.status(404).send('Error: ///<>hda34');
  }
}
