import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import Intro from "@/components/Intro";

export default function Home() {
  return (
   <Container>
    <Intro />
   </Container>
  );
}
