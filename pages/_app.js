import "@/styles/globals.css";
import Head from "next/head";
import { AuthUserProvider } from "@/firebase/auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Login-Signup</title>
      </Head>

      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}
