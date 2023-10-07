import { useMemo } from "react";

const ContainerCardFormFilter = ({
  clientCount,
  featureDescription,
  propAlignSelf,
}) => {
  const divvcColumnInnerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="box-border w-[292.5px] h-[210.27px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 min-h-[1px] text-center text-31xl text-white font-lato border-r-[2px] border-solid border-gainsboro-500">
      <div
        className="flex-1 flex flex-col items-start justify-start py-0 px-[15px]"
        style={divvcColumnInnerStyle}
      >
        <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[26.060001373291016px] pl-[26.049999237060547px]">
          <div className="w-[208.39px] flex flex-col items-start justify-start pt-[46px] px-0 pb-[49.980003356933594px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[31.043739318847656px] pl-[31.34626007080078px]">
                <b className="relative leading-[71.43px] uppercase inline-block max-w-[208.38999938964844px] max-h-[71.43000030517578px]">
                  {clientCount}
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[31.331680297851562px] pl-[32.058319091796875px] text-base text-tomato-200">
                <b className="relative leading-[22.86px] uppercase inline-block max-w-[208.38999938964844px] max-h-[22.860000610351562px]">
                  {featureDescription}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
