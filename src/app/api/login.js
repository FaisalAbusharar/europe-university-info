import { createUser, findUserByUsername } from '../../../lib/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await createUser(username, password);
    res.status(201).json({ message: 'User created successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
