import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
