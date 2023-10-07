import { useMemo } from "react";

const FormContainer = ({ inputLabel, propRight, propLeft, propTop }) => {
  const divcolSm6Style = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
      top: propTop,
    };
  }, [propRight, propLeft, propTop]);

  return (
    <div
      className="absolute w-[calc(100%_-_341.25px)] top-[0px] right-[341.25px] left-[0px] flex flex-col items-start justify-start pt-0 px-[15px] pb-5 box-border min-h-[1px] text-left text-base text-gray-300 font-lato"
      style={divcolSm6Style}
    >
      <div className="flex flex-row items-start justify-start">
        <div className="rounded-10xs bg-white flex flex-row items-start justify-start py-[15.5px] pr-1 pl-[22px] border-[2px] border-solid border-gainsboro-400">
          <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[207.25px] pl-0">
            <div className="relative">{inputLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
