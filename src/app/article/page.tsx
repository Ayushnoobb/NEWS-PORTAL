"use client";

// Default imports
import { ArticleSection } from "@/dynamic-imports/components";

// Custom imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { PublicLayout } from "@/dynamic-imports/views";

export default function Article(props: any) {
  const { searchParams } = props;

  return (
    <PublicLayout>
      <ReduxProvider>
        <ArticleSection {...searchParams} />
      </ReduxProvider>
    </PublicLayout>
  );
}
