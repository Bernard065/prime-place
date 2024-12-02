import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log("User registered:", newUser);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === "P2002") {
      // Prisma unique constraint violation
      const target = error.meta?.target || [];
      if (target.includes("email")) {
        return res.status(400).json({ error: "Email already in use." });
      } else if (target.includes("username")) {
        return res.status(400).json({ error: "Username already in use." });
      }
    }
    res.status(500).json({ error: "Failed to create user." });
  }
};

export const login = async (req, res) => {
  
};

export const logout = (req, res) => {
  
};
