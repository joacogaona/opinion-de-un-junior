import Head from "next/head";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

type Sections = { path: string; name: string }[];

const sections: Sections = [
  { path: "/herramientas", name: "Herramientas recomendadas" },
  { path: "/referentes", name: "Referentes" },
  { path: "/blog", name: "Blog" },
  { path: "/sumate", name: "Sumate" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div>
      <Head>
        <title className="text-3xl font-bold ">Opinión de un Junior</title>
        <meta
          name="description"
          content="Opiniones, herramientas, videos y notas que me ayudan a avanzar en mi carrera como desarrollador web"
        />
      </Head>
      {pathname !== "/" ? (
        <header className=" pt-5">
          <Link href="/">
            <a className="flex flex-row justify-end items-center">
              Inicio
              <ArrowCircleRightIcon className="ml-1 h-5 w-5 " />
            </a>
          </Link>
        </header>
      ) : null}

      <main>{children}</main>
      <footer className="flex flex-col ">
        {pathname !== "/" ? (
          <div className="flex flex-col mb-10">
            <span className="self-center underline underline-offset-8 decoration-purple-500 mb-5 mt-10">
              Otras secciones
            </span>
            <div className="flex flex-wrap justify-around ">
              {sections.map((section) => {
                const { path, name } = section;
                if (path !== pathname) {
                  return (
                    <button
                      key={path}
                      className="p-2 border-2 border-purple-500 rounded-lg my-2 hover:bg-purple-500"
                      onClick={() => router.push(`${path}`)}
                    >
                      {name}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        ) : null}

        <div className="flex flex-row justify-between items-center border-t-2 border-purple-500">
          <div className="w-1/2 justify-around flex">
            <SocialIcon
              url="https://twitter.com/joacogaonaa"
              bgColor="#a855f7"
              target="_blank"
              style={{ width: "30px", height: "30px" }}
              rel="nofollow"
            />
            <SocialIcon
              url="https://www.instagram.com/joacogprograma/?hl=es"
              bgColor="#a855f7"
              style={{ width: "30px", height: "30px" }}
              target="_blank"
              rel="nofollow"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/joaquingaona-react/"
              bgColor="#a855f7"
              style={{ width: "30px", height: "30px" }}
              target="_blank"
              rel="nofollow"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCDq2-i4_HXuIAzOVADPUUGg"
              bgColor="#a855f7"
              style={{ width: "30px", height: "30px" }}
              target="_blank"
              rel="nofollow"
            />
          </div>
          <a
            href={"https://www.youtube.com/channel/UCDq2-i4_HXuIAzOVADPUUGg"}
            target="_blank"
            className="flex items-center"
            rel="noreferrer"
          >
            <Image
              src="/logo-joacog.png"
              alt="Logo Joacog"
              width={50}
              height={70}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
