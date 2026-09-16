import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import notes from "../../../../project-notes.md?raw";

export function ProjectNotesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <article className="prose-notes">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="mb-6 text-3xl font-semibold tracking-tight">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="mb-3 mt-10 text-xl font-semibold tracking-tight border-b border-(--border) pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-2 mt-6 text-lg font-semibold">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 leading-relaxed text-(--muted-foreground)">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="mb-4 list-disc space-y-1 pl-5 text-(--muted-foreground)">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-4 list-decimal space-y-1 pl-5 text-(--muted-foreground)">{children}</ol>
            ),
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            code: ({ children, className }) => {
              const isBlock = className?.includes("language-");
              if (isBlock) {
                return (
                  <pre className="mb-4 overflow-x-auto rounded-(--radius-md) border border-(--border) bg-(--surface) p-4 text-sm">
                    <code>{children}</code>
                  </pre>
                );
              }
              return (
                <code className="rounded bg-(--surface-elevated) px-1.5 py-0.5 text-sm">
                  {children}
                </code>
              );
            },
            a: ({ href, children }) => (
              <a href={href} className="text-(--primary) underline-offset-2 hover:underline">
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="mb-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border border-(--border) bg-(--surface) px-3 py-2 text-left font-semibold">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-(--border) px-3 py-2 text-(--muted-foreground)">
                {children}
              </td>
            ),
          }}
        >
          {notes}
        </ReactMarkdown>
      </article>
    </div>
  );
}
