import Head from "next/head"
import { motion } from "framer-motion"
import { VscGithub } from "react-icons/vsc"

export default function Home() {
  return (
    <div className="container mx-auto p-1 min-h-screen flex flex-col justify-between">
      <Head>
        <title>zeasy home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header
        className="px-10 py-6 duration-1000 ease-in-out"
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="font-bold text-2xl">zeasy.dev</h1>
      </motion.header>

      <motion.main
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center duration-500 ease-in-out"
      >
        <h1 className="text-white text-5xl px-5 mb-5">
          Olá, <br /> meu nome é José Yuri.
        </h1>
        <h2 className="text-xl  mb-5">
          Eu construo coisas pra internet, para todos.
        </h2>
        <div className="flex justify-center items-center">
          <a className="underline" href="mailto:jozeyuri@gmail.com">
            {"> diga oi"}
          </a>
          <a
            href="https://github.com/zeyuri"
            rel="nofollow me"
            className="ml-4"
          >
            <VscGithub />
          </a>
        </div>
      </motion.main>

      <footer className="flex justify-center text-white">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by vercel
        </a>
      </footer>
    </div>
  )
}
