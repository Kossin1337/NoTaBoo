import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";

// import { getServerSession } from "next-auth";
// import { authOptions } from "~/server/auth";

import prisma from "./prismaDB";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerSession(req, res, authOptions);
  const session = await getSession({ req })

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  console.log("serverAUTH: DONE");

  // if (!currentUser) {
  //   throw new Error("Not signed in");
  // }

  return { currentUser };
};

export default serverAuth;
