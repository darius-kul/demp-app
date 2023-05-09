import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopHeader from "../components/ShopHeader";
import "../globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <ShopHeader />
        <main className="min-h-[calc(100vh-4.0625rem-3.25rem)]  flex align-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
