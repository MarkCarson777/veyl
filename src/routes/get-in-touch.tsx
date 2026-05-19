import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-in-touch")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/get-in-touch"!</div>;
}
