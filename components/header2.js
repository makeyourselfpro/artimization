import { useCallback } from "react";
import { useRouter } from "next/router";

const Header2 = () => {
  const router = useRouter();

  const onItemContainer18Click = useCallback(() => {
    router.push("/website-packages");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/website-packages");
  }, [router]);

  return (
    <header className="absolute w-full top-[0px] right-[0%] left-[0%] flex flex-col items-center justify-start pt-[30px] px-[375px] pb-0 box-border text-left text-xl text-white font-font-awesome-5-free">
      <div className="absolute my-0 mx-[!important] w-full top-[0px] right-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.53),_rgba(0,_0,_0,_0.01)_99%,_rgba(0,_0,_0,_0))] h-[200px] z-[0]" />
      <div className="w-[1170px] flex flex-col items-start justify-start py-0 px-[15px] box-border z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[1140px] flex flex-row items-center justify-start">
            <div className="w-[285px] flex flex-row items-center justify-start py-0 pr-[30px] pl-0 box-border relative min-h-[1px] text-center">
              <div className="flex flex-col items-start justify-start z-[0]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[255px] h-[50px] flex flex-col items-center justify-center pt-[1.2632979154586792px] px-0 pb-[1.2632981538772583px] box-border max-w-[255px]">
                    <img
                      className="relative w-[255px] h-[47.47px] overflow-hidden shrink-0"
                      alt=""
                      src="/logosvg1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[8px] right-[-10px] rounded-mini box-border w-[30px] h-[30px] flex flex-col items-center justify-start py-[5px] pr-[7.3125px] pl-[7.6875px] z-[1] border-[1px] border-solid border-white">
                <div className="relative leading-[20px]"></div>
              </div>
            </div>
            <div className="w-[570px] flex flex-row items-center justify-center py-0 pr-[53.9900016784668px] pl-[53.97999954223633px] box-border min-h-[1px] text-smi font-lato">
              <div className="flex flex-col items-start justify-start py-0 pr-[15.480010986328125px] pl-[15px] box-border max-h-[340px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start py-0 px-2">
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                      <div className="relative leading-[20px] uppercase font-black">
                        About
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start py-0 px-2 cursor-pointer ml-[-0.3px]"
                    onClick={onItemContainer18Click}
                  >
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                      <div
                        className="relative leading-[20px] uppercase font-black cursor-pointer"
                        onClick={onServicesTextClick}
                      >
                        Services
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 px-2 relative ml-[-0.3px] text-4xs">
                    <div className="my-0 mx-[!important] absolute top-[-8px] left-[21.7px] rounded-sm bg-limegreen w-[40.19px] h-[14.84px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-[3.1899986267089844px] pl-[3px] box-border z-[0]">
                      <b className="relative leading-[12.86px]">OFFERS</b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0 z-[1] text-smi">
                      <div className="relative leading-[20px] uppercase font-black">
                        Pricing
                      </div>
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[5px] left-[49.89px] box-border w-2.5 h-[5px] z-[2] border-t-[5px] border-solid border-limegreen border-r-[5px] border-l-[5px]" />
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 px-2 ml-[-0.3px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                      <div className="relative leading-[20px] uppercase font-black">
                        Portfolio
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 px-2 ml-[-0.3px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                      <div className="relative leading-[20px] uppercase font-black">
                        Media
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[7.0500030517578125px] pl-2 ml-[-0.3px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                      <div className="relative leading-[20px] uppercase font-black">
                        Contact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[285px] flex flex-row items-center justify-end py-0 pr-0 pl-[27.920000076293945px] box-border min-h-[1px] text-lgi">
              <div className="flex flex-row items-center justify-end relative gap-[0.01px]">
                <div className="my-0 mx-[!important] absolute top-[-1px] left-[-35.92px] flex flex-col items-start justify-start py-0 pr-[7.409999847412109px] pl-2 z-[0]">
                  <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-3">
                    <div className="relative leading-[19px] uppercase"></div>
                  </div>
                </div>
                <div className="w-[166.09px] flex flex-col items-start justify-start py-0 px-2 box-border z-[1] text-sm">
                  <div className="self-stretch relative rounded-10xs box-border h-9 border-[2px] border-solid border-white">
                    <div className="absolute top-[24.45px] left-[25.28px] leading-[14px] uppercase [transform:_rotate(-180deg)] [transform-origin:0_0]">
                      
                    </div>
                    <div className="absolute top-[8px] left-[27px] text-mini leading-[20px] uppercase font-semibold font-lato">
                      +1 617 275 4776
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-0 pr-[21.980003356933594px] pl-[23px] bg-[transparent] rounded-10xs [background:linear-gradient(67.33deg,_#f15569,_#f8a032)] overflow-hidden flex flex-col items-start justify-start z-[2]">
                  <div className="self-stretch flex flex-col items-start justify-start py-[9px] px-0">
                    <div className="relative text-smi leading-[20px] uppercase font-black font-lato text-white text-left">
                      Quote
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
