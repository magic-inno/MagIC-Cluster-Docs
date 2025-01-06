// 配置文件 (.vitepress/config.js) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：
import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default {
  // 站点级选项
  lang: "en-US",
  title: "MagIC Cluster Docs",
  description: "To play ground with MagIC Cluster",
  base: "/",
  themeConfig: {
    logo: "/magic_logo.png",
    // https://vitepress.dev/reference/default-theme-config
    // 主题级选项
    // 通过 themeConfig 选项配置主题的行为
    nav: [
      { text: "Home", link: "/docs/" },
      { text: "Slurm", link: "/docs/slurm" },
      { text: "Database", link: "/docs/database" },
      { text: "Pipeline", link: "/docs/pipeline" },
      { text: "Software", link: "/docs/software" },
      { text: "Hardware", link: "/docs/hardware" },
      { text: "Service", link: "/docs/service" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/docs/markdown-examples" },
          { text: "Runtime API Examples", link: "/docs/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "magic", link: "https://www.magic-inno.com/" }],
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
