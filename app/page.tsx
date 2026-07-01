import Link from "next/link";
import { articles } from "@/content/knowledge";
import { publications, scholarUrl } from "@/content/publications";
import ArticleCardGrid from "@/components/knowledge/ArticleCardGrid";
import LogoOutline from "@/components/ui/LogoOutline";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const recentArticles = articles.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 flex items-center gap-10 sm:gap-16">
          <FadeIn className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary mb-3">سارة</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6 max-w-xl">
              أهلا أنا سارة.
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-lg mb-8">
              باحثة دكتوراه في علوم الحاسب والذكاء الاصطناعي
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/knowledge"
                className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                اقرأ المقالات
              </Link>
              <Link
                href="/about"
                className="inline-flex px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                من أنا
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="hidden sm:block flex-shrink-0 w-64 lg:w-80 opacity-50 text-secondary" delay={0.2}>
            <LogoOutline className="w-full h-auto" />
          </FadeIn>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <FadeIn>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-foreground">آخر ما كتبت</h2>
              <Link
                href="/knowledge"
                className="text-sm text-primary hover:opacity-80 transition-opacity"
              >
                كل المقالات ←
              </Link>
            </div>
            <div className="w-8 h-0.5 bg-primary mb-6" />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCardGrid article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Publications */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <FadeIn>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-foreground">أبحاثي</h2>
              <a
                href={scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:opacity-80 transition-opacity"
              >
                Google Scholar ←
              </a>
            </div>
            <div className="w-8 h-0.5 bg-primary mb-6" />
          </FadeIn>

          <StaggerContainer>
            {publications.map((pub, i) => (
              <StaggerItem key={i}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-border py-6 last:border-0 hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-text-muted mb-2 leading-relaxed">{pub.venue}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-text-muted">{pub.year}</span>
                    {pub.citations !== undefined && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-surface text-primary font-medium">
                        {pub.citations} استشهاد
                      </span>
                    )}
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
