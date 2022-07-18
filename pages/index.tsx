import type { NextPage, InferGetStaticPropsType } from "next";
import { capitalizeFirstLetter } from "../utils/format";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { nowActionsInfo } from "../mocks/nowActionsInfo";
import { referentsInfo } from "../mocks/referentsInfo";

const Home = ({
  nowData,
  referentsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        {/* <ul className="flex justify-around w-2/4 ">
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
        </ul> */}
      </header>

      <main>
        <div>
          <section id="intro" className=" h-screen flex justify-between  ">
            <div className="self-start pt-36">
              <h1>Por un junior,</h1>
              <h1 className="text-purple-500 ">para juniors.</h1>
            </div>
            <div>
              <a href={"/#now"}>
                <h3 className="w-max self-center underline underline-offset-8 decoration-purple-500 mb-10">
                  ¿Qué estoy haciendo ahora?
                </h3>
              </a>
            </div>
          </section>
          <section id="now" className="h-screen">
            <div className=" h-full flex justify-around flex-col items-center">
              {nowData.map((nowObj) => {
                const { title, items, id } = nowObj;
                return (
                  <div key={id} className="flex flex-col items-center">
                    <Link href={`nowActions/${id.toString()}`}>
                      <a className="hover:underline underline-offset-8 decoration-purple-500 text-center">
                        <span className="font-black text-xl self-center">
                          {capitalizeFirstLetter(title)}
                        </span>
                        <div className="flex justify-center">
                          {items.map((item) => (
                            <span key={item.name} className="text-center">
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div>
              <a href={"/#referents"}>
                <h3 className="self-center underline underline-offset-8 decoration-purple-500 mb-10">
                  ¿Quienes son mis referentes?
                </h3>
              </a>
            </div>
          </section>
          <section id="referents" className="h-screen">
            <div className="flex justify-around flex-col h-full items-center">
              {referentsData.map((referent) => {
                const { id, name } = referent;
                return (
                  <div
                    key={id}
                    className="flex flex-row items-start justify-between"
                  >
                    <Link href={`referents/${id.toString()}`}>
                      <a className="hover:underline underline-offset-8 decoration-purple-500">
                        {name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div>
              <a href={"/#tools"} className="text-center">
                <h3 className="self-center underline underline-offset-8 decoration-purple-500 mb-10">
                  ¿Cuáles son las librerías y frameworks que más me gustan?
                </h3>
              </a>
            </div>
          </section>
          <section id="referents" className="h-screen">
            <div className="flex justify-around flex-col h-full">
              <span>Herramientas</span>
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

export async function getStaticProps() {
  return {
    props: { nowData: nowActionsInfo, referentsData: referentsInfo },
  };
}

export default Home;
