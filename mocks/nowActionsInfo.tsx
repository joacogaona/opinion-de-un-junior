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
    title: "buscando trabajo en Europa",
    description:
      "Estaba trabajando en una empresa pública de Estados Unidos y caí en un despido masivo de los que hubo en la industria tech. Ahora quiero ver la posibilidad de encontrar un trabajo para poder irme a Europa a vivir un tiempo.",
  },
  {
    id: 3,
    title: "probando Typescript, NextJs  y Tailwind",
    description:
      "Uno por obligación, otro por curiosidad, y el restante por placer.",
  },
  {
    id: 4,
    title: "viviendo en Argentina",
    description:
      "El último año y medio estuve viajando por Latinoamérica. Pasé por Perú, Colombia, Panamá, México y Cuba. Podés conocer más de esta experiencia en mi canal de Youtube Joacog programa.",
  },
];

export { nowActionsInfo, type NowAction, type NowActions };
