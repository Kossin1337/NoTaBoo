import React, { useCallback } from "react";

import { CloseIcon } from "./layout/icons/CloseIcon";

import Button from "./Button";

interface IModal {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<IModal> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
        flex-center
        fixed
        inset-0
        z-50
        overflow-y-auto
        overflow-x-hidden
        bg-neutral-800
        bg-opacity-70
        outline-none
        focus:outline-none
      "
      >
        <div className="relative mx-auto my-6 w-full lg:h-auto lg:w-3/6 lg:max-w-3xl">
          {/* CONTENT */}
          <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-bg-color shadow-lg lg:h-auto">
            <div className="flex items-center justify-between rounded-t-md p-8">
              <h2 className="text-2xl font-semibold text-primary-color">
                {title}
              </h2>
              <button
                onClick={handleClose}
                className="flex-center h-[36px] w-[36px] cursor-pointer text-darker-color transition hover:text-primary-color"
              >
                <CloseIcon />
              </button>
            </div>
            {/* BODY */}
            <div className="relative flex-auto p-10">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 p-10">
              <Button label={actionLabel} disabled={disabled} secondary fullWidth onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
