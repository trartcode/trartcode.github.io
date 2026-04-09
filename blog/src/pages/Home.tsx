import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Feather, BookOpen, Sparkles } from 'lucide-react';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className={`space-y-8 transition-all duration-800 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Decorative Seal */}
          <div className="flex justify-center">
            <div className="seal-stamp w-20 h-20 hover:rotate-[-5deg] hover:scale-105 transition-all cursor-pointer">
              <span className="font-calligraphy text-accent-seal text-2xl rotate-[-5deg]">墨</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-calligraphy text-5xl md:text-6xl text-ink-dark leading-tight">
            墨韵斋
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            执笔书尽人间事，一墨一纸一乾坤。
            <br />
            在这里，用文字记录生活，用心感受世界。
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-paper-300" />
            <Feather size={16} className="text-accent-ochre" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-paper-300" />
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            {[
              { icon: BookOpen, text: '技术笔记' },
              { icon: Sparkles, text: '生活感悟' },
              { icon: Feather, text: '随笔杂谈' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-paper-300 text-ink-light text-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
              >
                <Icon size={16} strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <Link to="/blog">
              <button className="px-8 py-3 bg-ink-dark text-paper-50 rounded-lg font-medium flex items-center gap-2 hover:bg-ink-gray hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg cursor-pointer">
                浏览文章
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-3 border border-ink-gray text-ink-dark rounded-lg font-medium hover:bg-ink-dark/5 hover:-translate-y-0.5 transition-all cursor-pointer">
                关于我
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles Preview */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="font-calligraphy text-3xl text-ink-dark mb-4">近期文章</h2>
          <p className="text-ink-light">几篇最近的思考与记录</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group"
            >
              <Link to={`/blog/post-${i}`}>
                <article className="xuan-paper rounded-xl overflow-hidden border border-paper-300 card-hover cursor-pointer h-full hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="text-xs text-ink-light mb-3">
                      {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="font-calligraphy text-xl text-ink-dark mb-3 group-hover:text-ink-gray transition-colors">
                      {['静水流深：技术之路的思考', '人间烟火：周末的厨房时光', '山水之间：一次说走就走的旅行'][i - 1]}
                    </h3>
                    <p className="text-ink-light text-sm line-clamp-3">
                      {[
                        '当代码在指尖流淌，当逻辑在脑海中展开，我们追求的究竟是什么？是技术的精进，还是内心的平静？',
                        '周末的厨房里，锅碗瓢盆碰撞出生活的旋律。简单的食材，朴素的烹饪，却蕴含着最深的人间烟火。',
                        '远离城市的喧嚣，置身于山水之间。雾气缭绕的山峦，清澈见底的溪流，让人心旷神怡，忘却尘世的烦恼。',
                      ][i - 1]}
                    </p>
                    <div className="mt-4 text-accent-ochre text-sm group-hover:text-accent-seal transition-colors">
                      阅读全文 →
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog">
            <button className="px-6 py-2 border border-paper-300 text-ink-light rounded-lg hover:border-ink-gray hover:text-ink-dark transition-colors cursor-pointer">
              查看全部文章 →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
