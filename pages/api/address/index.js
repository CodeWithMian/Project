import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getAddresses,
  newAddress,
} from "@/backend/controllers/addressControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

import onError from "@/backend/middlewares/errors";

const route = createRouter();

dbConnect();

route.use(isAuthenticatedUser).get(getAddresses);
route.use(isAuthenticatedUser).post(newAddress);

export default route.handler({ onError });
