import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PromoRibbon from "./PromoRibbon";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <PromoRibbon />
    <Navbar />
    <main
      className="flex-1"
      style={{ paddingTop: "calc(72px + var(--ribbon-h, 0px))" }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
