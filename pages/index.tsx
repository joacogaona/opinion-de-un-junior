import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title className="text-3xl font-bold ">Opinión de un Junior</title>
        <meta
          name="description"
          content="Opiniones, herramientas, videos y notas que me ayudan a avanzar en mi carrera como desarrollador web"
        />
      </Head>
      <header className="flex justify-end ">
        <ul className="flex justify-around w-2/4 ">
          <li>
            <Link href="/">
              <a>Entrevitas</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Herramientas</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Mi camino</a>
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll ">
          <section className=" h-screen ">
            <div className="mb-80 snap-center ">
              <h1>Una web creada por un junior</h1>
              <h1 className="text-purple-500 ">para juniors</h1>
            </div>
          </section>
          <section className=" h-screen bg-white snap-center">
            <div className="mb-80 ">
              <h1>Entrevistas</h1>
            </div>
          </section>
          <section className=" h-screen snap-center ">
            <div className="mb-80 ">
              <h1>Referentes</h1>
            </div>
          </section>
        </div>
      </main>

      <footer className="">
        <a
          href={"https://www.youtube.com/channel/UCDq2-i4_HXuIAzOVADPUUGg"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Powered by
          <span>
            <Image
              src="/logo-joacog.png"
              alt="Logo Joacog"
              width={50}
              height={70}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
