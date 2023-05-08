import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import useLoginModal from "@/hooks/useLoginModal";
import Input from "../inputs/Input";
import Modal from "./Modal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IProps {}
const LoginModal: React.FC<IProps> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const onClose = useLoginModal((state) => state.onClose);
  const isOpen = useLoginModal((state) => state.isOpen);
  const schema = yup
    .object({
      email: yup.string().email().required("Please enter an email"),
      password: yup.string().required("Please enter a password"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    console.log(data);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("Logged in successfully");
        router.refresh();
        onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <Modal
      title="Login"
      subtitle="Welcome back to Airbnb"
      disabled={loading}
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit(onSubmit)}
      handleGithub={() => signIn("github")}
      handleGoogle={() => signIn("google")}
    >
      <Input id="email" type="email" label="Email" disabled={loading} register={register} errors={errors} required />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </Modal>
  );
};

export default LoginModal;
