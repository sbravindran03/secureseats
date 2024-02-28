
const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[260px] box-border gap-[152px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq450:gap-[152px_0px] mq750:gap-[152px_0px]">
      <div className="w-[1920px] h-[60px] relative bg-black hidden max-w-full" />
      <div className="w-[109.5px] h-[27.9px] relative hidden" />
      <div className="w-[169.3px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-gray1-200">
        <img
          className="absolute top-[calc(50%_-_11.9px)] left-[12.9px] w-[23.9px] h-[23.9px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
        <div className="absolute top-[9.2px] left-[42.8px] leading-[19.42px] font-semibold hidden items-center w-[113.9px] h-[19.4px]">
          Events in Chennai
        </div>
      </div>
      <div className="w-[119.4px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-gray1-200">
        <div className="absolute top-[9.2px] left-[12.9px] leading-[19.42px] font-semibold hidden items-center w-[93.9px] h-[19.4px]">
          List your event
        </div>
      </div>
      <div className="w-[126.4px] h-[37.8px] relative rounded-[99.59px] bg-black box-border hidden border-[1px] border-solid border-deepskyblue">
        <img
          className="absolute top-[calc(50%_-_11.9px)] left-[12.9px] w-[23.9px] h-[23.9px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
        <div className="absolute top-[8.5px] left-[42.8px] leading-[19.42px] capitalize font-semibold hidden items-center w-[53.1px] h-[19.4px]">
          chennai
        </div>
        <img
          className="absolute top-[16.2px] left-[101.5px] w-3 h-[7px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
      </div>
      <FRAMEA />
      <div className="w-[113.4px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-deepskyblue">
        <div className="absolute top-[9px] left-[9px] leading-[19.42px] font-semibold hidden">
          Connect wallet
        </div>
      </div>
      <div className="w-8 relative text-12xl-3 leading-[46.92px] capitalize font-semibold text-black hidden mq450:text-lgi mq450:leading-[28px] mq1050:text-6xl mq1050:leading-[38px]">
        🎫
      </div>
      <div className="w-[87.6px] relative leading-[19.42px] capitalize font-semibold hidden items-center">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">SECURE</p>
          <p className="m-0">SEATS</p>
        </span>
      </div>
      <BackgroundFrame />
    </div>
  );
};

export default Desktop;
