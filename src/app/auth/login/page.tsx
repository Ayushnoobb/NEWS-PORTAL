"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { AuthLayout } from "@/dynamic-imports/views";
import LoginForm from "@/helpers/components/sections/form";

export default function LoginPage() {
  return (
    <AuthLayout>
      <ReduxProvider>
        <LoginForm />
      </ReduxProvider>
    </AuthLayout>
  );
}
