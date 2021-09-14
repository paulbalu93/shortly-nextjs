import Head from "next/head";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" overflow-x-hidden  mt-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Banner />
      <CallToAction />
      <footer>
        <Footer />
      </footer>
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></main> */}

      {/* <footer className="">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/logo.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}