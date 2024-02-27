"use client";

// Default imports

// Custom imports
import {
  FeaturedHighlights,
  RootLayoutLogo,
  Navbar,
} from "@/dynamic-imports/components";
import { ReduxProvider } from "@/dynamic-imports/redux-app";

//////////////////////////////
// Header, The main header component
//////////////////////////////
export default function Header() {
  return (
    <header className="header grid grid-rows-[60px_50px_50px]">
      {/* Height of each components below = 60px, 50px, 50px respectively */}
      <RootLayoutLogo />

      <ReduxProvider>
        <Navbar />
        <FeaturedHighlights />
      </ReduxProvider>
    </header>
  );
}
