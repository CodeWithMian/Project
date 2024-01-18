import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  deleteAddress,
  getAddress,
  updateAddress,
} from "@/backend/controllers/addressControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

import onError from "@/backend/middlewares/errors";

const route = createRouter();

dbConnect();

route.use(isAuthenticatedUser).get(getAddress);
route.use(isAuthenticatedUser).put(updateAddress);
route.use(isAuthenticatedUser).delete(deleteAddress);

export default route.handler({ onError });