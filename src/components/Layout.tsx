import React from "react";

import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";
import Themes from "./Themes";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="h-screen bg-bg-color">
      <div className="xl:px-30 container mx-auto h-full max-w-6xl">
        <div className="grid-cols grid h-full auto-cols-min grid-cols-[min-content_1fr_1fr_1fr_max-content]">
          <Sidebar />
          <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
            {children}
          </div>
          <div className="col-span-1 flex h-full flex-col justify-between gap-2 px-6 py-4">
            <FollowBar />
            <Themes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
