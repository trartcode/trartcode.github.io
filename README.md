# 个人博客

一个简洁优雅的个人博客系统，基于 React + TypeScript + Tailwind CSS 构建。

## 特性

- **Markdown 文章支持** - 使用 Markdown 编写内容，自动解析 Front Matter 元数据
- **分类筛选** - 支持按文章分类筛选
- **年份筛选** - 支持按发布年份筛选
- **搜索功能** - 支持标题和摘要搜索，带清除按钮
- **分页浏览** - 每页显示 6 篇文章，支持翻页
- **互动功能** - 文章页支持喜欢、收藏、分享（复制链接）
- **响应式设计** - 适配桌面端和移动端
- **localStorage 持久化** - 喜欢和收藏数据保存在本地

## 技术栈

- **前端框架**: React 19
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **路由**: React Router DOM
- **Markdown**: react-markdown + remark-gfm
- **文章解析**: gray-matter
- **图标**: Lucide React
- **动画**: Framer Motion

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 添加新文章

在 `src/articles/` 目录下创建新的 `.md` 文件：

```markdown
---
title: 文章标题
date: 2025-04-10
category: 读书
author: 作者名
coverImage: /path/to/image.jpg
excerpt: 文章摘要
---

这里是文章内容...
```

Front Matter 字段说明：

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 文章标题 |
| `date` | 是 | 发布日期，格式：YYYY-MM-DD |
| `category` | 是 | 文章分类 |
| `author` | 否 | 作者名，默认：匿名 |
| `coverImage` | 否 | 封面图片路径 |
| `excerpt` | 否 | 文章摘要 |

## 项目结构

```
src/
├── articles/          # Markdown 文章
├── components/        # React 组件
│   ├── ArticleCard.tsx
│   ├── Navigation.tsx
│   └── ...
├── pages/             # 页面组件
│   ├── Home.tsx
│   ├── Blog.tsx
│   └── ArticleDetail.tsx
├── utils/             # 工具函数
│   └── articles.ts    # 文章数据处理
├── App.tsx
├── main.tsx
└── index.css
```

## 许可证

MIT
