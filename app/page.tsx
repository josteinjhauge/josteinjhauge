import { Container } from "@mui/material";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

const Page = () => {
  return (
    <Container>
      {/* <ScrollControls pages={2} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection}/>
      </ScrollControls> */}
      <Intro />
      <Projects />
    </Container>
  );
}
  

export default Page;
