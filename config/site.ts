export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rano Cake",
  description: "Make beautiful Cake Everyday.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
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
      label: "About",
      href: "/about",
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
  links: {
    google: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
