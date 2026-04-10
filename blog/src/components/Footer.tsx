const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-paper-200 mt-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-paper-300" />
          <div className="seal-stamp w-10 h-10">
            <span className="font-calligraphy text-accent-seal text-xs rotate-[-3deg]">墨</span>
          </div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-paper-300" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Quote */}
          <p className="font-serif text-ink-light italic mb-6 text-lg">
            「落霞与孤鹜齐飞，秋水共长天一色」
          </p>
          
          {/* Links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="#"
              className="text-ink-light hover:text-ink-gray transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-paper-300">|</span>
            <a
              href="#"
              className="text-ink-light hover:text-ink-gray transition-colors text-sm"
            >
              RSS
            </a>
            <span className="text-paper-300">|</span>
            <a
              href="#"
              className="text-ink-light hover:text-ink-gray transition-colors text-sm"
            >
              邮箱
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-ink-light text-sm">
            © {new Date().getFullYear()} 墨韵斋 · 用文字书写时光
          </p>
          
          {/* ICP */}
          <p className="text-ink-light/60 text-xs mt-2">
            皖ICP备xxxxxxxx号
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/4 w-64 h-48 ink-blur">
          <svg viewBox="0 0 200 150" className="w-full h-full text-ink-gray/20">
            <path
              d="M0 150 Q50 100 100 120 T200 80 V150 H0"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-1/4 w-48 h-32 ink-blur">
          <svg viewBox="0 0 150 120" className="w-full h-full text-ink-gray/15">
            <path
              d="M0 120 Q40 80 80 100 T150 60 V120 H0"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
