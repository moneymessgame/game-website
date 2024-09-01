import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "How it works?",
      href: "/how-it-works",
    },
    {
      title: "Demo",
      href: "/demo-imit",
    },
    {
      title: "Early-stage investments",
      href: "/early-stage",
    },
    {
      title: "Test",
      href: "/test",
    },
  ],
  sidebarNav: [

  ],
}