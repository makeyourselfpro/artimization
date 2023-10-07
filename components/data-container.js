import { useMemo } from "react";

const DataContainer = ({
  priceText,
  propBorderRadius,
  propBackgroundColor,
}) => {
  const dataStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  return (
    <div
      className="flex flex-col items-start justify-start pt-[31px] pb-5 pr-px pl-0.5 text-center text-5xl text-gray-500 font-lato"
      style={dataStyle}
    >
      <div className="flex flex-col items-center justify-start pt-0 pb-1 pr-[72.13927459716797px] pl-[72.86072540283203px]">
        <b className="relative leading-[18px] capitalize">{priceText}</b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-[5px] px-[47.91999816894531px] pb-2.5">
        <button className="cursor-pointer [border:none] py-2.5 pr-[19.405662536621094px] pl-[19.75434112548828px] bg-tomato-300 rounded-10xs flex flex-row items-start justify-center">
          <b className="relative text-sm tracking-[1px] leading-[20px] uppercase font-lato text-white text-center">
            Order Now
          </b>
        </button>
      </div>
    </div>
  );
};

export default DataContainer;
