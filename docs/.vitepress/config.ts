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
      "/docs/slurm/": { base: "/docs/slurm/", items: sidebarSlurm() },
      "/docs/database/": { base: "/docs/database/", items: sidebarDatabase() },
      "/docs/pipeline/": { base: "/docs/pipeline/", items: sidebarPipeline() },
      "/docs/hardware/": { base: "/docs/hardware/", items: sidebarHardware() },
      "/docs/service/": { base: "docs/service", items: sidebarService() },
    },
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Home",
      link: "/docs/guide/what_is_magic_cluster",
      activeMatch: "/docs/guide/",
    },
    { text: "Linux", link: "/docs/linux/what_is_linux", activeMatch: "/docs/linux/" },
    { text: "Slurm", link: "/docs/slurm/what_is_slurm", activeMatch: "/docs/slurm/" },
    { text: "Database", link: "/docs/database", activeMatch: "/docs/database/" },
    { text: "Pipeline", link: "/docs/pipeline", activeMatch: "/docs/pipeline/" },
    { text: "Hardware", link: "/docs/hardware", activeMatch: "/docs/hardware/" },
    { text: "Service", link: "/docs/service", activeMatch: "/docs/service/" },
    {
      text: "More",
      items: [
        { text: "Server Status", link: "/monitor/server_status" },
        { text: "Storage Status", link: "/monitor/storage_status" },
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
        { text: "What is MagIC-Cluster", link: "what_is_magic_cluster" },
        { text: "Getting started", link: "getting_started" },
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
        { text: "What is GNU/Linux System?", link: "what_is_linux" },
        { text: "Shell", link: "shell" },
        { text: "SSH", link: "ssh" },
        { text: "Tools", link: "tools" },
      ],
    },
    {
      text: "Bioinformatics commandline",
      collapsed: false,
      items: [{ text: "Bioinformatics CLI", link: "bio_cli" }],
    },
  ]
}

function sidebarSlurm(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Slurm",
      collapsed: false,
      items: [
        { text: "What is SLURM System?", link: "what_is_slurm" },
        { text: "Partition", link: "slurm_partition" },
        { text: "Jobs", link: "slurm_jobs" },
      ],
    },
    {
      text: "Lustre",
      collapsed: false,
      items: [
        { text: "What is Lustre System?", link: "what_is_lustre" },
        { text: "Quota", link: "lustre_quota" },
      ],
    },
  ]
}

function sidebarDatabase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Taxonomic profiling",
      collapsed: false,
      items: [
        { text: "MetaPhlAn", link: "tpdb_metaphlan" },
        { text: "Kraken", link: "tpdb_kraken" },
        { text: "Phanta", link: "tpdb_phanta" },
      ],
    },
    {
      text: "Functional profiling",
      collapsed: false,
      items: [{ text: "Humann", link: "fpdb_humann" }],
    },
    {
      text: "RNA seq",
      collapsed: false,
      items: [
        { text: "Human", link: "rna_seq_human" },
        { text: "Mouse", link: "rna_seq_mouse" },
      ],
    },
    {
      text: "Genome catalogue",
      collapsed: false,
      items: [
        { text: "Human Gut", link: "gc_human_gut" },
        { text: "HUman Oral", link: "gc_human_oral" },
        { text: "HUman Skin", link: "gc_human_skin" },
        { text: "HUman Vaginal", link: "gc_human_vaginal" },
        { text: "Mouse Gut", link: "gc_mouse_gut" },
      ],
    },
  ]
}

function sidebarPipeline(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Amplicon Profiling",
      collapsed: false,
      items: [{ text: "qiimepi", link: "qiimepi" }],
    },
    {
      text: "Metagenomics Profiling",
      collapsed: false,
      items: [{ text: "quantpi", link: "quantpi" }],
    },
    {
      text: "Assembly and Binning",
      collapsed: false,
      items: [{ text: "metapi", link: "metapi" }],
    },
    {
      text: "RNA seq",
      collapsed: false,
      items: [{ text: "rnapi", link: "rnapi" }],
    },
  ]
}

function sidebarHardware(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Virtual Machine",
      collapsed: false,
      items: [{ text: "Team Server", link: "team_server" }],
    },
    {
      text: "HPC ",
      collapsed: false,
      items: [
        { text: "CPU", link: "hpc_cpu" },
        { text: "GPU", link: "hpc_gpu" },
      ],
    },
  ]
}

function sidebarService(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Core Service",
      collapsed: false,
      items: [
        { text: "Sequencing data demultiplex", link: "sd_demultiplex" },
        { text: "Sequencing data archive", link: "sd_archive" },
      ],
    },
    {
      text: "Report Service",
      collapsed: false,
      items: [
        { text: "Long Covid", link: "report_lc" },
        { text: "Gut Infant", link: "report_gi" },
        { text: "Gut Health", link: "report_gh" },
        { text: "Gut Promise", link: "report_gp" },
      ],
    },
  ]
}
