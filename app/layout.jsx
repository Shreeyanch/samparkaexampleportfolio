import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Sweta Thapa | Portfolio",
  description: "Portfolio website for Sweta Thapa, computing student and full stack developer intern.",
  icons: {
    icon: "/assets/images/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
