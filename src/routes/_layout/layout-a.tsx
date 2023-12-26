import * as React from "react";
import { FileRoute, RouteApi } from "@tanstack/react-router";

export const Route = new FileRoute('/_layout/layout-a').createRoute({
  component: LayoutAComponent,
  loader: () => ({ data: "Some loader data" }),
});

const routeApi = new RouteApi({ id: "/_layout/layout-a" });

function LayoutAComponent() {
  const { data } = routeApi.useLoaderData();
  return <div>I'm A! {data}</div>;
}
