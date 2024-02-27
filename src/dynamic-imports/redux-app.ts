import dynamic from "next/dynamic";

//////////////////////////////
// Layouts = helpers/components/layouts
//////////////////////////////
export const ReduxProvider = dynamic(
  () => import("@/helpers/redux-app/ReduxProvider"),
  { ssr: false }
);
