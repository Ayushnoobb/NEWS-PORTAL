"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { PublicLayout } from "@/dynamic-imports/views";
import HomeSection from "@/helpers/components/sections/main/HomeSection";

export default function Home() {
  return (
    <PublicLayout>
      <ReduxProvider>
        <HomeSection />
      </ReduxProvider>
    </PublicLayout>
  );
}
