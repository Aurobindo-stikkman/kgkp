import "./loading.css";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#00000099] fixed inset-0 z-[99999999]">
      <div className="h-20 w-20 grid grid-cols-2 rotate-45">
        <div className="dot dot-1 bg-pink-300"></div>
        <div className="dot dot-2 bg-blue-300"></div>
        <div className="dot dot-4 bg-yellow-300"></div>
        <div className="dot dot-3 bg-green-300"></div>
      </div>
      <p className="mt-4 text-white text-[18px] font-[500] leading-[21.78px] w-[311px] h-[22px] ">
        Hang tight, genius work in progress
      </p>
    </div>
  );
};

export default Loading;
