import React, { useRef } from "react";
import ScrollToTop from "../commons/helpers/scrolltop";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children: string | JSX.Element | JSX.Element[];
};
export default function PublicLayout({ children, ...props }: Props) {
  const parentMain = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden">
      <ScrollToTop main={parentMain.current} />
      <div ref={parentMain} className="flex justify-between flex-col h-screen overflow-y-auto overflow-x-hidden scroll-smooth" scroll-region="true">
        <div>
          <Navbar />
          <main {...props}>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
