# 个人作品集网站开发计划

> 参考站点：[qzq.at](https://www.qzq.at/) — 先复刻其整体风格与板块结构，再替换为自己的内容。

## 项目概述

- **项目名称**: my-portfolio
- **项目类型**: 个人作品集 / 数字名片网站（单页滚动 + 子页面）
- **技术栈**: Next.js 14 + React 18 + TypeScript 5 + Tailwind CSS 3 + Framer Motion 11
- **部署平台**: GitHub Pages（通过 GitHub Actions 自动部署）
- **目标用户**: 访客、潜在雇主、志同道合的朋友

---

## 一、站点板块结构（对标 qzq.at）

### 导航栏 (Header)
- 顶部固定，半透明毛玻璃效果（backdrop-blur）
- 左侧：Logo / 姓名
- 中间：导航链接 — Home / Favorites / Code / Game / Music / Books
- 右侧：社交图标（GitHub、Twitter/X、Bilibili、Instagram 等）
- 移动端：汉堡菜单

### 1. Hero 首屏
- **姓名**大标题居中
- **所在城市**（如：Suzhou, China）
- **多身份标签**：以胶囊/标签形式展示多个身份（如：Web Developer / Game Developer / Digital Nomad / Trader 等）
- **圆形装饰元素**：大圆（hero-circle）+ 小圆（white-circle）作为视觉锚点，使用 CSS/SVG 绘制
- **公司/技术 Logo**：展示相关技术或公司图标
- **社交链接图标行**

### 2. Experience 工作经历
- 时间线或卡片式布局
- 公司名称 + Logo + 职位
- 项目描述（简洁 1-2 行）
- 技术栈标签

### 3. Skills 技能展示
- 技能分类列表
- **进度条**可视化熟练度（如：JavaScript/TypeScript 90%、React/Next.js 85%、Python 70% …）
- 简洁的图标 + 文字

### 4. Code 项目作品
- 卡片式布局，2-3 列网格
- 每张卡片：缩略图 / 截图 + 项目名 + 一句话描述 + 技术栈标签
- 跳转链接：GitHub 仓库 / 在线 Demo
- Hover 交互效果（放大、阴影、边框高亮）

### 5. Favorites 统计记录（豆瓣风格）
- **电影**：已看数量 + 近期观影海报
- **书籍**：已读数量 + 近期阅读封面
- **游戏**：已玩数量 + 近期游戏封面
- 数据来源方案（按优先级）：
  1. **静态 JSON 文件**（最简单，手动更新）— 推荐初期使用
  2. **豆瓣非官方 API / 爬虫**（需后端代理或定时脚本）— 后续扩展
  3. **NeoDB API**（开源替代，API 友好）— 备选
- 每类展示：数量统计大字 + 最近记录的封面网格

### 6. Influencer 社交数据（可选）
- 各平台粉丝/关注数展示
- 卡片式：平台图标 + 账号名 + 粉丝数 + 播放量/互动量
- 数据来源方案：
  1. **静态 JSON**（手动更新）— 推荐初期
  2. **各平台公开 API**（B站等有公开接口）— 后续扩展

### 7. Game 游戏板块（可选）
- 游戏开发作品展示（截图 + 描述 + 下载/试玩链接）
- 游戏评论 / 游戏设计理论笔记

### 8. Music 音乐板块（可选）
- 设备/乐器展示（图片 + 名称 + 简短描述）
- 或嵌入网易云/Spotify 播放列表
- 或展示自己的音乐作品

### 9. Travel 旅行足迹
- SVG 世界地图 / 中国地图
- 去过的城市/国家高亮标注
- 当前所在城市标记
- 实现方案：
  - 推荐使用 **react-simple-maps**（轻量、SSG 友好）
  - 或纯 SVG 手动标注
  - 避免 Leaflet（需要动态加载 tile，不适合纯静态导出）

### 10. Footer 页脚
- "Let's collaborate" 合作邀请文案
- 联系方式：邮箱 + 社交链接
- 版权信息 + 站点技术栈说明
- "Built with Next.js & Tailwind CSS" 等

---

## 二、UI/UX 设计

### 配色方案（浅色主题 — 对标 qzq.at）
- **背景色**: `#ffffff` 或 `#fafafa`
- **次级背景**: `#f5f5f5` 或 `#f0f0f0`（卡片背景）
- **主文字**: `#171717` 或 `#1a1a1a`
- **次级文字**: `#6b7280` 或 `#9ca3af`
- **强调色**: `#3b82f6`（蓝色）— 链接、按钮、高亮
- **装饰圆色**: `#e5e7eb` 或带透明度的浅灰 — 用于 hero-circle 等
- **渐变**: 微妙的灰白渐变作为区块分隔

### 暗色模式（可选扩展）
- 使用 `next-themes` 或 Tailwind `dark:` 类
- 背景: `#0a0a0a`，文字: `#ffffff`，卡片: `#1a1a1a`
- 初期不实现，后续作为锦上添花

### 视觉特征（qzq.at 风格）
- **圆形装饰**：Hero 区域的大圆 + 小圆，使用 `border-radius: 50%` + 浅色填充 + 模糊阴影
- **大量留白**：区块之间充分留白，避免拥挤
- **卡片圆角**：`rounded-2xl` 或 `rounded-3xl`，配合微妙阴影
- **毛玻璃效果**：导航栏 `backdrop-blur-md bg-white/80`

### 字体
- **标题**: Inter 或 系统字体栈 (`-apple-system, BlinkMacSystemFont, 'Segoe UI', ...`)
- **正文**: Inter 或系统字体
- **等宽**: JetBrains Mono（代码片段）
- 通过 `next/font` 加载 Google Fonts（Inter），支持字体子集优化

### 动画效果（Framer Motion）
- **滚动进入动画**：各区块在进入视口时 fade-in + slide-up
- **Hover 交互**：卡片悬停放大（`scale(1.02)`）、阴影增强
- **页面过渡**：使用 `AnimatePresence` 实现平滑切换
- **数字滚动**：统计数字使用 count-up 动画
- **导航栏**：滚动时背景透明度变化

---

## 三、技术实现

### 核心依赖
```json
{
  "next": "^14.2",
  "react": "^18.3",
  "react-dom": "^18.3",
  "typescript": "^5.4",
  "tailwindcss": "^3.4",
  "framer-motion": "^11.0",
  "react-simple-maps": "^3.0",
  "react-icons": "^5.0",
  "next-themes": "^0.3"
}
```

### 项目结构
```
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署
├── public/
│   ├── images/
│   │   ├── avatar.webp         # 头像
│   │   ├── projects/           # 项目截图
│   │   └── logos/              # 公司/技术 Logo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 根布局（字体、全局样式）
│   │   ├── page.tsx            # 首页（组合所有 Section）
│   │   └── blog/               # 博客页面（后续扩展）
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # 导航栏
│   │   │   └── Footer.tsx      # 页脚
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # 首屏（姓名 + 身份标签 + 圆形装饰）
│   │   │   ├── Experience.tsx  # 工作经历
│   │   │   ├── Skills.tsx      # 技能进度条
│   │   │   ├── Projects.tsx    # 项目作品卡片
│   │   │   ├── Favorites.tsx   # 电影/书籍/游戏统计
│   │   │   ├── Influencer.tsx  # 社交数据（可选）
│   │   │   ├── Travel.tsx      # 旅行足迹地图
│   │   │   └── Contact.tsx     # 联系/合作
│   │   └── ui/
│   │       ├── SectionTitle.tsx    # 区块标题组件
│   │       ├── SkillBar.tsx        # 技能进度条
│   │       ├── ProjectCard.tsx     # 项目卡片
│   │       ├── StatCard.tsx        # 统计数字卡片
│   │       └── ScrollReveal.tsx    # 滚动动画包装器
│   ├── data/
│   │   ├── personal.ts        # 个人信息（姓名、身份、城市、社交链接）
│   │   ├── experience.ts      # 工作经历数据
│   │   ├── skills.ts          # 技能列表 + 熟练度
│   │   ├── projects.ts        # 项目数据
│   │   └── favorites.ts       # 电影/书籍/游戏数据
│   ├── lib/
│   │   └── utils.ts           # 工具函数
│   └── styles/
│       └── globals.css         # Tailwind 指令 + 全局样式
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── PLAN.md
```

### 数据管理策略
所有展示数据统一放在 `src/data/` 目录下，使用 TypeScript 文件（`.ts`）导出类型安全的数据对象。

示例 `src/data/personal.ts`：
```typescript
export const personalInfo = {
  name: "Your Name",
  city: "Your City, China",
  roles: ["Web Developer", "Game Developer", "Creator"],
  socials: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    bilibili: "https://space.bilibili.com/youruid",
  },
};
```

好处：修改数据不需要动组件代码，类型安全，构建时静态嵌入。

---

## 四、GitHub Pages 部署配置

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 静态导出（Next.js 14 方式，不再需要 next export 命令）
  images: {
    unoptimized: true,     // GitHub Pages 不支持 Next.js Image Optimization
  },
  // 如果仓库名不是 <username>.github.io，需要设置 basePath
  // basePath: '/my-portfolio',
  // 如果使用自定义域名或 <username>.github.io 仓库，则不需要 basePath
};

module.exports = nextConfig;
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

> 注意：Next.js 14 设置 `output: 'export'` 后，`next build` 会自动生成 `out/` 目录，**不需要** `next export` 命令（已废弃）。

### .github/workflows/deploy.yml（使用 GitHub 官方 Pages Action）
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:       # 支持手动触发

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### GitHub 仓库设置
1. 进入仓库 → Settings → Pages
2. **Source** 选择 **GitHub Actions**（不是 "Deploy from a branch"）
3. 推送代码到 `main` 分支即自动部署

### 部署方案选择
| 方案 | 域名 | basePath |
|------|------|----------|
| 仓库名为 `<username>.github.io` | `https://<username>.github.io` | 不需要 |
| 仓库名为 `my-portfolio` | `https://<username>.github.io/my-portfolio` | 需要设置 `basePath: '/my-portfolio'` |
| 自定义域名（如 `yourname.dev`） | 自定义 | 不需要 |

**推荐**：如果这是你的主站，将仓库命名为 `<username>.github.io`，这样访问地址最干净。

---

## 五、开发阶段

### Phase 1: 项目初始化（Day 1）
1. 使用 `npx create-next-app@latest` 初始化项目（TypeScript + Tailwind + App Router）
2. 安装额外依赖：`framer-motion`, `react-icons`, `react-simple-maps`
3. 配置 `next.config.js`（`output: 'export'`）
4. 搭建基础项目结构（目录、数据文件占位）
5. 配置全局样式、字体（Inter via `next/font`）
6. 实现浅色主题基础变量

### Phase 2: 核心布局 + Hero（Day 2-3）
1. 实现 Header 导航（毛玻璃效果 + 响应式 + 移动端菜单）
2. 实现 Hero 首屏（圆形装饰 + 姓名 + 多身份标签 + 社交链接）
3. 实现 Footer 页脚
4. 实现 ScrollReveal 滚动动画包装组件
5. 实现 SectionTitle 区块标题通用组件

### Phase 3: 内容板块（Day 4-6）
1. 实现 Experience 工作经历区块
2. 实现 Skills 技能进度条区块
3. 实现 Projects 项目卡片区块
4. 实现 Favorites 统计记录区块（电影/书/游戏）
5. 实现 Travel 地图足迹区块
6. 填充 `src/data/` 中的占位数据

### Phase 4: 动画与打磨（Day 7-8）
1. 为所有区块添加滚动进入动画
2. 卡片 Hover 交互效果
3. 统计数字 count-up 动画
4. 导航栏滚动响应（透明度变化、active 高亮）
5. 响应式布局调试（Mobile / Tablet / Desktop）

### Phase 5: 部署与上线（Day 9）
1. 创建 GitHub 仓库
2. 配置 `.github/workflows/deploy.yml`
3. 推送代码，验证自动部署
4. 检查线上效果，修复问题
5. （可选）配置自定义域名

### Phase 6: 后续扩展（按需）
1. 博客系统（MDX / Markdown）
2. 暗色模式切换
3. Influencer 社交数据板块
4. Game / Music 板块
5. 豆瓣/NeoDB API 集成
6. SEO 优化（meta tags、Open Graph、sitemap）
7. 分析工具接入（Umami / Plausible）

---

## 六、注意事项

1. **静态导出兼容性**：使用 `output: 'export'` 后，不能使用 Next.js 的服务端功能（API Routes、Server Actions、动态路由的 SSR）。所有数据必须在构建时确定。
2. **图片优化**：GitHub Pages 不支持 Next.js Image Optimization，必须设置 `images: { unoptimized: true }`。建议图片使用 WebP 格式并预先压缩。
3. **地图组件**：避免使用 Leaflet（依赖 runtime tile 加载），推荐 `react-simple-maps`（纯 SVG，SSG 友好）。
4. **数据管理**：初期所有数据写在 `src/data/*.ts` 中，后续可迁移到 CMS 或 API。
5. **字体加载**：使用 `next/font` 自动优化字体，避免 FOUT（Flash of Unstyled Text）。
6. **basePath 影响**：如果设置了 `basePath`，所有内部链接和静态资源路径都需要考虑前缀，建议使用 Next.js 的 `Link` 组件和 `Image` 组件自动处理。

---

**创建日期**: 2026-03-02
**最后更新**: 2026-03-02
