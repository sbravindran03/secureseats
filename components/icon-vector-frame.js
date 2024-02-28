const IconVectorFrame = () => {
    return (
      <footer className="self-stretch flex flex-col items-center justify-center max-w-full text-left text-mini text-khaki-200 font-manrope">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="!m-[0] absolute top-[-4px] right-[114px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[88px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[62px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[36px] flex flex-col items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="w-2.5 h-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <img
            className="h-2.5 w-2.5 absolute !m-[0] top-[0px] right-[14px]"
            loading="lazy"
            alt=""
            src="/frame-39886.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] max-w-full">
              <div className="w-[54px] relative font-semibold inline-block box-border pr-5">
                Date
              </div>
              <div className="self-stretch rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] gap-[0px_8px] min-h-[40px] max-w-full text-sm text-neutral-500 border-[1px] border-solid border-shades-white">
                <div className="h-[19px] flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%_-_28px)]">
                  Enter a date
                </div>
                <img className="h-5 w-5 relative" alt="" src="/clock-icon.svg" />
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start gap-[0px_12px] max-w-full text-sm text-neutral-500 border-[1px] border-solid border-shades-white">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-10 rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] gap-[0px_8px] max-w-full border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-[calc(100%_-_36px)] [border:none] [outline:none] font-manrope text-sm bg-[transparent] h-[19px] flex-1 relative text-neutral-500 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[150px] max-w-[calc(100%_-_28px)]"
                    placeholder="10:00pm"
                    type="text"
                  />
                  <img className="h-5 w-5 relative" alt="" src="/icons.svg" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] gap-[0px_8px] min-h-[40px] max-w-full border-[1px] border-solid border-neutral-200">
                  <div className="h-[19px] flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%_-_28px)]">
                    10:00am
                  </div>
                  <img className="h-5 w-5 relative" alt="" src="/icons.svg" />
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start gap-[0px_12px] max-w-full border-[1px] border-solid border-shades-white">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-10 rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] max-w-full border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-full [border:none] [outline:none] font-manrope text-sm bg-[transparent] h-[19px] flex-1 relative text-shades-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full"
                    placeholder="LOCATION"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-10 rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] max-w-full border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-full [border:none] [outline:none] font-manrope text-sm bg-[transparent] h-[19px] flex-1 relative text-neutral-500 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full"
                    placeholder="CHENNAI"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start gap-[0px_12px] max-w-full border-[1px] border-solid border-shades-white">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-10 rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] max-w-full border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-full [border:none] [outline:none] font-manrope text-sm bg-[transparent] h-[19px] flex-1 relative text-shades-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full"
                    placeholder="TOTAL NUMBER OF SEATS ON THE EVENT"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[454px] max-w-full mq700:min-w-full">
                <div className="self-stretch h-10 rounded box-border flex flex-row items-center justify-start py-2 pr-[9px] pl-[7px] max-w-full border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-full [border:none] [outline:none] font-manrope text-sm bg-[transparent] h-[19px] flex-1 relative text-neutral-500 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full"
                    placeholder="100000"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default IconVectorFrame;
  