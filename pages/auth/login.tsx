import AuthController from "@components/AuthController";
import FormLayout from "@components/FormLayout";
import LoginForm from "@components/LoginForm";
import React from "react";

const Login = () => (
  <FormLayout title="Войти в аккаунт">
    <LoginForm />
    <AuthController />
  </FormLayout>
);

export default Login;
