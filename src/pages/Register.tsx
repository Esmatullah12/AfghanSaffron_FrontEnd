import React from "react";
import Layout from "../layout/Layout";
import { RegisterForm } from "../features/auth";

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default RegisterPage;