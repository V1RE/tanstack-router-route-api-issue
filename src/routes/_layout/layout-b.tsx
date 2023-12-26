import * as React from "react";
import { FileRoute, RouteApi } from "@tanstack/react-router";

export const Route = new FileRoute('/_layout/layout-b').createRoute({
  component: LayoutBComponent,
  loader: () => ({ data: "Some loader data" }),
});

const routeApi = new RouteApi({
  id: "/layout/layout-b" as "/_layout/layout-b",
});

function LayoutBComponent() {
  const { data } = routeApi.useLoaderData();
  return <div>I'm B! {data}</div>;
}
