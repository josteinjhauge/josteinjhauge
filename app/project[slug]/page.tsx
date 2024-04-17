
import Details from "@/components/projects/Details";
import projects from "@/lib/projects";
import { notFound } from "next/navigation";
import { FC, useMemo } from "react";

interface Props {
  params: { slug: string };
}

const Page: FC<Props> = ({ params: { slug } }) => {
  const activeProject = useMemo(
    () => projects.find((project) => project.path === slug),
    [slug]
  );

  if (!activeProject) {
    notFound();
  }

  return <Details project={activeProject} />;
};

export default Page;