import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl font-semibold text-foreground mt-10 mb-4 leading-snug">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base text-foreground leading-loose mb-5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground pr-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-foreground pr-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-text-muted">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-r-4 border-primary pr-5 my-6 text-text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface rounded-xl p-5 overflow-x-auto my-6 text-sm leading-relaxed">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-border my-8" />,
    ...components,
  };
}
