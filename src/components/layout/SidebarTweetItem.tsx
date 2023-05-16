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
    <div className="w-[100%] max-w-fit " onClick={onClick}>
      <div className="flex-center mt-6 h-14 w-14 cursor-pointer rounded-full bg-primary-color p-4 transition hover:bg-opacity-50 lg:hidden">
        <SendIcon />
      </div>
      <div className="flex-center group mt-6 hidden cursor-pointer rounded-full bg-primary-color px-4 py-2 text-center transition hover:bg-darker-color hover:bg-opacity-60 lg:block">
        <p className="hidden font-heading text-[20px] font-semibold text-text-color group-hover:text-text-color lg:block">
          Send NoTaBOO
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetItem;
