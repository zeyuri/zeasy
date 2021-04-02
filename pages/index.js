import Head from "next/head"

export default function Home() {
  return (
    <div className="container mx-auto p-1 min-h-screen flex flex-col justify-between">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-20 text-center">
        <h1 className="text-white text-5xl px-5">
          Olá, <br /> meu nome é José Yuri.
        </h1>
        <p className="mt-9">esse site esta em construção</p>
      </main>

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
