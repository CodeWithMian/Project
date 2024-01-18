import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controllers/authControllers";
// import Head from "@/app/head";
import onError from '@/backend/middlewares/errors'
const router = createRouter();

dbConnect();
// Head();

router.post(registerUser);
// router.get(getProducts);


export default router.handler({onError});