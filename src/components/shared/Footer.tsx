import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--surface)">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-(--radius-md) bg-(--primary) text-(--primary-foreground) text-sm font-bold">
                JP
              </span>
              JobPlace
            </div>
            <p className="mt-3 text-sm text-(--muted-foreground)">
              Connecting talent with opportunity through thoughtful placement.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">For seekers</h3>
            <ul className="mt-3 space-y-2 text-sm text-(--muted-foreground)">
              <li><Link to="/services" className="hover:text-(--foreground)">Services</Link></li>
              <li><Link to="/jobs" className="hover:text-(--foreground)">Job listings</Link></li>
              <li><Link to="/contact" className="hover:text-(--foreground)">Get placed</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">For employers</h3>
            <ul className="mt-3 space-y-2 text-sm text-(--muted-foreground)">
              <li><Link to="/employers" className="hover:text-(--foreground)">Recruitment</Link></li>
              <li><Link to="/contact" className="hover:text-(--foreground)">Request shortlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">Project</h3>
            <ul className="mt-3 space-y-2 text-sm text-(--muted-foreground)">
              <li>
                <Link to="/project-notes" className="hover:text-(--foreground)">
                  Project notes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-(--border) pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-(--muted-foreground)">
            © {new Date().getFullYear()} JobPlace. Frontend demonstration.
          </p>
          <Link
            to="/project-notes"
            className="text-xs font-medium text-(--primary) hover:underline"
          >
            Project notes
          </Link>
        </div>
      </div>
    </footer>
  );
}
