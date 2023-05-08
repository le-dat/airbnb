import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";

import useRegisterModal from "@/hooks/useRegisterModal";
import { postData } from "@/utils/httpRequest";
import Input from "../inputs/Input";
import Modal from "./Modal";

interface IProps {}
const RegisterModal: React.FC<IProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onClose = useRegisterModal((state) => state.onClose);
  const isOpen = useRegisterModal((state) => state.isOpen);
  const schema = yup
    .object({
      email: yup.string().email().required("Please enter an email"),
      password: yup.string().required("Please enter a password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    const res = await postData("/api/register", data);
    if (res?.status === "success") {
      toast.success(res?.message);
      onClose();
    } else {
      toast.error(res?.message);
    }

    setLoading(false);
  };

  return (
    <Modal
      title="Register"
      subtitle="Welcome to Airbnb"
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
      <Input
        id="confirmPassword"
        type="password"
        label="Confirm password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </Modal>
  );
};

export default RegisterModal;
