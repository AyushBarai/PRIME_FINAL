import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Locations } from "@/components/Locations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prime",
  description: "Prime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar className="z-10" />
        <div> {children}</div>
        <Locations />
        <Footer />
      </body>
    </html>
  );
}
