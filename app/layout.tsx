import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Link from "next/link";
import {
  GoogleMapsIcon,
  HeartFilledIcon,
  Logo,
  RanoIcon,
  WhatsappIcon,
} from "@/components/icons";
import { title } from "@/components/primitives";
import PricingPage from "./pricing/page";
import { useRouter } from "next/router";
import Navy from "@/components/navbar";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navy />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="container mx-auto max-w-7xl pt-16 px-6">
              <Divider className="mb-4" />
              <div className="grid grid-cols-4 gap-4 mt-1">
                <div>
                  <RanoIcon />
                  <div className="grid grid-cols-10 gap-0">
                    <Link
                      href={siteConfig.links.google}
                      aria-label="Google"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="mt-1"
                        src="https://developers.google.com/static/maps/images/maps-icon.svg"
                        alt="Google Maps Logo"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <Link
                      href={siteConfig.links.whatsapp}
                      aria-label="Whatsapp"
                    >
                      <WhatsappIcon />
                    </Link>
                  </div>
                </div>
                <div>
                  <ul>
                    <h1 className={title({ size: "sm" })}>Bantuan</h1>

                    {siteConfig.footerItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h1 className={title({ size: "sm" })}>Jam Kerja</h1>
                  <ul>
                    <ul>
                      <li>Senin - Jumat : 8:00 WIB - 5:00 WIB</li>
                      <li>
                        Sabtu<span className="margin-left: 30px;">:</span> 8:00
                        WIB - 12:00 WIB
                      </li>
                      <li>
                        Minggu<span className="margin-left: 27px;">:</span>{" "}
                        tutup
                      </li>
                    </ul>
                  </ul>
                </div>
                <div>
                  <h1 className={title({ size: "sm" })}>Metode Pembayaran</h1>
                </div>
              </div>
              <Divider className="mt-4" />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
