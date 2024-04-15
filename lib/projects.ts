export interface Project {
    path: URLPath;
    name: string;
    date: string;
    subtitle: string;
    description: string[];
    imgUrl: string;
    links: null | Link[];
    technologies: null | Link[];
    privacy?: string[];
    appStoreUrl: string | null;
    playStoreUrl: string | null;
  }
  interface Link {
    name: string;
    link: string;
  }

  type URLPath =
  | "haugefarmen"
  | "elrapp"
  | "elrapp-mobile"
  | "fido"
  | "hunnor"
  | "den-store-bokmalsordboka";

  const projects: Project[] = [
    {
        path: "den-store-bokmalsordboka",
        date: "2019 - 2020",
        name: "Bokmålsordboka",
        subtitle: "iOS and Android app for the largest Norwegian dictionary.",
        description: [
          "Den store bokmålsordboka is the largest Norwegian dictionary, with over 200 000 words. At Ovitas AS I took part in developing the mobile app, managing the external testing and making the landing page. Later, development of the project was taken over by Davoti Solutions, my own company.",
        ],
        imgUrl: "/img/projectIcons/bokmalsordboka.jpg",
        appStoreUrl: "https://apps.apple.com/us/app/id1497725111",
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=no.ovitas.kirkeby.bokmalsordboka",
        links: [
          {
            name: "Landing page",
            link: "https://www.denstorebokmålsordboka.no/appen",
          },
        ],
        technologies: [
          {
            name: "React",
            link: "https://reactjs.org/",
          },
          {
            name: "Redux",
            link: "https://redux.js.org/",
          },
          {
            name: "Expo",
            link: "https://expo.io/",
          },
          {
            name: "React Native",
            link: "https://reactnative.dev/",
          },
          {
            name: "Typescript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "SQLite",
            link: "https://www.sqlite.org/index.html",
          },
        ],
      },
      {
        path: "hunnor",
        date: "2019 - 2020",
        name: "HunNor Dictionary",
        subtitle: "Mobile app for a Norwegian-Hungarian dictionary.",
        description: [
          "The HunNor Dictionary is an open-source Norwegian-Hungarian dictionary. At Ovitas AS, I took part in developing the mobile app. Later, development of the project was taken over by Davoti Solutions, my own company.",
        ],
        imgUrl: "/img/projectIcons/hunnor.jpg",
        appStoreUrl: null,
        playStoreUrl: null,
        links: [
          {
            name: "Landing page/web version",
            link: "https://dict.hunnor.net/",
          },
        ],
        technologies: [
          {
            name: "React",
            link: "https://reactjs.org/",
          },
          {
            name: "Redux",
            link: "https://redux.js.org/",
          },
          {
            name: "Expo",
            link: "https://expo.io/",
          },
          {
            name: "React Native",
            link: "https://reactnative.dev/",
          },
          {
            name: "SQLite",
            link: "https://www.sqlite.org/index.html",
          },
        ],
      },
  ];

  export default projects;


