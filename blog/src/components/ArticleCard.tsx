import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage?: string;
  index: number;
}

const ArticleCard = ({ id, title, excerpt, date, category, coverImage, index }: ArticleCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Link to={`/blog/${id}`}>
        <article className="xuan-paper rounded-xl overflow-hidden border border-paper-300 card-hover cursor-pointer h-full">
          {/* Cover Image */}
          {coverImage && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper-50 via-transparent to-transparent" />
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {/* Category & Date */}
            <div className="flex items-center gap-4 text-sm text-ink-light mb-3">
              <span className="flex items-center gap-1">
                <Tag size={14} strokeWidth={1.5} />
                {category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} strokeWidth={1.5} />
                {date}
              </span>
            </div>
            
            {/* Title */}
            <h2 className="font-calligraphy text-xl text-ink-dark mb-3 group-hover:text-ink-gray transition-colors leading-snug">
              {title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-ink-light text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            
            {/* Decorative Line */}
            <div className="mt-4 pt-4 border-t border-paper-200">
              <span className="text-accent-ochre text-sm font-medium group-hover:text-accent-seal transition-colors">
                阅读全文 →
              </span>
            </div>
          </div>
          
          {/* Ink brush decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-ink-gray/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8" />
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ArticleCard;
