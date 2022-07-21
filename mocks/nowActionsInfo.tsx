type NowActions = NowAction[];
type NowAction = {
  id: number;
  title: string;
  items: { link: string; name: string }[];
  description: string;
};
const nowActionsInfo: NowActions = [
  {
    id: 1,
    title: "curso CS50s Introduction to Computer Science",
    description:
      "Quiero reforzar mi conocimiento general de sistemas, ya que no tengo educación formal en eso.",
    items: [
      {
        link: "https://www.edx.org/es/course/introduction-computer-science-harvardx-cs50x",
        name: "CS50's Introduction to Computer Science",
      },
    ],
  },
  {
    id: 2,
    title: "buscando trabajo",
    items: [
      {
        link: "https://www.linkedin.com/in/joaquingaona-react/",
        name: "En búsqueda",
      },
    ],
    description:
      "Renuncié a mi anterior trabajo hace ya 3 meses porque quería un cambio.",
  },
  {
    id: 3,
    title: "probando Typescript, NextJs  y Tailwind",
    items: [
      {
        link: "https://nextjs.org/",
        name: "NextJs",
      },
      { link: "https://www.typescriptlang.org/", name: "Typescript" },
    ],
    description:
      "Uno por obligación, otro por curiosidad, y el restante por placer.",
  },
  {
    id: 4,
    title: "viviendo en Panamá",
    items: [
      {
        link: "https://es.wikipedia.org/wiki/Panam%C3%A1",
        name: "Panamá",
      },
    ],
    description:
      "Hace ya 7 meses que estoy viajando por Latinoamerica. Pasé por Perú, Colombia y ahora Panamá.",
  },
];

export { nowActionsInfo, type NowAction, type NowActions };
