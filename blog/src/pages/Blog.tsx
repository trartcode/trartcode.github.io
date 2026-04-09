import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles, getCategories, getYears } from '../utils/articles';

const Blog = () => {
  const articles = useMemo(() => getAllArticles(), []);
  const categories = useMemo(() => getCategories(), []);
  const years = useMemo(() => getYears(), []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedYear, setSelectedYear] = useState('全部');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const articleYear = (() => {
      const date = new Date((article as any).dateRaw || article.date);
      return date.getFullYear().toString();
    })();

    const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
    const matchesYear = selectedYear === '全部' || articleYear === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-calligraphy text-4xl text-ink-dark mb-4">文章列表</h1>
          <p className="text-ink-light">执笔记录，岁月留痕</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 space-y-4">
          {/* Categories Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-ink-light flex-shrink-0">分类：</span>
            <div
              className="flex items-center gap-2 overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-ink-dark text-paper-50'
                      : 'text-ink-light hover:text-ink-dark hover:bg-paper-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Years Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-ink-light flex-shrink-0">时间：</span>
            <div
              className="flex items-center gap-2 overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => setSelectedYear('全部')}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  selectedYear === '全部'
                    ? 'bg-ink-dark text-paper-50'
                    : 'text-ink-light hover:text-ink-dark hover:bg-paper-200'
                }`}
              >
                全部
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                    selectedYear === year
                      ? 'bg-ink-dark text-paper-50'
                      : 'text-ink-light hover:text-ink-dark hover:bg-paper-200'
                  }`}
                >
                  {year} 年
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b6b6b',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '42px',
                paddingRight: '16px',
                paddingTop: '10px',
                paddingBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #e0d8ca',
                backgroundColor: 'rgba(250, 248, 245, 0.5)',
                color: '#2d2d2d',
                outline: 'none',
                fontSize: '14px',
              }}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.slug} {...article} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-light text-lg">暂无符合条件的文章</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredArticles.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 rounded-lg border border-paper-300 text-ink-light hover:bg-paper-100 transition-colors disabled:opacity-50 cursor-pointer"
                disabled
              >
                上一页
              </button>
              <span className="px-4 py-2 text-ink-light">
                1 / 1
              </span>
              <button
                className="px-4 py-2 rounded-lg border border-paper-300 text-ink-light hover:bg-paper-100 transition-colors disabled:opacity-50 cursor-pointer"
                disabled
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
