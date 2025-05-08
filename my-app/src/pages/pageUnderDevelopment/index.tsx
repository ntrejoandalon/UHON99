import { lazy } from "react";
import PageUnderDevelopmentContent from "./PageUnderDevelopmentContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const PageUnderDevelopment = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={PageUnderDevelopmentContent.title}
        content={PageUnderDevelopmentContent.text}
        icon="graphs.svg"
        id="about"
      />
    </Container>
  );
};

export default PageUnderDevelopment;
