// assets
import "@/assets/css/globals.css";

// default imports
import { Metadata } from "next";

// custom imports
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const PublicLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <div className="grid grid-rows-[160px_minmax(calc(100vh-160px),auto)_auto]">
      <RootHeader />
      <main>{children}</main>
      <RootFooter />
    </div>
  );
};

export default PublicLayout;
