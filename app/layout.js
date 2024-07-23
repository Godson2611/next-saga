import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Storeprovider from "@/redux/Storeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next js Blog",
  description: "This project for Next-Js notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Storeprovider>
          <Header />
          {children}
          <Footer />
        </Storeprovider>
      </body>
    </html>
  );
}
