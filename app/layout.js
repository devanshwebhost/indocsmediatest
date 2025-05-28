import { Poppins, Playfair_Display, Open_Sans, Lato, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


// Set up each font with a CSS variable
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata = {
  title: "Indocs Media | Love to create",
  description: "Love to create",
   icons: {
    icon: "/assets/logo.png", // path from public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans&display=swap" rel="stylesheet" />
       <body
        className={`${poppins.variable} ${playfair.variable} ${openSans.variable} ${lato.variable} ${cormorant.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
