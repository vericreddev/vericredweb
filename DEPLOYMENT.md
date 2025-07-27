# 部署指南 / Deployment Guide

本项目已配置好部署到 Vercel 和 Cloudflare Pages 的相关文件。

## Vercel 部署

### 方法一：通过 Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

### 方法二：通过 GitHub 集成
1. 将代码推送到 GitHub 仓库
2. 在 [Vercel Dashboard](https://vercel.com/dashboard) 中导入项目
3. Vercel 会自动检测到这是一个 Vite 项目并配置构建设置
4. 部署完成后会自动生成域名

### 配置说明
- `vercel.json` 文件已配置好 SPA 路由重定向
- 包含安全头部设置
- 静态资源缓存优化

## Cloudflare Pages 部署

### 方法一：通过 Wrangler CLI
```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run build

# 部署
wrangler pages deploy dist
```

### 方法二：通过 Cloudflare Dashboard
1. 将代码推送到 GitHub 仓库
2. 在 [Cloudflare Pages](https://pages.cloudflare.com/) 中连接 GitHub
3. 选择仓库并配置构建设置：
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node.js 版本**: `18` 或更高
4. 部署完成后会自动生成域名

### 配置说明
- `public/_redirects` 文件已配置好 SPA 路由重定向
- 所有路由都会重定向到 `index.html`

## 构建命令

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## 环境变量

如果项目需要环境变量，请在对应平台的设置中添加：

### Vercel
- 在项目设置的 "Environment Variables" 中添加

### Cloudflare Pages
- 在项目设置的 "Environment variables" 中添加

## 自定义域名

两个平台都支持自定义域名：
- **Vercel**: 在项目设置的 "Domains" 中添加
- **Cloudflare Pages**: 在项目设置的 "Custom domains" 中添加

## 注意事项

1. 确保 `package.json` 中的构建脚本正确
2. 项目使用 Vite 构建，输出目录为 `dist`
3. 两个平台都会自动检测并使用正确的 Node.js 版本
4. 部署前建议先在本地运行 `npm run build` 确保构建成功