const Users = require('../repository/users');
const { HttpCode } = require('../config/constant');

const registration = async (req, res, next) => {
  const { name, email, password, gender } = req.bode;
  const user = await Users.findByEmail(email);
  if (user) {
    return res.status(HttpCode.CONFLICT).json({
      status: 'error',
      code: HttpCode.CONFLICT,
      message: 'Email is already exist',
    });
  }

  try {
    const newUser = await User.create({ name, email, password, gender });
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        gender: newUser.gender,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  res.json();
};

const logout = async (req, res, next) => {
  res.json();
};

module.exports = {
  registration,
  login,
  logout,
};
