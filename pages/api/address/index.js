import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getAddresses, newAddress } from "@/backend/controllers/addressControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
// import { registerUser } from "@/backend/controllers/authControllers";
// import Head from "@/app/head";
import onError from '@/backend/middlewares/errors'

const router = createRouter({onError});

dbConnect();
// Head();

router.use(isAuthenticatedUser).post(newAddress);
router.use(isAuthenticatedUser).get(getAddresses);


export default router.handler({onError});