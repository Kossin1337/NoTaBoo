import React, { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

import Modal from "../Modal";
import Input from "../layout/Input";
// import Button from "../Button";

import useLoginModal from "hooks/useLoginModal";
import useRegisterModal from "hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        userName,
        name,
      });

      toast.success("Account created");

      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Account created & Logged In");

      registerModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, userName, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-center text-neutral-400">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="cursor-pointer text-primary-color hover:underline"
        >
          {" "}
          SIGN IN
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Create an Account"
      actionLabel="Join NoTaBoo"
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={() => handleSubmit()}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
