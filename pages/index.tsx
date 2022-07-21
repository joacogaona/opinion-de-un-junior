import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { capitalizeFirstLetter } from "../utils/format";
import Link from "next/link";
import { nowActionsInfo } from "../mocks/nowActionsInfo";
import { referentsInfo } from "../mocks/referentsInfo";
import { toolsInfo } from "../mocks/toolsInfo";
import {
  ArrowNarrowUpIcon,
  ArrowNarrowDownIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Home = ({
  nowData,
  referentsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div>
      <section id="intro" className=" h-screen">
        <div className="flex flex-col justify-center items-start h-2/5 w-full">
          <h1>Por un junior,</h1>
          <h1 className="text-purple-500 ">para juniors.</h1>
        </div>

        <div className="flex flex-wrap justify-around">
          <button
            className="p-2 border-2 border-purple-500 rounded-lg my-2 hover:bg-purple-500"
            onClick={() => router.push("/tools")}
          >
            Herramientas preferidas
          </button>
          <button
            className="p-2 border-2 border-purple-500 rounded-lg my-2"
            onClick={() => router.push("/referents")}
          >
            Referentes
          </button>
          <button
            className="p-2 border-2 border-purple-500 rounded-lg my-2"
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
          <button
            className="p-2 border-2 border-purple-500 rounded-lg my-2"
            onClick={() => router.push("/aboutMe")}
          >
            Sobre mí
          </button>
          <button
            className="p-2 border-2 border-purple-500 rounded-lg my-2"
            onClick={() => router.push("/why")}
          >
            ¿Por qué hago esto?
          </button>
        </div>
        <div className="flex flex-col items-center h-1/5 justify-end ">
          <span>Si querés un recorrido guiado</span>
          <ArrowNarrowDownIcon className="h-12 w-12 text-purple-500" />
        </div>
      </section>
      <section id="whoAmI" className="my-20">
        <h3 className="w-max self-center underline underline-offset-8 decoration-purple-500 mb-10">
          ¿Cómo se ve mi camino?
        </h3>
        <div className="flex flex-col justify-center text-center">
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>Conocimiento nulo en</h4>
            <h4>2019</h4>
          </div>
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>4 clases Html en </h4>
            <h4>Educacion IT</h4>
          </div>
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>Curso Html/css/javascript en</h4>
            <h4>Udemy</h4>
          </div>
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>Coding Bootcamp en</h4>
            <h4>Plataforma 5</h4>
          </div>
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>Asistente de Coding Bootcamp en</h4>
            <h4>Plataforma 5</h4>
          </div>
          <div className="p-4 border-2 border-purple-500 rounded-lg my-2">
            <h4>Desarrollador Full Stack en</h4>
            <h4>Keiron</h4>
          </div>
        </div>
      </section>
      <section id="now" className="h-screen mb-20">
        <h3 className="w-max self-center underline underline-offset-8 decoration-purple-500 mb-10">
          ¿Qué estoy haciendo ahora?
        </h3>
        <div className=" h-full flex justify-around flex-col ">
          {nowData.map((nowObj) => {
            const { title, id, description } = nowObj;
            return (
              <div key={id} className="flex flex-col ">
                <span className="text-purple-500">
                  {capitalizeFirstLetter(title)}
                </span>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="referents" className="h-screen">
        <h3 className="self-center underline underline-offset-8 decoration-purple-500 mb-10">
          ¿Qué contenido me gusta?
        </h3>

        <div className="flex justify-around flex-col h-full items-center">
          {referentsData.map((referent) => {
            const { id, name, talkLink, talkName } = referent;
            return (
              <div key={id} className="flex flex-row ">
                <div className="w-1/2">
                  <Link href={`referents/${id.toString()}`}>
                    <a className="hover:underline underline-offset-8 decoration-purple-500 text-purple-500 ">
                      {name}
                    </a>
                  </Link>
                </div>
                <div className="w-1/2">
                  <a target="_blank" href={talkLink} rel="noreferrer">
                    {talkName}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="whatMore" className="h-screen">
        <h3 className="self-center underline underline-offset-8 decoration-purple-500 mb-10">
          ¿Qué más vas a encontrar acá?
        </h3>
        <div className="flex flex-col text-center">
          <p>
            Todo lo que vaya descubriendo y experimentando. Herramientas que
            encuentre, cursos nuevos que haga, videos que me ayuden a entender
            temas complicados y opiniones de todo.
          </p>
          <p className="mt-5 mb-10">
            Ahora si, podés subir y elegir una sección que te interese. Espero
            que te sirva!
          </p>
          <Link href="/#intro">
            <a className="self-center">
              <ArrowNarrowUpIcon className="h-12 w-12 text-purple-500 " />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      nowData: nowActionsInfo,
      referentsData: referentsInfo,
      toolsData: toolsInfo,
    },
  };
}

export default Home;
