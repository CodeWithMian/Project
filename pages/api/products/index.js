import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getProducts, newProduct } from "@/backend/controllers/productControllers";
// import Head from "@/app/head";

const router = createRouter();

dbConnect();
// Head();

router.post(newProduct);
router.get(getProducts);


export default router.handler();