import { lazy } from "react";
import SlideShowBlock from "../../components/SlideShideContentBlock";
import mountainImage from './topImage/mountain.jpg'
import classificationTopImage from './topImage/classification.jpg'
import dataCheckingTopImage from './topImage/fact.png';
import factCheckignTopImage from './topImage/fkae-fact.jpg';
import codeReviewTopImage from './topImage/code_review.png';
import promptEngeneeringTopImage from './topImage/prompt_engeneering.jpg';

//icons
import classificationIcon from './icons/Treemap chart colored business analytics statistics.svg'

const Container = lazy(() => import("../../common/Container"));

const TaskPage = () => {
  return (
    <Container>
      <SlideShowBlock
        direction="right"
        slides={[
          {
            topImage: classificationTopImage,
            icon: "classificationIcon.svg",
            title: "Task: Data Classification",
            content: "Tagging text based data off of its contents, for instance identifying objects, places, and items.",
          },
          {
            topImage: factCheckignTopImage,
            icon: "hourglass.svg",
            title: "Task: Domain Specific Fact Checking",
            content: "For individuals with proven knowledge over a domain (generally math or science), they can review problems and answer sets. The goal is to identify if a problem is done correctly, and if not, provide the correct solution.",
          },
          {
            topImage: dataCheckingTopImage,
            icon: "dataAnalysis.svg",
            title: "Task: Data Checking",
            content: "Generally for JSON formats, the worker ensures it matches the given specifications. This involves looking at both data type as well as syntax.",
          },
          {
            topImage: promptEngeneeringTopImage,
            icon: "present.svg",
            title: "Task: Prompt Engineering",
            content: "Given that the worker has an OpenAI membership, they can qualify for prompt engineering tasks. This consists of grading the ",
          },
          {
            topImage: codeReviewTopImage,
            icon: "code.svg",
            title: "Task: Code Review",
            content: "For people that are familiar with coding, they can review code and provide feedback on the code quality and soundness of logic. Generally, this is done over Python code.",
          }
        ]}
      />

    </Container>
  );
};

export default TaskPage;
