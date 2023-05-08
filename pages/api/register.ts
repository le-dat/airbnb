import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "fail", message: "Method not allowed!" });
  }

  try {
    const { email, password } = await req.body;
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(405).json({ status: "fail", message: "This email already used!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismadb.user.create({
      data: {
        email,
        hashedPassword,
      },
    });

    return res.status(200).json({ status: "success", message: "Register successfully!", data: user });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: `Server error: ${error}` });
  }
};

export default handler;
