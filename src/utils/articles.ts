import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

// 计算阅读时间（按中文阅读速度估算）
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 300;
  const text = content.replace(/[#*`>\[\]]/g, '');
  const words = text.length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} 分钟`;
};

// 格式化日期
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

// 使用 Vite 的 glob 导入所有 Markdown 文件
const articleFiles = import.meta.glob('../articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const getAllArticles = (): Article[] => {
  const articles: Article[] = [];

  for (const [path, content] of Object.entries(articleFiles)) {
    // 从路径中提取 slug
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    // 解析 Front Matter
    const { data, content: markdownContent } = matter(content);

    articles.push({
      slug,
      title: data.title || '无标题',
      date: formatDate(data.date),
      dateRaw: data.date,
      category: data.category || '未分类',
      author: data.author || '匿名',
      coverImage: data.coverImage || '',
      excerpt: data.excerpt || '',
      content: markdownContent.trim(),
      readingTime: calculateReadingTime(markdownContent),
    });
  }

  // 按日期排序，最新的在前
  return articles.sort((a, b) => {
    const dateA = new Date((a as any).dateRaw || a.date);
    const dateB = new Date((b as any).dateRaw || b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
};

export const getCategories = (): string[] => {
  const articles = getAllArticles();
  const categories = [...new Set(articles.map((a) => a.category))];
  return ['全部', ...categories];
};

export const getYears = (): string[] => {
  const articles = getAllArticles();
  const years = articles.map((a) => {
    const date = new Date((a as any).dateRaw || a.date);
    return date.getFullYear().toString();
  });
  const uniqueYears = [...new Set(years)];
  return uniqueYears.sort((a, b) => b.localeCompare(a));
};

// ========== 喜欢和收藏统计 ==========

interface ArticleStats {
  likes: number;
  bookmarks: number;
  userLiked: boolean;
  userBookmarked: boolean;
}

type StatsRecord = Record<string, ArticleStats>;

const STATS_KEY = 'blog_article_stats';

const getStats = (): StatsRecord => {
  try {
    const stored = localStorage.getItem(STATS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveStats = (stats: StatsRecord): void => {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

export const getArticleStats = (slug: string): ArticleStats => {
  const stats = getStats();
  return stats[slug] || { likes: 0, bookmarks: 0, userLiked: false, userBookmarked: false };
};

export const toggleLike = (slug: string): ArticleStats => {
  const stats = getStats();
  if (!stats[slug]) {
    stats[slug] = { likes: 0, bookmarks: 0, userLiked: false, userBookmarked: false };
  }
  
  if (stats[slug].userLiked) {
    stats[slug].likes = Math.max(0, stats[slug].likes - 1);
    stats[slug].userLiked = false;
  } else {
    stats[slug].likes += 1;
    stats[slug].userLiked = true;
  }
  
  saveStats(stats);
  return stats[slug];
};

export const toggleBookmark = (slug: string): ArticleStats => {
  const stats = getStats();
  if (!stats[slug]) {
    stats[slug] = { likes: 0, bookmarks: 0, userLiked: false, userBookmarked: false };
  }
  
  if (stats[slug].userBookmarked) {
    stats[slug].bookmarks = Math.max(0, stats[slug].bookmarks - 1);
    stats[slug].userBookmarked = false;
  } else {
    stats[slug].bookmarks += 1;
    stats[slug].userBookmarked = true;
  }
  
  saveStats(stats);
  return stats[slug];
};
