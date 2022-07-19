import { toolsInfo, ToolType } from "../../mocks/toolsInfo";
import { capitalizeFirstLetter } from "../../utils/format";
const Tool = ({ tool }: { tool: ToolType }) => {
  const { name, link, description } = tool;
  return (
    <div className="flex flex-col justify-center items-center h-screen leading-10 md:w-1/2 lg:w-1/2 mx-auto text-center">
      <a
        href={link}
        className="underline underline-offset-8 decoration-purple-500 mx-2"
      >
        <h2 className="text-3xl mb-2">{capitalizeFirstLetter(name)}</h2>
      </a>

      <p className="leading-5 text-justify mt-4">{description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/tools/1", "/tools/2", "/tools/3"],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: { tool: toolsInfo[parseInt(params.id) - 1] },
  };
}

export default Tool;
