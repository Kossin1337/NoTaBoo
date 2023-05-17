import { useRouter } from "next/router";

import { GhostIcon } from "./icons/GhostIcon";
import { useCallback } from "react";

const SidebarLogo = () => {
  const router = useRouter();

  // const handleClick = useCallback(() => {
  //   try {
  //     router.push("/");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [router]);

  return (
    <div
      onClick={() => router.push("/")}
      className="group flex max-w-min cursor-pointer items-center justify-center  gap-2 bg-gradient-to-l from-lighter-color to-primary-color bg-clip-text p-4 text-transparent transition hover:from-darker-color hover:to-primary-color"
    >
      <div className="bg h-[48px] w-[48px] text-primary-color ">
        <GhostIcon />
      </div>
      <h1 className="hidden  text-center text-2xl font-bold    md:block">
        NoT_BOO
      </h1>
    </div>
  );
};
// const SidebarLogo = () => {
//   const router = useRouter();

//   return (
//     <div
//       onClick={() => router.push("/")}
//       className="group flex max-w-min cursor-pointer items-center justify-center gap-2 p-4"
//     >
//       <div className="bg h-[48px] w-[48px] text-primary-color opacity-90 hover:opacity-100 group-hover:text-darker-color">
//         <GhostIcon />
//       </div>
//       <h1 className="hidden bg-gradient-to-l from-lighter-color to-primary-color bg-clip-text text-center text-2xl font-bold text-transparent transition hover:from-darker-color hover:to-primary-color md:block">
//         NoT_BOO
//       </h1>
//     </div>
//   );
// };

export default SidebarLogo;
