// assets
import "@/assets/css/globals.css";

// default imports
import { Metadata } from "next";

// custom imports
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";
// import FooterCompanyInfo from "@/helpers/components/layouts/root/_comps/FooterCompanyInfo";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const AuthLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <>
      <div>{children}</div>
      {/* <FooterCompanyInfo /> */}
    </>
  );
};

export default AuthLayout;
