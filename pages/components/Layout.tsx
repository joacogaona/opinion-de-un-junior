import Head from "next/head";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <div>
      <Head>
        <title className="text-3xl font-bold ">Opinión de un Junior</title>
        <meta
          name="description"
          content="Opiniones, herramientas, videos y notas que me ayudan a avanzar en mi carrera como desarrollador web"
        />
      </Head>

      {/* <header className="flex justify-center ">
        <Link href="/">
          <a>
            <Image
              src="/logo-joacog.png"
              alt="Logo Joacog"
              width={50}
              height={70}
            />
          </a>
        </Link>
      </header> */}
      <main>{children}</main>
      <footer className="flex flex-row justify-between items-center border-t-2 border-purple-500">
        <div className="w-1/2 justify-around flex">
          <SocialIcon
            url="https://twitter.com/joacogaonaa"
            bgColor="purple"
            target="_blank"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/joacogprograma/?hl=es"
            bgColor="purple"
            style={{ width: "30px", height: "30px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/joaquingaona-react/"
            bgColor="purple"
            style={{ width: "30px", height: "30px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCDq2-i4_HXuIAzOVADPUUGg"
            bgColor="purple"
            style={{ width: "30px", height: "30px" }}
            target="_blank"
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
      </footer>
    </div>
  );
};

export default Layout;
