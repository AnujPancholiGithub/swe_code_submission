const Users = require("../Data/Users");

const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(401)
        .send({ message: "Please Provide all credintials" });
    }

    //Try to find user is presnt or not in database [Note: I can use mongoDB also but here i am using array of users]

    const userIsExist = Users.find((user) => {
      return user.email === email;
    });

    if (userIsExist) {
      return res.status(201).send({
        message: "Deja Vu! You are alreadu our user please try to login",
      });
    }

    //if user is not present in our db try to make it

    const newUser = {
      name,
      email,
      password, //--> can use hashed password i wll trying to implement it later
      _id: uuid(),
    };

    //save the user
    Users.push(newUser);
  } catch (error) {}
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .send({ message: "Please Provide all credintials" });
    }

    //Try to find user is presnt or not in database [Note: I can use mongoDB also but here i am using array of users]

    const userIsExist = Users.find((user) => {
      return user.email === email && user.password;
    });

    //if user is not present in our db error it

    if (!userIsExist) {
      return res.status(201).send({
        message: "Ohh! You are not our user please try to signup",
      });
    }

    const token = jwt.sign({ email }, JWT_SECRET);

    res.status(200).send({ message: "Logged In SuccessFully", token });
  } catch (error) {}
};

module.exports = {
  RegisterUser,
  LoginUser,
};
