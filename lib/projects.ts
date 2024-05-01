import { ReactHTMLElement } from "react";

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
  | "elrapp-byggherre"
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
        "Den store bokmålsordboka is the largest Norwegian dictionary, with over 200 000 words. At Ovitas AS I took part in developing the mobile app, managing the external testing and making the landing page.",
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
        "The HunNor Dictionary is an open-source Norwegian-Hungarian dictionary. At Ovitas AS, I took part in developing the mobile app.",
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
    {
      path: "elrapp",
      date: "2021 - 2023",
      name: "Elrapp",
      subtitle: "Web app for the Norwegian road department.",
      description: [
        "Elrapp is an electronic report system developed for and used by the norwegian road department. At Norconsult AS, I took part in developing the web app.",
      ],
      imgUrl: "/img/projectIcons/elrapp.jpg",
      appStoreUrl: null,
      playStoreUrl: null,
      links: [
        {
          name: "Landing page",
          link: "https://elrapp.atlas.vegvesen.no/#/login",
        },
      ],
      technologies: [
        {
          name: "Vue",
          link: "https://vuejs.org/",
        },
        {
          name: "Vuex",
          link: "https://vuex.vuejs.org/",
        },
        {
          name: "Docker",
          link: "https://www.docker.com/",
        },
        {
          name: ".NET",
          link: "https://dotnet.microsoft.com/en-us/",
        },
        {
          name: "SQLite",
          link: "https://www.sqlite.org/index.html",
        },
      ],
    },
    {
      path: "elrapp-byggherre",
      date: "2021 - 2023",
      name: "Elrapp byggherre",
      subtitle: "Mobile app for the Norwegian road department.",
      description: [
        "Elrapp bygghere is an electronic report system developed for and used by the norwegian road department. It uses maps and geolocation to quickly snap photos of damages along the road. At Norconsult AS, I took part in developing the mobile app.",
      ],
      imgUrl: "/img/projectIcons/elrapp_byggherre.jpg",
      appStoreUrl: null,
      playStoreUrl: "https://play.google.com/store/apps/details?id=no.vegvesen.elrapp.kontroll",
      links: null,
      technologies: [
        {
          name: "Xamarin",
          link: "https://dotnet.microsoft.com/en-us/apps/xamarin",
        },
        {
          name: ".NET",
          link: "https://dotnet.microsoft.com/en-us/",
        },
        {
          name: "SQLite",
          link: "https://www.sqlite.org/index.html",
        },
      ],
    },
    {
      path: "fido",
      date: "2023 - present",
      name: "FIDO",
      subtitle: "Web app for norwegian railway services.",
      description: [
        "Fido is a electronic drivers guide to the trains, as well as being communication plattform between drivers and control operators. At Bouvet ASA, I took part in developing the web app.",
      ],
      imgUrl: "/img/projectIcons/fido.jpg",
      appStoreUrl: null,
      playStoreUrl: null,
      links: [
        {
          name: "Landing page",
          link: "https://fido.banenor.no/",
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
          name: ".NET",
          link: "https://dotnet.microsoft.com/en-us/",
        },
        {
          name: "SQLite",
          link: "https://www.sqlite.org/index.html",
        },
      ],
    },
    {
      path: "haugefarmen",
      date: "2024 - present",
      name: "HaugeFarmen",
      subtitle: "Webpage for HaugeFarmen AS.",
      description: [
        "A web app for the family farm.",
      ],
      imgUrl: "/img/projectIcons/haugefarmen.jpg",
      appStoreUrl: null,
      playStoreUrl: null,
      links: [
        {
          name: "Landing page",
          link: "http://haugefarmen.no/",
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
      ],
    },
  ];

  export default projects;


