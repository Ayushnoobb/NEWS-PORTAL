import { format } from "url";

export const getRouteUrl = (pathname: string, query: any) =>
  format({
    pathname,
    query,
  });
