import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  style: ['normal', 'italic'], 
})


export const metadata = {
  title: "professor",
  description: "fullstack next js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 antialiased`}
      >
        <Navbar/>
      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
