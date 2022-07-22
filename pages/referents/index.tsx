import { referentsInfo } from "../../mocks/referentsInfo";
import type { InferGetStaticPropsType } from "next";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";

const Tools = ({
  referentsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="flex flex-col  items-center my-10">
        <h1>Referentes de contenido</h1>
        <span className="text-sm ">(para mantenerse actualizade)</span>
      </div>
      <div>
        {referentsData.map((referent) => {
          return (
            <div key={referent.id} className="my-10">
              <div className="flex flex-row items-center font-bold">
                <h2 className="mr-2 ">{referent.name}</h2>
                <div className="border border-purple-500 grow" />
              </div>
              <p className="mb-2">{referent.description}</p>
              <a
                href={referent.talkLink}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <span> Contenido recomendado: </span>
                <span className="text-purple-500 flex flex-row items-center">
                  {referent.talkName}
                  <ArrowCircleRightIcon className="ml-1 h-5 w-5 " />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      referentsData: referentsInfo,
    },
  };
}

export default Tools;
