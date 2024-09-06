import React from 'react';

const PrimaryButton = ({
  href,
  text,
  target = '_blank',
  additionalClasses = '',
  children,
}) => {
  return (
    <a href={href} target={target} className={`group `}>
      <button className={`${additionalClasses} text-white px-4 group inline-flex items-center justify-center gap-1 w-fit text-[16px] font-bold leading-[1] border-none disabled:opacity-70 relative h-12 overflow-hidden hover:shadow-[0px_2px_8px_0px_#1b242a1d,0px_12px_32px_0px_#1b242a09] py-3 bg-[linear-gradient(#0a173f,#414c6e)] border-white hover:rounded-[60px] rounded-[50px] transition-all ease-in-out duration-300`}>
        <div className="absolute dark:hidden left-0 top-0 h-[3px] w-12 -translate-x-20 transform bg-[linear-gradient(235deg,#e2eaff_3.24%,_#d0d8ed)] shadow-[10px_14px_0_30px_#0000FF1a] transition-transform duration-1000 ease-in-out group-hover:translate-x-[230px] hover:after:shadow-[10px_14px_0_30px_rgba(255,255,255,0.2)]"></div>
        {text}
        <div className="absolute bottom-0 right-0 h-[4px] w-12 translate-x-12 transform bg-gradient-to-r from-[#e2eaff] via-[#e2eaff] to-[#e2eaff] transition-transform duration-700 ease-in-out group-hover:-translate-x-[210px]"></div>
        {children}
      </button>
    </a>
  );
};

export default PrimaryButton;
