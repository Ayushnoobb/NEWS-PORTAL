//////////////////////////////
// layouts

import dynamic from "next/dynamic";

//////////////////////////////
export const PublicLayout = dynamic(
  () => import("@/views/layouts/PublicLayout"),
  {
    ssr: false,
  }
);

export const AuthLayout = dynamic(() => import("@/views/layouts/AuthLayout"), {
  ssr: false,
});
