// 配置文件 (.vitepress/config.js) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：
import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default {
  // 站点级选项
  lang: "en-US",
  title: "MagIC Cluster Docs",
  description: "To play ground with MagIC Cluster",
  base: "/",

  // https://vitepress.dev/reference/default-theme-config
  // 主题级选项
  // 通过 themeConfig 选项配置主题的行为
  themeConfig: {
    logo: "/magic_logo.png",

    // 导航菜单项的配置
    nav: [
      { text: "Home", link: "/docs/" },
      { text: "Slurm", link: "/docs/slurm" },
      { text: "Database", link: "/docs/database" },
      { text: "Pipeline", link: "/docs/pipeline" },
      { text: "Software", link: "/docs/software" },
      { text: "Hardware", link: "/docs/hardware" },
      { text: "Service", link: "/docs/service" },

      {
        text: "More",
        items: [
          { text: "Server Status", link: "/item-1" },
          { text: "Storage Status", link: "/item-3" },
          { text: "LLM on MagIC", link: "/item-3" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          { text: "Getting Started", link: "/docs/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/magic-inno" },
      { icon: "twitter", link: "https://x.com/magic_limited" },
      {
        icon: "linkedin",
        link: "https://hk.linkedin.com/company/microbiota-i-center-magic-limited",
      },
    ],

    footer: {
      message: "Magic is just science but we don't understand yet.",
      copyright: "© 2025 BY Microbiota I-Center.",
    },
  },
}

// 源文件
// .vitepress 目录之外的 Markdown 文件被视为源文件。
// VitePress 使用 基于文件的路由：每个 .md 文件将在相同的路径被编译成为 .html 文件
// 例如，index.md 将会被编译成 index.html，可以在生成的 VitePress 站点的根路径 / 进行访问。

// 项目根目录
// 项目根目录是 VitePress 将尝试寻找 .vitepress 特殊目录的地方。
// .vitepress 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。
// 当从命令行运行 vitepress dev 或 vitepress build 时，VitePress 将使用当前工作目录作为项目根目录。
// 要将子目录指定为根目录，需要将相对路径传递给命令。例如，如果 VitePress 项目位于 ./docs，应该运行 vitepress dev docs：
