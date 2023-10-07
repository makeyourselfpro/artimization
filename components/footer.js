const Footer = ({ dimensionCode, dimensionCodeImageUrl }) => {
  return (
    <div className="absolute w-[calc(100%_-_594.31px)] top-[409.77px] right-[579.31px] left-[15px] box-border flex flex-col items-start justify-start py-0 pr-px pl-0 text-left text-lg text-gainsboro-200 font-lato border-r-[1px] border-solid border-white">
      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[54.42001724243164px] pl-[54.40999984741211px]">
        <div className="relative w-[465.86px] h-[109.19px]">
          <div className="absolute top-[30px] left-[15px] flex flex-col items-center justify-start py-0 pr-[194.24661254882812px] pl-[194.61337280273438px] text-center text-xs text-lightgray">
            <b className="relative tracking-[2.5px] leading-[13.2px] uppercase inline-block max-h-[13.199999809265137px]">
              Call Us
            </b>
          </div>
          <div className="absolute top-[59.19px] left-[35px] w-[189.7px] h-[22px]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_84.85px)] w-[34px] h-[22px] object-cover"
              alt=""
              src={dimensionCode}
            />
            <div className="absolute top-[3px] left-[calc(50%_-_42.85px)] leading-[12px]">
              +1 617 275 4776
            </div>
          </div>
          <div className="absolute top-[59.19px] left-[248.18px] box-border w-[217.67px] h-[22px] border-l-[1px] border-solid border-gainsboro-200">
            <img
              className="absolute top-[0px] left-[calc(50%_-_77.83px)] w-[34px] h-[22px] object-cover"
              alt=""
              src={dimensionCodeImageUrl}
            />
            <div className="absolute top-[9px] left-[calc(50%_-_35.97px)]">
              +92 334 3791748
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
