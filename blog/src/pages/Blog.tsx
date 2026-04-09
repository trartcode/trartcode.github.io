import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    id: '1',
    title: '静水流深：技术之路的思考',
    excerpt: '当代码在指尖流淌，当逻辑在脑海中展开，我们追求的究竟是什么？是技术的精进，还是内心的平静？在这条漫长的技术之路上，我一直在思考...',
    date: '2026-04-08',
    category: '技术',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
  },
  {
    id: '2',
    title: '人间烟火：周末的厨房时光',
    excerpt: '周末的厨房里，锅碗瓢盆碰撞出生活的旋律。简单的食材，朴素的烹饪，却蕴含着最深的人间烟火。每一个热爱生活的人，都应该学会好好吃饭...',
    date: '2026-04-05',
    category: '生活',
    coverImage: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&q=80',
  },
  {
    id: '3',
    title: '山水之间：一次说走就走的旅行',
    excerpt: '远离城市的喧嚣，置身于山水之间。雾气缭绕的山峦，清澈见底的溪流，让人心旷神怡。旅行的意义，或许不在于看多少风景，而在于找回内心的宁静...',
    date: '2026-04-01',
    category: '旅行',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: '4',
    title: '墨香书韵：阅读的力量',
    excerpt: '在这个快节奏的时代，我们多久没有静下心来好好读一本书了？阅读不仅是获取知识的方式，更是一种与自己对话的修行。每一本书，都是一扇通向...',
    date: '2026-03-28',
    category: '读书',
    coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
  },
  {
    id: '5',
    title: '晨曦微露：关于早起这件小事',
    excerpt: '从前的我总是赖床到最后一刻，直到有一天，我决定尝试早起。当第一缕阳光透过窗帘，当世界还在沉睡，一个人的清晨，竟是如此美好...',
    date: '2026-03-25',
    category: '习惯',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: '6',
    title: '编程之道：代码即诗歌',
    excerpt: '好的代码如同优美的诗篇，简洁而有力。每一个函数都是一句诗行，每一个变量都是一个意象。追求代码的艺术，是每个程序员的终极浪漫...',
    date: '2026-03-20',
    category: '技术',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
  },
];

const categories = ['全部', '技术', '生活', '旅行', '读书', '习惯'];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 flex-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-ink-dark text-paper-50'
                      : 'text-ink-light hover:text-ink-dark hover:bg-paper-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  left: '14px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#6b6b6b',
                  pointerEvents: 'none',
                  zIndex: 1
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
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} {...article} index={index} />
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
              <button className="px-4 py-2 rounded-lg border border-paper-300 text-ink-light hover:bg-paper-100 transition-colors disabled:opacity-50 cursor-pointer" disabled>
                上一页
              </button>
              <span className="px-4 py-2 text-ink-light">1 / 1</span>
              <button className="px-4 py-2 rounded-lg border border-paper-300 text-ink-light hover:bg-paper-100 transition-colors disabled:opacity-50 cursor-pointer" disabled>
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
