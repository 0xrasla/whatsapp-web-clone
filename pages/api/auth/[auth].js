import { hash, compare } from "bcrypt";
import { prisma } from "../../db/client";
import { checkLength } from "../../../utils/helpers";

export default async function handler(req, res) {
  const { auth } = req.query;

  if (req.method != "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (auth == "login") return handleLogin(req, res);
  else if (auth == "signup") return handleSignup(req, res);
}

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  const isValid = await compare(password, user.password);

  if (!isValid) {
    return res.json({
      message: "Invalid password",
    });
  }

  return res.json({
    message: "Login Successful",
    ok: true,
  });
};

const handleSignup = async (req, res) => {
  const { email, password, username, picture } = req.body;

  const hashedPassword = await hash(password, 10);

  const existingOne = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  const userNameExists = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (existingOne) {
    return res.json({
      message: "User already exists",
    });
  }

  if (userNameExists) {
    return res.json({
      message: "Username already exists",
    });
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      username: username,
      picture: picture,
      online: false,
    },
  });

  return res.json({
    message: "Signup Successful",
    user,
  });
};
