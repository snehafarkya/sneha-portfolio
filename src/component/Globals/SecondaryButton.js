import React from 'react';

const SecondaryButton = ({
  href,
  text,
  target = '_blank',
  additionalClasses = '',
  children,
  onClick
}) => {
  return (
    <a href={href} className={`group `}>
  <button onClick={onClick} className={`${additionalClasses} dark:bg-[linear-gradient(40deg,#ffffff,#c8d2ee)] text-[#18244b] px-4 group inline-flex items-center justify-center gap-1 w-fit text-[16px] font-bold leading-[1] border-none disabled:opacity-70 relative h-12 overflow-hidden transition-colors duration-300 ease-in-out hover:shadow-[0px_2px_8px_0px_#1b242a1d,0px_12px_32px_0px_#1b242a09] py-3 bg-[linear-gradient(40deg,#c8d2ee,#ffffff4d)] hover:border hover:bg-[linear-gradient(40deg,#ffffff,#c8d2ee)] border-white hover:border-stone-200 hover:rounded-[60px] rounded-[50px]`}>
    {text}
    {children}
  </button>
</a>

  );
};

export default SecondaryButton;
