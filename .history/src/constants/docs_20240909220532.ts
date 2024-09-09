import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "WhitePaper",
      href: "/whitepaper",
    },
    {
      title: "Roadmap",
      href: "/roadmap",
    },
    {
      title: "Donate",
      href: "/donate",
    },
  ],
  sidebarNav: [

  ],
}