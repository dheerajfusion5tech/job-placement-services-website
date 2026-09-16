import { createFileRoute } from "@tanstack/react-router";
import { ProjectNotesPage } from "@/features/project-notes/pages/ProjectNotesPage";

export const Route = createFileRoute("/project-notes")({
  component: ProjectNotesPage,
});
