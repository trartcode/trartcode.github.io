import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Heart, Bookmark, Check } from 'lucide-react';
import { getArticleBySlug, getAllArticles, getArticleStats, toggleLike, toggleBookmark } from '../utils/articles';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState({ likes: 0, bookmarks: 0, userLiked: false, userBookmarked: false });
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 动态加载文章
  const article = id ? getArticleBySlug(id) : undefined;
  const allArticles = getAllArticles();

  // 初始化统计数据
  useEffect(() => {
    if (id) {
      const articleStats = getArticleStats(id);
      setStats(articleStats);
    }
  }, [id]);

  const handleLike = () => {
    if (id) {
      const newStats = toggleLike(id);
      setStats(newStats);
    }
  };

  const handleBookmark = () => {
    if (id) {
      const newStats = toggleBookmark(id);
      setStats(newStats);
    }
  };

  // 找不到文章
  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-calligraphy text-3xl text-ink-dark mb-6">文章未找到</h1>
          <p className="text-ink-light mb-8">抱歉，您访问的文章不存在或已被删除。</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-dark text-paper-50 hover:bg-ink-gray transition-colors"
          >
            <ArrowLeft size={18} />
            <span>返回文章列表</span>
          </Link>
        </div>
      </div>
    );
  }

  // 获取上一篇/下一篇文章
  const currentIndex = allArticles.findIndex((a) => a.slug === id);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-ink-light hover:text-ink-dark transition-colors"
          >
            <ArrowLeft size={18} />
            <span>返回文章列表</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="xuan-paper rounded-xl p-8 md:p-12 mb-8 border border-paper-300">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-ink-light mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} strokeWidth={1.5} />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} strokeWidth={1.5} />
              {article.category}
            </span>
            <span>{article.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-calligraphy text-3xl md:text-4xl text-ink-dark mb-6 leading-snug">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-6 border-b border-paper-200">
            <div className="w-10 h-10 rounded-full bg-accent-ochre/20 flex items-center justify-center">
              <span className="font-calligraphy text-accent-seal">
                {article.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-ink-dark font-medium">{article.author}</p>
              <p className="text-ink-light text-sm">执笔记录生活</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                stats.userLiked
                  ? 'border-accent-red text-accent-red bg-accent-red/5'
                  : 'border-paper-300 text-ink-light hover:border-ink-gray'
              }`}
            >
              <Heart size={16} fill={stats.userLiked ? 'currentColor' : 'none'} />
              <span className="text-sm">{stats.userLiked ? '已喜欢' : '喜欢'}</span>
              {stats.likes > 0 && <span className="text-xs">({stats.likes})</span>}
            </button>
            <button
              onClick={handleBookmark}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                stats.userBookmarked
                  ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                  : 'border-paper-300 text-ink-light hover:border-ink-gray'
              }`}
            >
              <Bookmark size={16} fill={stats.userBookmarked ? 'currentColor' : 'none'} />
              <span className="text-sm">{stats.userBookmarked ? '已收藏' : '收藏'}</span>
              {stats.bookmarks > 0 && <span className="text-xs">({stats.bookmarks})</span>}
            </button>
            <button
              onClick={handleShare}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ml-auto cursor-pointer ${
                copied
                  ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                  : 'border-paper-300 text-ink-light hover:border-ink-gray'
              }`}
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              <span className="text-sm">{copied ? '已复制' : '分享'}</span>
            </button>
          </div>
        </article>

        {/* Article Content */}
        <div className="xuan-paper rounded-xl p-8 md:p-12 border border-paper-300">
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 py-6 border-t border-paper-200">
          {prevArticle ? (
            <Link
              to={`/blog/${prevArticle.slug}`}
              className="text-ink-light hover:text-ink-dark transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              <span className="max-w-40 truncate">{prevArticle.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              to={`/blog/${nextArticle.slug}`}
              className="text-ink-light hover:text-ink-dark transition-colors flex items-center gap-2"
            >
              <span className="max-w-40 truncate">{nextArticle.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
