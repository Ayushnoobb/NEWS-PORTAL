"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import TextEditor from "@/helpers/components/text-editor/text-editor";
import DashboardLayout from "@/views/layouts/DashboardLayout";
import ProtectedRoute from "@/views/protected/protected";
import { useState } from "react";

export default function DashboardArticlePage() {
  const [value, setValue] = useState(''); //text editor content
  return (
    <ReduxProvider>
      <ProtectedRoute>
        <DashboardLayout>
          <TextEditor props={{value,setValue}} />  
        </DashboardLayout>
      </ProtectedRoute>
    </ReduxProvider>
  );
}
