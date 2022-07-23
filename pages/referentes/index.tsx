import { referentsInfo } from "../../mocks/referentsInfo";
import type { InferGetStaticPropsType } from "next";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const Tools = ({
  referentsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="flex flex-col  items-center my-5">
        <h1>Referentes de contenido</h1>
        <span className="text-sm ">(para mantenerse actualizade)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {referentsData.map((referent) => {
          return (
            <div key={referent.id} className="flex flex-col justify-between">
              <div>
                <div className="flex flex-row items-center font-bold">
                  <h2 className="mr-2 ">{referent.name}</h2>
                  <div className="border border-purple-500 grow" />
                </div>
                <p className="mb-2">{referent.description}</p>
              </div>
              <div>
                <a
                  href={referent.talkLink}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="self-end"
                >
                  <span> Contenido recomendado: </span>
                  <span className="text-purple-500 flex flex-row items-center">
                    {referent.talkName}
                    <ArrowCircleRightIcon className="ml-1 h-5 w-5 " />
                  </span>
                </a>
              </div>
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
