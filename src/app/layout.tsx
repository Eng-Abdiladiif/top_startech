import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../src/components/Navbar";
import { ThemeProvider } from "../../src/components/Themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Start Tech",
  description:
    "Partner with Somalia's premier business consultancy. We blend traditional values with modern strategies to scale your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* navba */}
         <div className="">
           <Navbar />
         </div>

          <div className="pt-20 ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
