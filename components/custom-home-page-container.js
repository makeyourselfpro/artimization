const CustomHomePageContainer = ({ pageTitle }) => {
  return (
    <div className="flex flex-row items-center justify-center text-center text-lgi text-darkorange font-font-awesome-5-free border-t-[2px] border-solid border-gainsboro-500 border-b-[2px]">
      <div className="flex flex-col items-center justify-center pt-5 pb-[21.839996337890625px] pr-[94px] pl-px text-left text-base text-dimgray-200 font-lato border-r-[2px] border-solid border-gainsboro-500">
        <div className="relative leading-[22.86px] capitalize">{pageTitle}</div>
      </div>
      <div className="flex flex-col items-center justify-start pt-[21px] pb-[24.839996337890625px] pr-[107.34375px] pl-[108.65625px]">
        <div className="relative leading-[19px] capitalize"></div>
      </div>
      <div className="bg-white flex flex-col items-center justify-start pt-[21px] pb-[24.839996337890625px] pr-[107.84375px] pl-[108.15625px]">
        <div className="relative leading-[19px] capitalize"></div>
      </div>
      <div className="flex flex-col items-center justify-start pt-[21px] pb-[24.839996337890625px] pr-[107.84375px] pl-[108.15625px]">
        <div className="relative leading-[19px] capitalize"></div>
      </div>
    </div>
  );
};

export default CustomHomePageContainer;
