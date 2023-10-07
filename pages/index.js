import ReadyForNextContainer from "../components/ready-for-next-container";
import ProjectSectionContainer from "../components/project-section-container";
import QuestionForm from "../components/question-form";
import StartFooter from "../components/start-footer";
import Header2 from "../components/header2";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[6886px] overflow-hidden">
      <ReadyForNextContainer />
      <div className="absolute w-full top-[1080px] right-[0px] left-[0px] flex flex-col items-center justify-start py-0 px-[375px] box-border">
        <div className="w-[1170px] flex flex-col items-start justify-start py-0 px-[15px] box-border">
          <ProjectSectionContainer />
        </div>
      </div>
      <QuestionForm
        propAlignSelf="unset"
        propPosition="absolute"
        propWidth="100%"
        propTop="5915.31px"
        propRight="0px"
        propLeft="0px"
        propGap="0.01px"
      />
      <StartFooter />
      <Header2 />
    </div>
  );
};

export default Home;
