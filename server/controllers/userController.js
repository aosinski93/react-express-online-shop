const User = require("../models/User");

exports.user_addUser = (req, res) => {
  let { username, email, password, isAdmin } = req.body;

  let user = {
    username,
    email,
    password,
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

    if(!user) {
        return res.json({msg: `No such user, please check the username`});
    }

    if (req.path.indexOf("admin") !== -1 && user.isAdmin !== true) {
      res.json({ msg: `No Admin access granted` });
    } else {
      res.json(
        validateUser(user, inputPassword)
          ? { msg: `Hi ${user.username}`, user }
          : `Wrong password`
      );
    }
  });
};

const validateUser = (user, inputPassword) => {
  return user.password === inputPassword;
};
