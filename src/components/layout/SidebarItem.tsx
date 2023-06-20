import React, { useCallback } from "react";
import { useRouter } from "next/router";

import useCurrentUser from "hooks/useCurrentUser";
import useLoginModal from "hooks/useLoginModal";

interface ISidebarItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<ISidebarItem> = ({
  label,
  href,
  icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      () => router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div
      onClick={handleClick}
      className="group flex max-w-min cursor-pointer flex-row items-center"
    >
      <div className="flex-center relative h-14 w-14 rounded-full p-4 hover:bg-opacity-20 hover:bg-gradient-to-br hover:from-lighter-color hover:to-primary-color hover:text-darker-color group-hover:text-darker-color md:hidden">
        <div className="flex-center h-8 w-8">{icon}</div>
      </div>
      <div className="md:flex-center group-hover:text-darker-colo relative hidden gap-4 rounded-full p-4 hover:bg-opacity-20 hover:bg-gradient-to-bl hover:from-lighter-color hover:to-primary-color hover:text-darker-color">
        <div className="flex-center h-8 w-8">{icon}</div>
        <p className="hidden text-sm uppercase text-text-color md:block">
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
