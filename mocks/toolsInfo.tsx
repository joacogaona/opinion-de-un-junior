type ToolsInfoType = ToolType[];

type ToolType = {
  id: number;
  name: string;
  link: string;
  description: string;
};

const toolsInfo: ToolsInfoType = [
  {
    id: 1,
    name: "Tanstack Query (React Query)",
    link: "https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/",
    description:
      "Esta herramienta sirve para manejar la información que nos llega de las API a lo largo de toda nuestra app. Me ayudo a simplificar el código de mis apps y de entender que un store global del estilo de Redux la mayoría de las veces NO hace falta. Hoy en día intento manejarrme con: useState para manejar estado local, useContext para compartir estados entre componentes (sin abusar), react-query para guardar y manejar toda la información que viene del back.",
  },
  {
    id: 2,
    name: "Tailwind Css",
    link: "https://tailwindcss.com/",
    description:
      "Me facilita mucho aplicar estilos en una app! Lo hago más rápido y mejor.",
  },
  {
    id: 3,
    name: "NextJs",
    link: "https://nextjs.org/",
    description:
      "Me permite crear una web con React pero que tenga buena performance y buen SEO.",
  },
];

export { toolsInfo, type ToolsInfoType, type ToolType };
