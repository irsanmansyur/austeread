import React from "react";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children: string | JSX.Element | JSX.Element[];
};
export default function PublicLayout({ children, ...props }: Props) {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <div>
        <Navbar />
        <main {...props}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
