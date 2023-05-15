import { useRouter } from "next/router";

import { GhostIcon } from "./icons/GhostIcon";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="group flex max-w-min cursor-pointer items-center justify-center gap-2 p-4"
    >
      <div className="bg h-[48px] w-[48px] text-primary-color opacity-90 hover:opacity-100 group-hover:text-darker-color">
        <GhostIcon />
      </div>
      <h1 className="hidden text-center text-2xl font-bold text-primary-color md:block">
        NoT_BOO
      </h1>
    </div>
  );
};

export default SidebarLogo;
