import { Container } from "@mui/material";
import Intro from "@/components/Intro";
import { Projects } from "@/components/projects/Projects";

const Page = () => (
  <Container>
    <Intro />
    <Projects />
  </Container>
);

export default Page;
