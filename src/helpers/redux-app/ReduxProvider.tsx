// Package imports
import { Provider } from "react-redux";

// Custom imports
import { ChildrenSchema } from "@/utils/schemas/CommonSchema";
import store from "@/helpers/redux-app/store";

// Persist the store
// persistStore(store);

// Main function
export default function ReduxProvider(props: ChildrenSchema) {
  // Props
  const { children } = props;

  // Render
  return <Provider store={store}>{children}</Provider>;
}
