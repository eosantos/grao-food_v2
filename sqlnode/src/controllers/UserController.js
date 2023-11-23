const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) res.status(400).send({ message: 'e-mail ou password incorretos'})
    if (user.password !== password) res.status(400).send({ message: 'e-mail ou password incorretos'})

    return res.status(200).json(user);
  },

  async store(req, res) {
    const { name, email, password, cpf } = req.body;

    const user = await User.create({ name, email, password, cpf });

    return res.json(user);
  }
};