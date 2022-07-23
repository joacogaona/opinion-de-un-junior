type NowActions = NowAction[];
type NowAction = {
  id: number;
  title: string;
  link?: string;
  description: string;
};
const nowActionsInfo: NowActions = [
  {
    id: 1,
    title: "curso CS50s Introduction to Computer Science",
    link: "https://www.edx.org/es/course/introduction-computer-science-harvardx-cs50x",

    description:
      "Quiero reforzar mi conocimiento general de sistemas, ya que no tengo educación formal en eso.",
  },
  {
    id: 2,
    title: "buscando trabajo",
    description:
      "Renuncié a mi anterior trabajo para cambiar de industria, y ahora estoy buscando a través de Linkedin principalmente.",
  },
  {
    id: 3,
    title: "probando Typescript, NextJs  y Tailwind",
    description:
      "Uno por obligación, otro por curiosidad, y el restante por placer.",
  },
  {
    id: 4,
    title: "viviendo en Panamá",
    description:
      "Hace ya 7 meses que estoy viajando por Latinoamerica. Pasé por Perú, Colombia y ahora Panamá.",
  },
];

export { nowActionsInfo, type NowAction, type NowActions };
