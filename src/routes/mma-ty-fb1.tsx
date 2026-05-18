import { createFileRoute } from "@tanstack/react-router";
import { Route as ThankYouRoute } from "./thank-you";

export const Route = createFileRoute("/mma-ty-fb1")({
  component: ThankYouRoute.options.component,
});