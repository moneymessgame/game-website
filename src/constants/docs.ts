import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "About",
      href: "/how-it-works",
    },
    {
      title: "WhitePaper",
      href: "/demo-imit",
    },
    {
      title: "Roadmap",
      href: "/early-stage",
    },
    {
      title: "Donate",
      href: "/test",
    },
  ],
  sidebarNav: [

  ],
}