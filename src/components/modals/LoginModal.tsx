import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

/* COMPONENTS */
import Modal from "../Modal";
import Input from "../layout/Input";
// import Button from "../Button";

/* HOOKS */
import useLoginModal from "hooks/useLoginModal";
import useRegisterModal from "hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      /* ADD LOGIN */
      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Logged In");

      loginModal.onClose();
    } catch (error) {
      toast.error("ERROR WHILE LOGGIN IN");
      console.error(`LOGIN-MODAL ERROR: `, error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-center text-neutral-400">
      <p>
        No account yet?
        <span
          onClick={onToggle}
          className="cursor-pointer text-primary-color hover:underline"
        >
          {" "}
          CREATE ONE
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Login"
      actionLabel="Sign In"
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={() => {
        void onSubmit();
      }}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
