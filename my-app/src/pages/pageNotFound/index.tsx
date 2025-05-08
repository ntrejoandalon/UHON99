import { lazy } from "react";
import PageNotFoundContent from "./PageNotFoundContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const PageNotFound = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={PageNotFoundContent.title}
        content={PageNotFoundContent.text}
        icon="graphs.svg"
        id="about"
      />
    </Container>
  );
};

export default PageNotFound;
