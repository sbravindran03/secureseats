const FrameComponent = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full shrink-0 text-left text-smi-9 text-shades-white font-inter">
        <div className="flex-1 bg-black flex flex-row items-end justify-between pt-0 pb-px pr-0 pl-5 box-border max-w-full gap-[20px] z-[1] mq925:flex-wrap mq925:pt-px mq925:pr-5 mq925:box-border">
          <div className="h-[27.9px] w-[109.5px] relative hidden" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 shrink-0">
            <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_31px] mq450:gap-[0px_31px]">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                  <div className="relative leading-[19.42px] capitalize font-semibold z-[1]">
                    <p className="m-0">SECURE</p>
                    <p className="m-0">SEATS</p>
                  </div>
                </div>
                <div className="relative text-12xl-3 leading-[46.92px] capitalize font-semibold text-black z-[1] mq450:text-lgi mq450:leading-[28px] mq925:text-6xl mq925:leading-[38px]">
                  🎫
                </div>
              </div>
              <button className="cursor-pointer pt-1.5 pb-2 pr-[9px] pl-[13px] bg-[transparent] rounded-[99.59px] flex flex-row items-end justify-start gap-[0px_6px] border-[1px] border-solid border-gray hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <img
                  className="h-[23.9px] w-[23.9px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/svg.svg"
                />
                <div className="relative text-smi-9 leading-[19.42px] font-semibold font-inter text-shades-white text-left">
                  Events in Chennai
                </div>
              </button>
            </div>
          </div>
          <div className="w-[529px] bg-black flex flex-row items-start justify-start py-[11px] px-0 box-border gap-[0px_30px] max-w-full shrink-0 mq450:flex-wrap">
            <button className="cursor-pointer py-[9px] pr-[7px] pl-3 bg-[transparent] h-[38px] rounded-[99.59px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-gray hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-smi-9 leading-[19.42px] font-semibold font-inter text-shades-white text-left">
                List your event
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center gap-[0px_15px] min-w-[248px] max-w-full shrink-0 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[85px]">
                <button className="cursor-pointer py-[7px] pr-[15px] pl-3 bg-black rounded-[99.59px] flex flex-row items-start justify-start gap-[0px_5px] border-[1px] border-solid border-deepskyblue">
                  <img
                    className="h-[23.9px] w-[23.9px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="relative text-smi-9 leading-[19.42px] capitalize font-semibold font-inter text-shades-white text-left">
                    chennai
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <img
                      className="w-3 h-[7px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                </button>
              </div>
              <img
                className="h-[37.8px] w-[39.8px] relative rounded-[99.59px] min-h-[38px]"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <div className="flex-[0.9339] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border min-w-[82px] mq450:flex-1">
                <button className="cursor-pointer pt-[9px] pb-2 pr-[5px] pl-2 bg-[transparent] self-stretch h-[38px] rounded-[99.59px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-steelblue-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-200">
                  <div className="relative text-smi-9 leading-[19.42px] font-semibold font-inter text-shades-white text-left">
                    Connect wallet
                  </div>
                </button>
              </div>
              <img
                className="h-[37.8px] w-[39.8px] relative rounded-[99.59px] min-h-[38px]"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent;
  