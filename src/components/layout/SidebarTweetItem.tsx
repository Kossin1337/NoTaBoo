import React, { useCallback } from "react";
import { useRouter } from "next/router";

import useLoginModal from "hooks/useLoginModal";

import { SendIcon } from "./icons/SendIcon";

const SidebarTweetItem = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div className="group w-[100%] max-w-fit" onClick={onClick}>
      <div className="flex-center mt-6 h-14 w-14 cursor-pointer rounded-full bg-gradient-to-l from-lighter-color to-primary-color p-4 text-text-color transition hover:bg-opacity-50 hover:text-darker-color md:hidden">
        <SendIcon />
      </div>
      <div className="flex-center group mt-6 hidden cursor-pointer rounded-full  bg-gradient-to-l from-lighter-color to-primary-color p-4 px-4 py-2 text-center text-text-color transition hover:bg-opacity-50 hover:text-darker-color  md:block">
        <p className="hidden font-heading text-[18px] font-semibold text-text-color group-hover:bg-opacity-50 group-hover:text-darker-color md:block">
          Send NoTaBOO
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetItem;
