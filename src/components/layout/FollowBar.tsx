import React from "react";

const FollowBar = () => {
  return (
    <div className="hidden px-6 py-4 md:block">
      <div className="rounded-xl bg-neutral-800 p-4">
        <h2 className="font-orbitron text-center text-base font-semibold uppercase text-primary-color">
          Who to Follow?
        </h2>
        <div className="mt-4 flex flex-col gap-6">{/* USER LIST */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
