import { createFileRoute } from "@tanstack/react-router";
import { Route as IndexRoute } from "./index";

export const Route = createFileRoute("/mma-fb1")({
  component: IndexRoute.options.component,
});