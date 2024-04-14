import { Container } from "@mui/material";
import Intro from "@/components/Intro";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
   <Container>
    <Intro />
    <Projects />
   </Container>
  );
}
