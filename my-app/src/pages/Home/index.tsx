import { lazy } from "react";
import HomePage from "./HomePageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ContentBlock
        direction="right"
        title={HomePage.title}
        content={HomePage.text}
        button={HomePage.button}
        icon="developer.svg"
        id="intro"
      />
    </Container>
  );
};

export default Home;
