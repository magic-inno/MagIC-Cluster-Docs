import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MagIC Cluster Docs",
  description: "A Documentation for MagIC Cluster",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Slurm", link: "/slurm" },
      { text: "Database", link: "/database" },
      { text: "Pipeline", link: "/pipeline" },
      { text: "Software", link: "/software" },
      { text: "Hardware", link: "/hardware" },
      { text: "Service", link: "/service" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
})
