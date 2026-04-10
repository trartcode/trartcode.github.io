import { Mail, MapPin, Coffee, BookOpen, Feather, PenTool } from 'lucide-react';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const About = () => {
  const hobbies = [
    { icon: Coffee, label: '品茶', desc: '一盏清茶，悠然自得' },
    { icon: BookOpen, label: '阅读', desc: '书卷多情，落笔生花' },
    { icon: Feather, label: '写作', desc: '笔走龙蛇，记录生活' },
    { icon: PenTool, label: '书法', desc: '翰墨飘香，修身养性' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="seal-stamp w-24 h-24 mx-auto mb-6 hover:rotate-[-5deg] hover:scale-105 transition-all cursor-pointer">
            <span className="font-calligraphy text-accent-seal text-3xl rotate-[-5deg]">墨</span>
          </div>
          <h1 className="font-calligraphy text-4xl text-ink-dark mb-4">关于我</h1>
          <p className="text-ink-light font-serif">落笔之处，皆是风景</p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="xuan-paper rounded-xl p-8 md:p-12 border border-paper-300">
            <h2 className="font-calligraphy text-2xl text-ink-dark mb-6">你好，我是墨韵斋主人</h2>
            <div className="space-y-4 text-ink-light leading-relaxed">
              <p>
                一个热爱技术、也热爱生活的普通人。在代码的世界里追求简洁与优雅，
                在文字的海洋里寻找灵感与平静。
              </p>
              <p>
                相信好的代码如同诗篇，好的文字如同画卷。愿在这喧嚣的世界里，
                用键盘敲出一片宁静的天地。
              </p>
              <p>
                这里记录着我的思考、感悟、学习笔记，以及偶尔的闲言碎语。
                如果某篇文章能引起你的共鸣，那将是我最大的荣幸。
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="xuan-paper rounded-xl p-6 border border-paper-300 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-ochre/10 flex items-center justify-center">
                <MapPin size={20} className="text-accent-ochre" />
              </div>
              <h3 className="font-medium text-ink-dark mb-1">所在地</h3>
              <p className="text-ink-light text-sm">中国 · 安徽</p>
            </div>
            <div className="xuan-paper rounded-xl p-6 border border-paper-300 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                <Coffee size={20} className="text-accent-cyan" />
              </div>
              <h3 className="font-medium text-ink-dark mb-1">常饮</h3>
              <p className="text-ink-light text-sm">黄山毛峰</p>
            </div>
            <div className="xuan-paper rounded-xl p-6 border border-paper-300 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-seal/10 flex items-center justify-center">
                <Feather size={20} className="text-accent-seal" />
              </div>
              <h3 className="font-medium text-ink-dark mb-1">信条</h3>
              <p className="text-ink-light text-sm">静水流深</p>
            </div>
          </div>

          {/* Hobbies */}
          <div className="xuan-paper rounded-xl p-8 md:p-12 border border-paper-300">
            <h2 className="font-calligraphy text-2xl text-ink-dark mb-8 text-center">闲情雅致</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hobbies.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-paper-100 flex items-center justify-center border border-paper-200">
                    <Icon size={24} className="text-ink-gray" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-ink-dark mb-1">{label}</h3>
                  <p className="text-ink-light text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="xuan-paper rounded-xl p-8 md:p-12 border border-paper-300">
            <h2 className="font-calligraphy text-2xl text-ink-dark mb-6 text-center">联系方式</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-paper-300 text-ink-light hover:text-ink-dark hover:border-ink-gray hover:scale-105 transition-all"
              >
                <Mail size={18} />
                <span>example@email.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-paper-300 text-ink-light hover:text-ink-dark hover:border-ink-gray hover:scale-105 transition-all"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center py-12">
            <blockquote className="font-serif text-xl text-ink-light italic max-w-2xl mx-auto">
              「落霞与孤鹜齐飞，秋水共长天一色」
            </blockquote>
            <p className="text-ink-light/60 text-sm mt-4">—— 王勃《滕王阁序》</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
