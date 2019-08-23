const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require('../config');
const jwt = require('jsonwebtoken');

exports.user_getUsers = (req, res) => {
  User.getUsers((err, users) => {
    if (err) {
      throw err;
    }

    res.send(users);
  })
};

exports.user_addUser = (req, res) => {
  let {username, email, password, isAdmin} = req.body;

  let hashedPassword = bcrypt.hashSync(password, 10);

  let user = {
    username,
    email,
    password: hashedPassword,
    isAdmin
  };

  User.addUser(user, (err, user) => {
    if (err) {
      throw err;
    }
    res.send(user);
  });
};

exports.user_userLogin = (req, res) => {
  let {username, inputPassword} = req.body;

  User.getUserByUsername(username, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).json({msg: 'No such user found. Check username'});

    const passwordIsValid = bcrypt.compareSync(inputPassword, user.password);
    if (!passwordIsValid) return res.status(401).json({msg: 'Wrong password', auth: false, token: null});

    const token = jwt.sign({id: user._id}, config.jwtSecret, {
      expiresIn: 86400
    });

    res.status(200).send({user: user, auth: true, token: token});
  });
};

exports.toggleAdmin = (user) => {
  User.getUserById(user._id, (err, user) => {
    if (err) {
      throw err;
    }

    let update = user => ({
      ...user,
      isAdmin: !user.isAdmin
    });

    User.updateUser(user._id, update, {}, (err, updatedUser) => {
      if (err) {
        throw err;
      }
      res.send(updatedUser);
    })
  })
};