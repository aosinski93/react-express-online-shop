const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.user_getUsers = (req, res) => {
  User.getUsers((err, users) => {
    if(err) {
      throw err;
    }

    res.send(users);
  })
};

exports.user_addUser = (req, res) => {
  let { username, email, password, isAdmin } = req.body;

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
  let { username, inputPassword } = req.body;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.json({ msg: `No such user, please check the username` });
    }

    if (req.path.indexOf("admin") !== -1 && user.isAdmin !== true) {
      res.json({ msg: `No Admin access granted` });
    } else {
      res.json(
        validateUser(inputPassword, user)
          ? { msg: `Hi ${user.username}`, user }
          : `Wrong password`
      );
    }
  });
};

const validateUser = (inputPassword, user) => {
  if (bcrypt.compareSync(inputPassword, user.password)) {
    return true;
  } else {
    return false;
  }
};

exports.toggleAdmin = (user) => {
  User.getUserById(user._id, (err, user) => {
    if(err) {
      throw err;
    }

    let update = user => ({
      ...user,
      isAdmin: !user.isAdmin
    });

    User.updateUser(user._id, update, {}, (err, updatedUser) => {
      if(err) {
        throw err;
      }
      res.send(updatedUser);
    })
  })
};