import { FreeContent } from "@/types/freeContent";
import { DashboardConfig } from "~/types/site";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}



export const freeContent = {
  categories: [
    {
      title: "Repertórios",
      href: "/docs/repertorios",
      description: "Descrição para repertórios",
      categoryItem: [
        {
          title: "Card 1",
          href: "/docs/repertorios/card1",
          description: "Descrição do Card 1",
        },
        {
          title: "Card 2",
          href: "/docs/repertorios/card2",
          description: "Descrição do Card 2",
        },
      ],
    },
    // Adicione outras categorias conforme necessário
  ],
}