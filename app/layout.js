import "./globals.css";
import "@css/bootstrap.min.css"
import "@css/font-awesome.css"
import "@css/animate.css"
import "@css/magnific-popup.css"
import "@css/meanmenu.css"
import "@css/swiper-bundle.min.css"
import "@css/nice-select.css"
import "@css/main.css"
import 'rc-slider/assets/index.css';

import Preloader from "@/layouts/Preloader";
export const metadata = {
  title: "ClassicFry",
  description: "ClassicFry Restaurant in UK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
