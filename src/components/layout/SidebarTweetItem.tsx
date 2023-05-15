import React from "react";
import { useRouter } from "next/router";

import { SendIcon } from "./icons/SendIcon";

const SidebarTweetItem = () => {
  const router = useRouter();

  return (
    <div className="w-[100%] max-w-fit " onClick={() => router.push("/")}>
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
