import React, { useCallback } from "react";
import { useRouter } from "next/router";

import { BackArrow } from "./layout/icons/BackArrow";

interface IHeader {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<IHeader> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="w-full border-b-[1px] border-l-neutral-800 p-5">
      <div className="items-between flex  flex-row gap-2">
        <h1 className="text-xl font-semibold text-text-color">{label}</h1>
        {showBackArrow && (
          <div
            className="cursor-pointer transition hover:opacity-70"
            onClick={handleBack}
          >
            <div className="flex-center h-[32px] w-[32px] cursor-pointer text-darker-color transition hover:text-primary-color">
              <BackArrow />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
