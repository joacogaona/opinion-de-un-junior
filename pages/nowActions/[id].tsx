import { nowActionsInfo } from "../../mocks/nowActionsInfo";
import { NowAction } from "../../mocks/nowActionsInfo";
import { capitalizeFirstLetter } from "../../utils/format";

const NowAction = ({ nowAction }: { nowAction: NowAction }) => {
  const { title, description, items } = nowAction;
  return (
    <div className="flex flex-col justify-center items-center h-screen leading-10 md:w-1/2 lg:w-1/2 mx-auto">
      <h2 className="text-3xl mb-2">{capitalizeFirstLetter(title)}</h2>
      <div>
        {items.map((item) => {
          return (
            <a
              key={item.name}
              href={item.link}
              className="underline underline-offset-8 decoration-purple-500 mx-2"
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <p className="leading-5 text-justify mt-4">{description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/nowActions/1", "/nowActions/2", "/nowActions/3", "/nowActions/4"],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: { nowAction: nowActionsInfo[parseInt(params.id) - 1] },
  };
}

export default NowAction;
