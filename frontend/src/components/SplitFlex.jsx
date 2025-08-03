import React from 'react';

const SplitFlex = ({ leftHeading = 'Latest Announcement', rightHeading = '', leftContent = null, rightContent = null }) => {
  return (
    <div className="w-full h-[60vh] flex">
      <div className="flex-1 bg-slate-50 relative flex flex-col">
        <div className="w-full absolute top-0 left-0 bg-[#00bcd4] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
          {leftHeading}
        </div>
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {leftContent}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 relative flex flex-col">
        {rightHeading && (
          <div className="w-full absolute top-0 left-0 bg-[#26a69a] px-6 py-4 shadow text-white font-semibold text-lg text-center z-10">
            {rightHeading}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-start items-center px-6 pt-[72px] overflow-hidden">
          <div className="w-full h-full overflow-y-auto pr-2 hide-scrollbar">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitFlex;