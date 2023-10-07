import { useMemo } from "react";

const CardContainer = ({
  imageDimensions,
  serviceCategory,
  serviceName,
  serviceDescription,
  marketingAssets,
  brandGuidelinesText,
  propRight,
  propLeft,
  propWidth,
  propMaxWidth,
  propLeft1,
}) => {
  const divrightBorderStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const figureBrandDevelopmentIcoStyle = useMemo(() => {
    return {
      width: propWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propMaxWidth]);

  const randingStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute w-[calc(100%_-_877.5px)] top-[0px] right-[877.5px] left-[0px] box-border flex flex-col items-start justify-start pt-5 pb-[30px] pr-8 pl-[30px] min-h-[1px] text-left text-base text-gray-500 font-lato border-r-[2px] border-solid border-gainsboro-500"
      style={divrightBorderStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[115.5px] pl-0">
          <img
            className="relative w-[115px] h-[99px] object-cover max-w-[115px]"
            alt=""
            src={imageDimensions}
            style={figureBrandDevelopmentIcoStyle}
          />
        </div>
        <div className="self-stretch relative h-[183.38px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-14 text-6xl">
            <b
              className="absolute top-[0px] left-[16.3px] leading-[28px]"
              style={randingStyle}
            >
              {serviceCategory}
            </b>
            <b className="absolute top-[28px] left-[0px] leading-[28px]">
              {serviceName}
            </b>
          </div>
          <div className="absolute w-full top-[75px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-0 pb-[0.529998779296875px] pr-[110.5px] pl-0 box-border text-dimgray-100">
            <div className="relative leading-[22.86px] inline-block max-w-[230.5px]">
              <p className="m-0">{serviceDescription}</p>
              <p className="m-0">{marketingAssets}</p>
              <p className="m-0">{brandGuidelinesText}</p>
            </div>
          </div>
          <div className="absolute w-full top-[160.53px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[138.5px] pl-0 box-border text-tomato-200">
            <b className="relative leading-[22.86px] inline-block max-w-[230.5px] max-h-[22.860000610351562px]">
              Explore Now
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
