import "./loadingCss.css";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#00000098] fixed inset-0 z-[99999999]">
      <div className="h-[60px] w-[60px] grid grid-cols-2 rotate-45">
        <div className="dot dot-1 bg-[#F9CDC4]"></div>
        <div className="dot dot-2 bg-[#D1CCF3]"></div>
        <div className="dot dot-4 bg-[#CFE9E4]"></div>
        <div className="dot dot-3 bg-[#F3E0A3]"></div>
      </div>
      <p className="loading-text relative mt-4 text-white text-[18px] font-[500] leading-[21.78px] w-[311px] h-[22px] overflow-hidden">
        Hang tight, genius work in progress
      </p>
    </div>
  );
};

export default LoadingScreen;
