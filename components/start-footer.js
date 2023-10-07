import ContainerForm from "./container-form";
import Footer from "./footer";

const StartFooter = () => {
  return (
    <footer className="absolute w-full top-[6204.91px] right-[0px] left-[0px] bg-gray-700 flex flex-col items-center justify-start pt-[82px] px-[375px] pb-3 box-border text-center text-xs text-lightgray font-lato">
      <div className="relative w-[1170px] h-[586.64px]">
        <ContainerForm dimensionLabel="/mobilenavlogopng1@2x.png" />
        <div className="absolute w-[calc(100%_-_626.41px)] top-[439.76px] right-[15px] left-[611.41px] flex flex-col items-start justify-start pt-0 px-0 pb-[4.999998092651367px] box-border gap-[13.99px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[222.12242126464844px] pl-[222.4676055908203px]">
            <b className="relative tracking-[2.5px] leading-[13.2px] uppercase inline-block max-w-[543.5900268554688px] max-h-[13.199999809265137px]">
              Connect Us
            </b>
          </div>
          <div className="self-stretch relative h-[24.84px] text-base text-gainsboro-200">
            <div className="absolute top-[0px] left-[31.12px] flex flex-row items-start justify-start p-px">
              <div className="flex flex-col items-center justify-start py-0 pr-[12.421282768249512px] pl-[12.738720893859863px]">
                <div className="relative tracking-[1px] leading-[22.86px] inline-block max-h-[22.860000610351562px]">
                  Facebook
                </div>
              </div>
            </div>
            <div className="absolute top-[3px] left-[143.28px] flex flex-row items-start justify-start p-px">
              <div className="flex flex-col items-center justify-start py-0 pr-[1.5352306365966797px] pl-[14.914766311645508px] border-l-[1px] border-solid border-gainsboro-200">
                <div className="relative tracking-[1px] leading-[15px]">
                  Twitter
                </div>
              </div>
            </div>
            <div className="absolute top-[3px] left-[226.73px] flex flex-row items-start justify-start p-px">
              <div className="flex flex-col items-center justify-start py-0 pr-[0.5437459945678711px] pl-[13.866257667541504px] border-l-[1px] border-solid border-gainsboro-200">
                <div className="relative tracking-[1px] leading-[15px]">
                  Instagram
                </div>
              </div>
            </div>
            <div className="absolute top-[3px] left-[331.14px] flex flex-row items-start justify-start p-px">
              <div className="flex flex-col items-center justify-start py-0 pr-[1.2830581665039062px] pl-[14.596939086914062px] border-l-[1px] border-solid border-gainsboro-200">
                <div className="relative tracking-[1px] leading-[15px]">
                  Pinterest
                </div>
              </div>
            </div>
            <div className="absolute top-[3px] left-[430.01px] flex flex-row items-start justify-start p-px">
              <div className="flex flex-col items-center justify-start py-0 pr-[0.5730810165405273px] pl-[13.87691593170166px] border-l-[1px] border-solid border-gainsboro-200">
                <div className="relative tracking-[1px] leading-[15px]">
                  Linkedin
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          dimensionCode="/divflags1@2x.png"
          dimensionCodeImageUrl="/divflagsa1@2x.png"
        />
        <div className="absolute w-[calc(100%_-_30px)] top-[519.79px] right-[15px] left-[15px] box-border h-[31px] flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[281.21px] text-sm text-gainsboro-200 border-t-[1px] border-solid border-white">
          <div className="relative w-[396.56px] h-[30px]">
            <div className="absolute top-[0px] left-[calc(50%_-_198.28px)] flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative w-[100px] h-[100px] overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="absolute top-[3.55px] left-[calc(50%_-_136.9px)] leading-[20px]">
              © Copyright 2023 by Artimization. All Rights Reserved.
            </div>
          </div>
          <div className="relative w-[462.23px] h-[30.84px] text-gainsboro-100">
            <div className="absolute w-[calc(100%_-_239.71px)] top-[8px] right-[199.71px] left-[40px] box-border flex flex-col items-center justify-start pt-0.5 pb-[0.8400001525878906px] pr-[7px] pl-[5px] border-r-[2px] border-solid border-white">
              <div className="flex flex-row items-start justify-center py-0 pr-[10.087066650390625px] pl-[0.4329376220703125px]">
                <b className="relative leading-[20px]">
                  Email us: info@artimization.com
                </b>
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_368.92px)] top-[8px] right-[96.41px] left-[272.51px] flex flex-col items-center justify-start pt-0.5 pb-[0.8400001525878906px] pr-[4.362060546875px] pl-[4.94793701171875px] box-border">
              <b className="relative leading-[20px] inline-block max-w-[84px]">
                Terms Of Use
              </b>
            </div>
            <div className="absolute w-[calc(100%_-_365.82px)] top-[8px] right-[0px] left-[365.82px] flex flex-col items-center justify-start pt-0.5 pb-[0.8400001525878906px] pr-[5.038299560546875px] pl-[5.3717041015625px] box-border">
              <b className="relative leading-[20px] inline-block max-w-[86.41000366210938px]">
                Refund Policy
              </b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StartFooter;
