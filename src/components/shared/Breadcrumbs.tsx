import { Link, useLocation } from "@tanstack/react-router";

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500 max-w-7xl mx-auto">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const url = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const label = segment.replace(/-/g, " ");

          return (
            <li key={url} className="flex items-center space-x-2 capitalize">
              <span className="text-slate-400">/</span>
              {isLast ? (
                <span className="text-slate-900 font-semibold">{label}</span>
              ) : (
                <Link to={url} className="hover:text-blue-600 transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
