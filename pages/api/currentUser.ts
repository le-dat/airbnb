import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from "@/libs/prismadb";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error("User is not logged in");
  }

  const existingUser = await prismadb.user.findUnique({
    where: { email: session.user.email },
  });

  if (!existingUser) {
    return res.status(405).json(null);
  }
  const currentUser = {
    ...existingUser,
    createdAt: existingUser.createdAt?.toISOString(),
    updatedAt: existingUser.updatedAt?.toISOString(),
    emailVerified: existingUser.emailVerified?.toISOString() || null,
  };
  return res.status(200).json(currentUser);
};
export default handler;
