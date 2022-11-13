const { CommonErrors } = require("../response/CommonError");
const { userModel: User } = require("../models");

exports.createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    if (!username || !email)
      throw new CommonErrors(res, "Fields Required").throw();

    const _exists = await User.findOne({ email });
    const _usernameexists = await User.findOne({ username });

    if (_exists || _usernameexists)
      throw new CommonErrors(
        res,
        "User With Same email or username already found"
      ).throw();

    const user = new User({
      email: email,
      username: username,
    });

    await user.save();

    return res.json({
      message: "User Created",
      ok: true,
      data: user,
    });
  } catch (e) {
    return new CommonErrors(res, e.message).throw();
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({
      message: "Users Fetched",
      ok: true,
      data: users,
    });
  } catch (e) {
    return new CommonErrors(res, e.message).throw();
  }
};

exports.getContacts = async (req, res) => {
  try {
    const { userid } = req.body;

    if (!userid) throw new CommonErrors(res, "Fields Required").throw();

    const users = await User.findById(userid).populate("contacts");

    return res.json({
      message: "Users Fetched",
      ok: true,
      data: users,
    });
  } catch (e) {
    return new CommonErrors(res, e.message).throw();
  }
};
