import { lazy } from "react";
import RecommendationContent from './RecommendationContent.json'
import SlideShowBlock from "../../components/SlideShideContentBlock";


import hoursAndPay from './topImage/workTasks.jpeg'
import workImage from './topImage/work.png'
import manageImage from './topImage/manag.png'

import cultureImage from './topImage/culture.png'


const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Recommendation = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={RecommendationContent.title}
        content={RecommendationContent.text}
      />
            <SlideShowBlock
        direction="right"
        slides={[
          {
            topImage: workImage,
            icon: "work.svg",
            title: "Work Tasks",
            content: "Data Annotation is a data processing company. From that, a lot of the tasks are looking at AI output and analyzing it for mistakes. People should have a strong attention to detail as any mistake would put them under review and potentially fired. Past that, the more interesting tasks are hidden by qualification certificates so being knowledgable in science, math, programming, etc. is useful to avoid mindless work. In my case, I worked primarily on programming based tasks which made it more enjoyable then if I was doing data classification all semester. This came with the downside of having to do frequent qualifications to access the tasks, but it was worth it personally to avoid boredom.",
          },
          {
            topImage: cultureImage,
            icon: "present.svg",
            title: "Company Culture",
            content: "There is no communication with other people in the company, partially because of the remote work structure. This can be a positive as well as a negative. I originally enjoyed it after coming from a manager that micromanaged me, however after a while it gets lonely as there is no human contact. For people that want to work in the company, be aware that there is no human interaction.",
          },
          {
            topImage: manageImage,
            icon: "manager.svg",
            title: "Supervisor/Leadership",
            content: "Building off the company culture, there is also no direct interaction with supervisors or leadership. Everything is handled through the dashboard which can make it difficult to assess your work quality. Past that, there have been stories of people being removed from the platform without notice. People that want to work for Data Annotation should keep in mind the lack of supervisor communication and leadership means no feedback is provided.",
          },
          {
            topImage: hoursAndPay,
            icon: "hourglass.svg",
            title: "Hours and Pay",
            content: "Payment in Data Annotation is based off time worked with an upper time limit per task. Each task has a different amount of pay per hour with more specialized ones (programming specifically) paying up to fourty dollars. This can be appealing for people that have those skills, and is in fact what drove me to work at Data Annotation while I was in college. However, if people don't have these skills, the task pay is quite lower which is a disincentive. Hopeful employees should take their skillset into consideration when applying. ",
          }
        ]}
      />
    </Container>
  );
};

export default Recommendation;
