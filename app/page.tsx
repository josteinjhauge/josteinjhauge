import { Container } from "@mui/material";
import Intro from "@/components/Intro";
import { Projects } from "@/components/projects/Projects";
import SideProjects from "@/components/sideProjects/Hooby";

export default function Home() {
  return (
   <Container>
    <Intro />
    <Projects />
    {/* <SideProjects /> */}
   </Container>
  );
}
