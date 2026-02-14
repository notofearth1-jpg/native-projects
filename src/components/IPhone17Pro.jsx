import React from 'react';

const IPhone17Pro = ({ children, time = "12:00" }) => {
    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[844px] w-[390px] shadow-xl overflow-hidden">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[362px] h-[816px] bg-white dark:bg-gray-800 relative">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center px-4">
                    <div className="w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* Optional status content inside island */}
                    </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-0 w-full h-12 z-40 flex justify-between items-center px-6 pt-2 select-none pointer-events-none mix-blend-difference text-white">
                    <span className="font-semibold text-[15px] pl-2">{time}</span>
                    <div className="flex items-center gap-1.5 pr-2">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11V1C1 0.447715 1.44772 0 2 0H16C16.5523 0 17 0.447715 17 1V11C17 11.5523 16.5523 12 16 12H2C1.44772 12 1 11.5523 1 11Z" fillOpacity="0.3" />
                            <path d="M13 11V1H15V11H13Z" fill="currentColor" />
                            <path d="M9 11V3H11V11H9Z" fill="currentColor" />
                            <path d="M5 11V6H7V11H5Z" fill="currentColor" />
                            <path d="M1 11V8H3V11H1Z" fill="currentColor" />
                        </svg>
                        <div className="w-6 h-3 border-[1.5px] border-current rounded-[4px] relative opacity-80">
                            <div className="absolute top-0.5 right-0.5 bottom-0.5 left-0.5 bg-current rounded-[1px]"></div>
                        </div>
                    </div>
                </div>

                {/* Screen Content Wrapper */}
                <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide relative bg-white">
                    {children}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-1.5 bg-black/80 dark:bg-white/80 rounded-full z-50 pointer-events-none mix-blend-difference"></div>
            </div>
        </div>
    );
};

export default IPhone17Pro;
