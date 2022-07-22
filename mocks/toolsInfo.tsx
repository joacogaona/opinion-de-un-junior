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
    link: "https://tanstack.com/query/v4/docs/overview",
    description:
      "Para manejar la información que nos llega de las API a lo largo de toda nuestra app. Chau Redux.",
  },
  {
    id: 2,
    name: "Tailwind Css",
    link: "https://tailwindcss.com/docs/utility-first",
    description:
      "Me facilita mucho aplicar estilos en una app! Lo hago más rápido y mejor.",
  },
  {
    id: 3,
    name: "NextJs",
    link: "https://nextjs.org/learn/foundations/about-nextjs",
    description:
      "Me permite crear una web con React pero que tenga buena performance y buen SEO.",
  },

  {
    id: 4,
    name: "Excalidraw",
    link: "https://excalidraw.com/",
    description:
      "Puedo crear diagramas de manera simple y rápida para pensar en la arquitectura básica de la app.",
  },
];

export { toolsInfo, type ToolsInfoType, type ToolType };
