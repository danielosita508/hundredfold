import fs from "fs";
import path from "path";
import matter from "gray-matter";

const insightsDirectory = path.join(process.cwd(), "content/insights");

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  author: ArticleAuthor;
  category: string;
  categorySlug: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
  coverImage?: string;
  tags?: string[];
}

export interface ArticleWithContent extends ArticleMeta {
  contentHtml: string;
}

/**
 * Ensures the insights directory exists.
 */
function ensureDirectory() {
  if (!fs.existsSync(insightsDirectory)) {
    fs.mkdirSync(insightsDirectory, { recursive: true });
  }
}

/**
 * Retrieves all articles with frontmatter metadata, sorted by date descending.
 */
export function getAllArticles(): ArticleMeta[] {
  ensureDirectory();
  const fileNames = fs.readdirSync(insightsDirectory);

  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(insightsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled Article",
        date: data.date || "October 2026",
        author: data.author || {
          name: "Hundredfold Research Desk",
          role: "Commercial Intelligence & Governance",
        },
        category: data.category || "Commercial Insights",
        categorySlug: data.categorySlug || "commercial-insights",
        readTime: data.readTime || "5 min read",
        excerpt: data.excerpt || "",
        featured: Boolean(data.featured),
        coverImage: data.coverImage || "/assets/og-image.jpg",
        tags: data.tags || [],
      } as ArticleMeta;
    });

  // Sort articles by date descending
  return allArticlesData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Retrieves a single article by its slug and renders its markdown content to HTML using remark.
 */
export async function getArticleBySlug(slug: string): Promise<ArticleWithContent | null> {
  ensureDirectory();
  const fullPath = path.join(insightsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Dynamic import of remark and remark-html for seamless Next.js App Router ESM execution
  const { remark } = await import("remark");
  const htmlModule = await import("remark-html");
  const remarkHtml = htmlModule.default;

  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "Untitled Article",
    date: data.date || "October 2026",
    author: data.author || {
      name: "Hundredfold Research Desk",
      role: "Commercial Intelligence & Governance",
    },
    category: data.category || "Commercial Insights",
    categorySlug: data.categorySlug || "commercial-insights",
    readTime: data.readTime || "5 min read",
    excerpt: data.excerpt || "",
    featured: Boolean(data.featured),
    coverImage: data.coverImage || "/assets/og-image.jpg",
    tags: data.tags || [],
    contentHtml,
  };
}

/**
 * Retrieves all unique categories present across published articles.
 */
export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const articles = getAllArticles();
  const categoryMap = new Map<string, { name: string; count: number }>();

  articles.forEach((art) => {
    const existing = categoryMap.get(art.categorySlug);
    if (existing) {
      existing.count += 1;
    } else {
      categoryMap.set(art.categorySlug, { name: art.category, count: 1 });
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, val]) => ({
    slug,
    name: val.name,
    count: val.count,
  }));
}
