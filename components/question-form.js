import { useMemo } from "react";

const QuestionForm = ({
  propAlignSelf,
  propPosition,
  propWidth,
  propTop,
  propRight,
  propLeft,
  propGap,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      width: propWidth,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [propAlignSelf, propPosition, propWidth, propTop, propRight, propLeft]);

  const divrowStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className="self-stretch [background:linear-gradient(81.42deg,_#f15569,_#f8a032)] flex flex-col items-center justify-start py-[50px] px-[375px] text-center text-23xl text-white font-lato"
      style={sectionStyle}
    >
      <div className="w-[1170px] flex flex-col items-start justify-start">
        <div
          className="self-stretch flex flex-col items-start justify-start"
          style={divrowStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-[15px] pb-[19.989994049072266px] box-border gap-[16.99px] min-h-[1px]">
            <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[333.3748474121094px] pl-[371.6251525878906px]">
              <b className="relative tracking-[-2px] leading-[46.2px] inline-block max-w-[1140px] max-h-[46.20000076293945px]">
                o you have any Question?
              </b>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.4099998474121094px] pr-[224.63290405273438px] pl-[188.36709594726562px] text-lg">
              <div className="relative leading-[25.71px] inline-block max-w-[1100px]">
                <p className="m-0">
                  Artimization team believes in entertaining our visitors and is
                  ready to answer your questions.
                </p>
                <p className="m-0">
                  Type down your thoughts and get perfect possible solutions to
                  your questions.
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[395.0299987792969px] pl-[395.0199890136719px] box-border gap-[22.7px] min-h-[1px] text-base">
            <button className="cursor-pointer [border:none] py-4 pr-[29.528900146484375px] pl-[27.881103515625px] bg-black rounded flex flex-row items-start justify-center">
              <div className="relative text-base leading-[20px] font-lato text-white text-center">
                CONTACT US
              </div>
            </button>
            <div className="rounded flex flex-row items-start justify-center py-[17px] pr-[30.046844482421875px] pl-[28.79315185546875px] border-[1px] border-solid border-white">
              <div className="relative leading-[20px]">BUSINESS PROFILE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
