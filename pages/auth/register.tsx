import AuthController from "@components/AuthController";
import FormLayout from "@components/FormLayout";
import RegisterForm from "@components/RegisterForm";
import React from "react";

const Register = () => (
  <FormLayout title="Создать аккаунт">
    <RegisterForm />
    <AuthController />
  </FormLayout>
);

export default Register;
