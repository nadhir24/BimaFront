export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rano Cake",
  description: "Make beautiful Cake Everyday.",
  navItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Katalog",
      href: "/katalog",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Tentang kami",
      href: "/tentangkami",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Belanja",
      href: "/Belanja",
    },

    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "tentang kami",
      href: "/Tentang-Kami",
    },
  ],
  footerItems: [
    {
      label: "tentang kami",
      href: "/Tentang-Kami",
    },
    {
      label: "Toko Kami",
      href: "/TokoKami",
    },
    {
      label: "Katalog",
      href: "/Katalog",
    },
    {
      label: "Belanja",
      href: "/Belanja",
    },
  ],
  links: {
    google: "https://github.com/nextui-org/nextui",
    whatsapp: "https://wa.me/081385642024",
  },
};
