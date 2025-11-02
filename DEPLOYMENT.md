# 快捷魔方官网 - Vercel 部署指南

## 🚀 部署到 Vercel

### 方法一：通过 Vercel CLI（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```
   
   首次部署时会询问：
   - Set up and deploy? → `Y`
   - Which scope? → 选择你的账户
   - Link to existing project? → `N`
   - What's your project's name? → `kuaijie-mofang-website`
   - In which directory is your code located? → `./`

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

### 方法二：通过 GitHub 集成

1. **上传到 GitHub**
   - 在 GitHub 创建新仓库
   - 将项目文件上传到仓库

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账户登录
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

### 方法三：直接拖拽部署

1. 访问 [vercel.com](https://vercel.com)
2. 将整个项目文件夹拖拽到 Vercel 页面
3. 等待自动部署完成

## 📁 项目结构

```
快捷魔方产品官网/
├── index.html          # 主页面（已重命名）
├── styles.css          # 样式文件
├── script.js           # JavaScript 文件
├── vercel.json         # Vercel 配置
├── package.json        # 项目配置
└── DEPLOYMENT.md       # 部署说明
```

## ⚙️ 配置说明

### vercel.json 配置
- 静态文件构建配置
- 路由重定向规则
- 安全头设置
- 缓存优化

### 自动 SSL 证书
Vercel 会自动为你的域名提供免费的 SSL 证书，无需手动配置。

## 🌐 自定义域名

1. **在 Vercel 控制台**
   - 进入项目设置
   - 点击 "Domains"
   - 添加你的域名

2. **DNS 配置**
   - 添加 CNAME 记录指向 `cname.vercel-dns.com`
   - 或添加 A 记录指向 Vercel 提供的 IP

3. **SSL 证书**
   - Vercel 会自动为自定义域名申请 SSL 证书
   - 通常在几分钟内完成

## 🔧 环境变量（如需要）

在 Vercel 控制台的 Settings → Environment Variables 中添加：
- `NODE_ENV=production`
- 其他需要的环境变量

## 📊 性能优化

项目已包含以下优化：
- 静态资源缓存（1年）
- 安全头配置
- 压缩优化
- CDN 全球加速

## 🛠️ 本地开发

```bash
# 启动本地服务器
npm run dev

# 或使用 Python
python -m http.server 8000
```

## 📞 技术支持

如遇到部署问题，请检查：
1. 文件路径是否正确
2. vercel.json 配置是否有效
3. 域名 DNS 设置是否正确

---

**部署完成后，你的网站将获得：**
- ✅ 免费 SSL 证书（HTTPS）
- ✅ 全球 CDN 加速
- ✅ 自动部署
- ✅ 99.99% 可用性保证