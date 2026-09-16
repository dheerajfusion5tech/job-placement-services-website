import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/shared/Header";
import { Breadcrumbs } from "../components/shared/Breadcrumbs";
import { Footer } from "../components/shared/Footer";
import { ThemeProvider } from "../lib/theme";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Job Placement Services" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased bg-slate-50/30 text-slate-900">
        <ThemeProvider>
          <Header />
          <Breadcrumbs />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}