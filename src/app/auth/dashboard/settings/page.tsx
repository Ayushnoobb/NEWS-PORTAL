"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import DashboardLayout from "@/views/layouts/DashboardLayout";

export default function DashboardSettingsPage() {
  return (
    <ReduxProvider>
      <DashboardLayout>DashboardSettingsPage</DashboardLayout>
    </ReduxProvider>
  );
}
