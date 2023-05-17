import React from "react";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetItem from "./SidebarTweetItem";

/* icons */
import { HomeIcon } from "./icons/HomeIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { NotificationIcon } from "./icons/NotificationIcon";
import { LogoutIcon } from "./icons/LogoutIcon";

const sidebarItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <NotificationIcon />,
  },
  {
    label: "Profile",
    href: "/users/1337",
    icon: <ProfileIcon />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="col-span-1 flex h-full w-min flex-col items-center pr-4 md:pr-6">
      <SidebarLogo />
      <div className="mt-4 flex max-w-fit flex-col p-2">
        {sidebarItems.map((item, index) => {
          return (
            <SidebarItem
              label={item.label}
              href={item.href}
              icon={item.icon}
              key={index}
            />
          );
        })}
        <SidebarItem
          onClick={() => {
            console.log("logout");
          }}
          label="Logout"
          icon={<LogoutIcon />}
        />
        <SidebarTweetItem />
      </div>
    </div>
  );
};

export default Sidebar;
