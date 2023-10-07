const ContainerForm = ({ dimensionLabel }) => {
  return (
    <div className="absolute w-[calc(100%_-_30px)] top-[0px] right-[15px] left-[15px] h-[409.77px] text-center text-25xl text-gainsboro-300 font-lato">
      <div className="absolute top-[0px] left-[calc(50%_-_77px)] flex flex-row items-start justify-start">
        <img
          className="relative w-[154px] h-[130px] object-cover max-w-[154px]"
          alt=""
          src={dimensionLabel}
        />
      </div>
      <div className="absolute w-full top-[155px] right-[0px] left-[0px] flex flex-col items-center justify-start py-0 pr-[406.8802490234375px] pl-[429.1197509765625px] box-border">
        <b className="relative leading-[48.4px] inline-block max-w-[1140px] max-h-[48.400001525878906px]">
          et's Get Started
        </b>
      </div>
      <div className="absolute w-full top-[222.39px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-0 pb-[20.37999725341797px] pr-[212.38973999023438px] pl-[218.61026000976562px] box-border text-base text-gainsboro-200">
        <div className="relative leading-[22.86px] inline-block max-w-[752.406005859375px]">
          <p className="m-0">
            Artimization along with its team is scoring its winning goal in the
            world of Digital Marketing.
          </p>
          <p className="m-0">
            The professionals of Artimization are recognized as one of the most
            experienced and skilled creatives,
          </p>
          <p className="m-0">
            around the world. Our professionals have high commands over online
            branding, SEO,
          </p>
          <p className="m-0">
            Web designing and offering excellent customer services.
          </p>
        </div>
      </div>
      <div className="absolute top-[354.77px] left-[209.63px] rounded flex flex-row items-start justify-start p-0.5 text-mid text-white border-[2px] border-solid border-white">
        <div className="relative w-[716.75px] h-[51px]">
          <b className="absolute top-[12px] left-[calc(50%_-_315.71px)] tracking-[5px] leading-[24.29px] uppercase">
            WhatsApp
          </b>
          <div className="absolute top-[0px] left-[212.12px] flex flex-row items-center justify-center pt-3 px-[55px] pb-3.5 box-border gap-[5.7px] min-w-[281px] font-font-awesome-5-free">
            <div className="relative tracking-[5px] leading-[17px] uppercase">
              
            </div>
            <b className="relative tracking-[5px] leading-[25px] uppercase font-lato">{` Chat On `}</b>
            <div className="relative tracking-[5px] leading-[17px] uppercase">
              
            </div>
          </div>
          <b className="absolute top-[12px] left-[calc(50%_+_175.76px)] tracking-[5px] leading-[24.29px] uppercase">
            Messenger
          </b>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
