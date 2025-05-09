import { lazy } from "react";
import PageContent from './ContractWorkPageContent.json'

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const ContractWorkInfo = () => {
  return (
    <Container>
      <MiddleBlock
        title={PageContent.intro.title}
        content={PageContent.intro.text}
      />
      <ContentBlock
        direction="left"
        title={PageContent.pros.title}
        content={PageContent.pros.text}
        section={PageContent.pros.section}
        icon="graphs.svg"
        id="none"
      />
        <ContentBlock
        direction="right"
        title={PageContent.logistics.title}
        content={PageContent.logistics.text}
        icon="developer.svg"
        id="none"
      />
      <ContentBlock
        direction="left"
        title={PageContent.cons.title}
        content={PageContent.cons.text}
        section={PageContent.cons.section}
        icon="product-launch.svg"
        id="none"
      />
    </Container>
  );
};

export default ContractWorkInfo;
