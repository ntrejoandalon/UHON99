import { lazy } from "react";
import PageNotFoundContent from "./PageNotFoundContent.json";
import { SvgIcon } from "../../common/SvgIcon";
import classification from "../../assets/classification.jpg"

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
  
    <img src="/icons/classificationIcon.svg" alt="test" width="60" height="60" />

    </Container>
  );
};

export default PageNotFound;
