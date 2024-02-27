"use client";

import { UserRegisterForm } from "@/dynamic-imports/components";
// Custom Imports
import DashboardLayout from "@/views/layouts/DashboardLayout";

export default function DashboardPage() {
  return (
        <DashboardLayout>
          <UserRegisterForm />
        </DashboardLayout>
  );
}
