
import { notFound } from "next/navigation";
import { FC, useMemo } from "react";
import Details from "../../../components/projects/Details";
import projects from "../../../lib/projects";

interface Props {
  params: { slug: string };
}

const Page: FC<Props> = ({ params: { slug } }) => {
  const project = useMemo(
    () => projects.find((project) => project.path === slug),
    [slug]
  );

  if (!project) {
    notFound();
  }

  return <Details project={project} />;
};

export default Page;