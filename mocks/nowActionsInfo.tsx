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
    title: "curso",
    description:
      "Es un curso gratis de Harvard. Con este curso pretendo reforzar mi conocimiento general ya que no estudié nada relacionado a sistemas en la universidad.",
    items: [
      {
        link: "https://www.edx.org/es/course/introduction-computer-science-harvardx-cs50x",
        name: "CS50's Introduction to Computer Science",
      },
    ],
  },
  {
    id: 2,
    title: "trabajo",
    items: [
      {
        link: "https://www.linkedin.com/in/joaquingaona-react/",
        name: "En búsqueda",
      },
    ],
    description:
      "Renuncié a mi anterior trabajo hace ya 3 meses porque quería un cambio, y ahora estoy con entrevistas para entrar a algún nuevo lugar.",
  },
  {
    id: 3,
    title: "probando",
    items: [
      {
        link: "https://nextjs.org/",
        name: "NextJs",
      },
      { link: "https://www.typescriptlang.org/", name: "Typescript" },
    ],
    description:
      "NextJs es un framework de React que nos permite mejorar el SEO y la velocidad de nuestra web. Para mucho de los referentes que sigo desarrollar en Javascript sin Typescript ya casi no tiene sentido (obvio que está biena aprender primero javascript, pero después es recomendable dar el paso a Typescript).",
  },
  {
    id: 4,
    title: "viviendo en",
    items: [
      {
        link: "https://es.wikipedia.org/wiki/Panam%C3%A1",
        name: "Panamá",
      },
    ],
    description:
      "Hace 7 meses ya que estoy viajando por Latinoamerica y quedandome 3 meses en cada país, pase por Perú, Colombia, ahora Panamá y próximamente México.",
  },
];

export { nowActionsInfo, type NowAction, type NowActions };
