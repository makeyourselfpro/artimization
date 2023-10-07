const AngularFormContainer = ({ imageDimensions, technologyLogo }) => {
  return (
    <div className="flex flex-col items-center justify-start pt-0 px-[15px] pb-[19.98999786376953px] box-border gap-[18px] min-w-[117px] min-h-[1px] text-center text-lg text-darkslategray-100 font-lato">
      <div className="flex flex-row items-center justify-center">
        <img
          className="relative w-20 h-20 overflow-hidden shrink-0"
          alt=""
          src={imageDimensions}
        />
      </div>
      <div className="flex flex-col items-center justify-start py-0 pr-[2.331617832183838px] pl-[2.668382167816162px]">
        <div className="relative leading-[25.71px] inline-block max-h-[25.709999084472656px]">
          {technologyLogo}
        </div>
      </div>
    </div>
  );
};

export default AngularFormContainer;
