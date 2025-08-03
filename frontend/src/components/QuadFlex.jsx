import React from 'react';

const QuadFlex = ({
  firstHeading = '',
  secondHeading = '',
  thirdHeading = '',
  fourthHeading = '',
  firstContent = null,
  secondContent = null,
  thirdContent = null,
  fourthContent = null,
}) => {
  return (
    <div className="w-full h-[51vh] flex">
      <div className="flex-1 bg-slate-50 relative flex flex-col">
        {firstHeading && (
          <div className="w-full absolute top-0 left-0 bg-[#00bcd4] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
            {firstHeading}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {firstContent}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 relative flex flex-col">
        {secondHeading && (
          <div className="w-full absolute top-0 left-0 bg-[#26a69a] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
            {secondHeading}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {secondContent}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-slate-50 relative flex flex-col">
        {thirdHeading && (
          <div className="w-full absolute top-0 left-0 bg-[#00bcd4] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
            {thirdHeading}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {thirdContent}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 relative flex flex-col">
        {fourthHeading && (
          <div className="w-full absolute top-0 left-0 bg-[#26a69a] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
            {fourthHeading}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {fourthContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuadFlex;