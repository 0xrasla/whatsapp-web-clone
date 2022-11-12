const { CommonErrors } = require("../response/CommonError");
const { userModel: User } = require("../models");

exports.createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    if (!username || !email)
      throw new CommonErrors(res, "Fields Required").throw();

    const _exists = await User.findOne({ email });

    if (_exists)
      throw new CommonErrors(res, "User With Same email already found").throw();

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
