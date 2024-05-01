export interface Painting {
  path: URLPath;
  name: string;
  date: string;
  subtitle: string;
  description: string[];
  price: string;
  imgUrl: string;
  id: number;
}

type URLPath =
  | "green-arrow"
  | "sandworm"
  | "cat-ant";

  const paintings: Painting[] = [
    {
      id: 0,
      path: "green-arrow",
      date: "2023",
      name: "Green Arrow",
      subtitle: "A painting of a green arrow.",
      description: [
        "acryllic painting on canvas",
      ],
      imgUrl: "/img/paintings/green-arrow.jpg",
      price: "3000",
    },
    {
      id: 1,
      path: "sandworm",
      date: "2023",
      name: "Sandworm",
      subtitle: "A painting of a sandworm.",
      description: [
        "acryllic painting on canvas",
      ],
      imgUrl: "/img/paintings/sandworm.jpg",
      price: "3000",
    },
    {
      id: 2,
      path: "cat-ant",
      date: "2023",
      name: "Cat Ant",
      subtitle: "A painting of a cat and a ant.",
      description: [
        "Acryllic painting on canvas",
      ],
      imgUrl: "/img/paintings/cat_ant.jpg",
      price: "10000",
    }
  ];

  export default paintings;