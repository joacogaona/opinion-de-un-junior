import { referentsInfo } from "../../mocks/referentsInfo";
import { ReferentType } from "../../mocks/referentsInfo";
import { capitalizeFirstLetter } from "../../utils/format";
import { useRouter } from "next/router";

const Referent = ({ referent }: { referent: ReferentType }) => {
  const { name, twitter, talkLink, talkName, description } = referent;
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>Atrás</button>
      <div className="flex flex-col justify-center items-center h-screen leading-10 md:w-1/2 lg:w-1/2 mx-auto">
        <a
          href={twitter}
          className="underline underline-offset-8 decoration-purple-500 mx-2"
        >
          <h2 className="text-3xl mb-2">{capitalizeFirstLetter(name)}</h2>
        </a>

        <p className="leading-5 text-justify mt-4">{description}</p>
        <div className="mt-6">
          <a
            href={talkLink}
            className="underline underline-offset-8 decoration-purple-500 mx-2 "
          >
            Charla que me gustó: {talkName}
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/referents/1",
      "/referents/2",
      "/referents/3",
      "/referents/4",
      "/referents/5",
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: { referent: referentsInfo[parseInt(params.id) - 1] },
  };
}

export default Referent;
