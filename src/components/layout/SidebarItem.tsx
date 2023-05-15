import React from "react";

interface ISidebarItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const SidebarItem: React.FC<ISidebarItem> = ({
  label,
  href,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex max-w-min cursor-pointer flex-row items-center"
    >
      <div className="flex-center relative h-14 w-14 rounded-full p-4 hover:bg-primary-color hover:bg-opacity-20 group-hover:text-darker-color lg:hidden">
        <div className="flex-center h-8 w-8">{icon}</div>
      </div>
      <div className="lg:flex-center relative hidden gap-4 rounded-full p-4 hover:bg-primary-color hover:bg-opacity-20 group-hover:text-darker-color">
        <div className="flex-center h-8 w-8">{icon}</div>
        <p className="hidden text-sm uppercase text-text-color lg:block">
          {label}
        </p>
      </div>
    </div>
  );
};

export default SidebarItem;

{
  /* <div className="group flex cursor-pointer items-center">
<div
  className="relative flex h-14 h-[48px] w-14 w-[48px] items-center justify-center rounded-full 
rounded-full p-4 p-4 text-primary-color hover:bg-primary-color hover:bg-opacity-20 group-hover:text-darker-color lg:hidden"
>
  <div className="">{icon}</div>
</div>
<div className="lg:flex-block invisible relative hidden h-14 w-14 items-center justify-center gap-4 rounded-full p-4 hover:bg-primary-color hover:bg-opacity-20">
  <div className="w-[48px] text-primary-color group-hover:text-darker-color">
    {icon}
  </div>
  <span className="invisible hidden uppercase text-lighter-color group-hover:text-darker-color lg:visible lg:flex">
    {label}
  </span>
</div>
</div> */
}
