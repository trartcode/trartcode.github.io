import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Heart, Bookmark } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample article content
  const article = {
    id,
    title: '静水流深：技术之路的思考',
    date: '2026年4月8日',
    category: '技术',
    author: '墨韵斋主人',
    readingTime: '8 分钟',
    content: `
当代码在指尖流淌，当逻辑在脑海中展开，我们追求的究竟是什么？

是技术的精进，还是内心的平静？在这条漫长的技术之路上，我一直在思考这个问题。

## 缘起

记得刚踏入编程世界的那一天，眼中满是好奇与期待。那时的我，以为学会各种框架、掌握各种工具，就是成为一个好程序员的全部。

多年后回首，才发现那些看似炫酷的技术不过是工具，真正的核心，是解决问题的思维方式，是对代码的敬畏之心。

## 沉淀

> 「水善利万物而不争，处众人之所恶，故几于道。」——《道德经》

如水般的代码，应该有以下特质：

1. **简洁** - 去除一切不必要的复杂性
2. **清晰** - 让阅读者一目了然
3. **柔韧** - 能够适应变化，而不是脆弱易碎
4. **谦逊** - 知道自己能力的边界

## 感悟

技术之路漫漫，吾将上下而求索。

在这个快节奏的时代，我们常常急于追逐新技术、新框架，却忘了停下来思考：**我们为什么写代码？**

是为了完成工作？是为了解决用户的问题？还是为了实现自己的价值？

或许，答案就在这水墨之间——

\`\`\`
代码是诗，技术是道。
静水流深，方能致远。
\`\`\`

愿我们都能在这条路上，走出自己的节奏，写出属于自己的篇章。

---

*「落霞与孤鹜齐飞，秋水共长天一色。」*
`,
  };

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
              <span className="font-calligraphy text-accent-seal">墨</span>
            </div>
            <div>
              <p className="text-ink-dark font-medium">{article.author}</p>
              <p className="text-ink-light text-sm">执笔记录生活</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                isLiked
                  ? 'border-accent-red text-accent-red bg-accent-red/5'
                  : 'border-paper-300 text-ink-light hover:border-ink-gray'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
              <span className="text-sm">{isLiked ? '已喜欢' : '喜欢'}</span>
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                isBookmarked
                  ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                  : 'border-paper-300 text-ink-light hover:border-ink-gray'
              }`}
            >
              <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span className="text-sm">{isBookmarked ? '已收藏' : '收藏'}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-paper-300 text-ink-light hover:border-ink-gray transition-all ml-auto cursor-pointer">
              <Share2 size={16} />
              <span className="text-sm">分享</span>
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
          <Link
            to="/blog"
            className="text-ink-light hover:text-ink-dark transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>返回列表</span>
          </Link>
          <Link
            to="/blog"
            className="text-ink-light hover:text-ink-dark transition-colors flex items-center gap-2"
          >
            <span>更多文章</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
