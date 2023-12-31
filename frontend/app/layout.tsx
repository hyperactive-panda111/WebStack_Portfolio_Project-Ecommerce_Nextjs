import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/redux/Providers";
import Cart from "@/components/Cart/Cart";
import Toast from "@/components/Toast/Toast";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-monserrat",
});

export const metadata: Metadata = {
  title: "Ecommerce Nextjs",
  description: "Online Gaming Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Toast />
        <Providers>
          <NextAuthProvider>
          <Cart />
        <Header/>
        <main className="bg-primary-gradient min-h-screen">{children}</main>
        <Footer />
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
