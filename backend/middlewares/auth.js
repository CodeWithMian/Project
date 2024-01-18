import { getSession } from "next-auth/react";
import ErrorHandler from "../utils/errorHandler";

const isAuthenticatedUser = async (req, res, next) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      throw new ErrorHandler("Login first to access this route", 401);
    }

    req.user = session.user;

    return next();
  } catch (error) {
    return next(error);
  }
};

export {isAuthenticatedUser};
