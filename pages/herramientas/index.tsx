import { toolsInfo } from "../../mocks/toolsInfo";
import type { InferGetStaticPropsType } from "next";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const Tools = ({
  toolsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="h-screen">
      <h1 className="text-center my-5">Herramientas que me gustan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {toolsData.map((tool) => {
          return (
            <div key={tool.id} className="my-5">
              <a href={tool.link} target="_blank" rel="noreferrer">
                <div className="flex flex-row items-center text-purple-500">
                  <h2 className="mr-2">{tool.name}</h2>
                  <ArrowCircleRightIcon className="h-5 w-5 " />
                </div>
                <p>{tool.description}</p>
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
      toolsData: toolsInfo,
    },
  };
}

export default Tools;
