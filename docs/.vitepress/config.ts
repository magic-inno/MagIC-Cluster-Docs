import { defineConfig, type DefaultTheme } from "vitepress"

export default {
  lang: "en-US",
  title: "MagIC Cluster Docs",
  description: "To play ground with MagIC Cluster",
  base: "/",

  themeConfig: {
    logo: "/logo.png",

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/magic-inno" },
      { icon: "twitter", link: "https://x.com/magic_limited" },
      {
        icon: "linkedin",
        link: "https://hk.linkedin.com/company/microbiota-i-center-magic-limited",
      },
    ],

    footer: {
      message: "Magic is just science but we don't understand yet",
      copyright:
        '© 2025 BY <a href="https://www.magic-inno.com">Microbiota I-Center</a>',
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    nav: nav(),

    sidebar: {
      "/docs/guide/": { base: "/docs/guide/", items: sidebarGuide() },
      "/docs/linux/": { base: "/docs/linux/", items: sidebarLinux() },
      "/slurm/": { base: "/docs/slurm/", items: sidebarSlurm() },
      "/database/": { base: "/docs/database/" },
      "/pipeline/": { base: "/docs/pipeline/" },
      "/software/": { base: "/docs/software/" },
      "/hardware/": { base: "/docs/hardware/" },
      service: { base: "docs/service" },
    },
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Home",
      link: "/docs/guide/what-is-magic-cluster",
      activeMatch: "/docs/guide/",
    },
    { text: "Linux", link: "/docs/linux/what-is-linux", activeMatch: "/docs/linux/" },
    { text: "Slurm", link: "/docs/slurm/what-is-slurm", activeMatch: "/docs/slurm/" },
    { text: "Database", link: "/docs/database", activeMatch: "/docs/database/" },
    { text: "Pipeline", link: "/docs/pipeline", activeMatch: "/docs/pipeline/" },
    { text: "Software", link: "/docs/software", activeMatch: "/docs/software/" },
    { text: "Hardware", link: "/docs/hardware", activeMatch: "/docs/hardware/" },
    { text: "Service", link: "/docs/service", activeMatch: "/docs/service/" },
    {
      text: "More",
      items: [
        { text: "Server Status", link: "/monitor/server-status" },
        { text: "Storage Status", link: "/monitor/storage-status" },
        { text: "LLM on MagIC", link: "/llm" },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is MagIC-Cluster", link: "what-is-magic-cluster" },
        { text: "Getting started", link: "getting-started" },
      ],
    },
  ]
}

function sidebarLinux(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is GNU/Linux System?", link: "what-is-linux" },
        { text: "Shell", link: "shell" },
        { text: "SSH", link: "ssh" },
        { text: "Tools", link: "tools" },
      ],
    },
    {
      text: "Bioinformatics commandline",
      collapsed: false,
      items: [{ text: "Bioinformatics CLI", link: "bio-cli" }],
    },
  ]
}

function sidebarSlurm(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Slurm",
      collapsed: false,
      items: [
        { text: "What is SLURM System?", link: "what-is-slurm" },
        { text: "Partition", link: "slurm-partition" },
        { text: "Jobs", link: "slurm-jobs" },
      ],
    },
    {
      text: "Lustre",
      collapsed: false,
      items: [
        { text: "What is Lustre System?", link: "what-is-lustre" },
        { text: "Quota", link: "lustre-quota" },
      ],
    },
  ]
}
