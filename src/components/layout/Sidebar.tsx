import React from "react";
import useCurrentUser from "hooks/useCurrentUser";
import { signOut } from "next-auth/react";

/* COMPONENTS */
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetItem from "./SidebarTweetItem";

/* ICONS */
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
    auth: true,
  },
  {
    label: "Profile",
    href: "/users/1337",
    icon: <ProfileIcon />,
    auth: true,
  },
];

const Sidebar: React.FC = () => {
  const { data: currentUser } = useCurrentUser();

  console.log("SIDEBAR, currentUser: ", currentUser);

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
              auth={item.auth}
            />
          );
        })}
        {currentUser && (
          <SidebarItem
            onClick={() => void signOut()}
            label="Logout"
            icon={<LogoutIcon />}
          />
        )}
        {currentUser && (
          <div>
            <h2 className="uppercase">
              {/* {currentUser.map((value, index) => {
                return (
                  <span key={`user-value-${index}`}>{value}</span>
                )
              })} */}
            </h2>
          </div>
        )}
        <SidebarTweetItem />
      </div>
    </div>
  );
};

export default Sidebar;
// (async () => {
//   await signOut();
// });
