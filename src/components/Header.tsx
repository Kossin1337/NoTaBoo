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
    <div className="border-b-[1px] border-l-neutral-800 p-5">
      <div className="flex w-full flex-row justify-between gap-2">
        <div>
          <h1 className="text-lg font-medium uppercase text-text-color">
            {label}
          </h1>
        </div>
        {showBackArrow && (
          <div
            className="cursor-pointer transition hover:opacity-70"
            onClick={handleBack}
          >
            <div className="flex-center h-[32px] w-[32px] cursor-pointer text-primary-color transition hover:text-darker-color">
              <BackArrow />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
