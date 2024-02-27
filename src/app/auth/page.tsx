"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { AuthLayout } from "@/dynamic-imports/views";

export default function AuthHome() {
  return (
    <AuthLayout>
      <ReduxProvider>Dashboard Page</ReduxProvider>;
    </AuthLayout>
  );
}
