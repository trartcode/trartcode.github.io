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
