type ReferentsInfoType = ReferentType[];

type ReferentType = {
  id: number;
  name: string;
  twitter: string;
  talkLink: string;
  talkName: string;
  description: string;
};

const referentsInfo: ReferentsInfoType = [
  {
    id: 1,
    name: "Theo Browne",
    twitter: "https://twitter.com/t3dotgg",
    talkLink: "https://www.youtube.com/watch?v=hRSwSAr-gok",
    talkName: "Stop Using Javascript Objects",
    description:
      "Es muy entretenido escucharlo porque además de saber mucho, tiene opiniones muy polémicas y una opinión clara y tajante de muchas tecnologías.",
  },
  {
    id: 2,

    name: "Nadia Makarevich",
    twitter: "https://twitter.com/adevnadia",
    talkLink:
      "https://portal.gitnation.org/contents/lets-talk-about-re-renders",
    talkName: "Let`s talk abour re-renders",
    description:
      "Tiene un blog con mucho contenido orientado a patrones y optimización en React. Es todo super práctico y con ejemplos de código entonces lo puedo aplicar directo en mi trabajo.",
  },
  {
    id: 3,

    name: "Goncy Pozzo",
    twitter: "https://twitter.com/goncy",
    talkLink: "https://www.youtube.com/watch?v=-w-P4u0x8ig",
    talkName: "Mock Interview with Dan Abramov",
    description:
      "La mayor parte del contenido es en español y tiene unos simulacros de entrevistas que ayudan mucho si queres ver como son esos procesos.",
  },
  {
    id: 4,

    name: "Dan Abramov",
    twitter: "https://twitter.com/dan_abramov",
    talkLink: "https://www.youtube.com/watch?v=uqII0AOW1NM",
    talkName: "Dan Abramov SLAYS Frontend Interview w/ Ex-Twitch Engineer",
    description:
      "Se encuentra actualmente trabajando en la nueva documentación de React, y en Twitter suele publicar las actualizaciones y pide feedback a cualquier/a programador/a en especial a juniors.",
  },
  {
    id: 5,

    name: "Iris Schaffer",
    twitter: "https://twitter.com/iris_schaffer",
    talkLink:
      "https://portal.gitnation.org/contents/impact-growing-as-an-engineer-783",
    talkName: "Growing as an Engineer",
    description:
      "A Iris no la conozco mucho pero me encantó una charla que dió en el último React Summit sobre cómo crecer como desarrollador/a web. Habilidades no técnicas pero que nos ayudan muchisimo para seguir creciendo.",
  },
];

export { referentsInfo, type ReferentsInfoType, type ReferentType };
