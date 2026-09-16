import { createFileRoute } from "@tanstack/react-router";
import { EmployersPage } from "@/features/employers/pages/EmployersPage";

export const Route = createFileRoute("/employers")({
  component: EmployersPage,
});
