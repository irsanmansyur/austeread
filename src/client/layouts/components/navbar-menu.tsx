import menuIcon from "@assets/icon_menu.png";
import { useEffect, useRef, useState } from "react";

export default function NavbarMenu() {
  const [show, setShow] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  return (
    <>
      <a id="showFilePanel" href="#">
        <img src={menuIcon} onClick={(e) => setShow(!show)} width="41px" />
      </a>
      <div className={`absolute transform duration-300 ease-in-out inset-0 h-full z-50 ${!show ? "translate-x-full" : ""}`}>
        <div className="h-full bg-white/40 backdrop-blur flex justify-end">
          <div ref={sidebarRef} className="bg-black text-light min-w-[300px] h-full flex flex-col justify-between px-4">
            <div>
              <div className="border-b border-light py-3 px-2 flex items-center justify-between">
                <a href="#">
                  <img src="/static/logo-white.png" width="40px" />
                </a>
                <a href="#">
                  <img src="/static/icons/icon_close_white.png" onClick={(e) => setShow(false)} width="40px" />
                </a>
              </div>
              <ul className="navbar-menu PublicSansBlack text-[28px] font-bold my-7 px-2 flex flex-col gap-3">
                <li className="active relative">All</li>
                <li className="">
                  <a href="/news-by-category/Economy">Economy</a>
                </li>
                <li className="">
                  <a href="/news-by-category/Politics and Culture">Politics and Culture</a>
                </li>
                <li className="">
                  <a href="/news-by-category/Science and Tech"> Science and Tech</a>
                </li>
                <li className="">
                  <a href="https://austeread.com/">Shop</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-footer-section mb-4">
              <div className="flex gap-2 mt-2 justify-center border-t border-light pt-4">
                <a className="me-4 text-reset pr-2" href="https://www.instagram.com/austeread/" target="blank">
                  <img src={"/static/icons/instagram_white_ek2.png"} alt="Insagram" />
                </a>
                <a className="me-4 text-reset pr-2" target="blank">
                  <img src={"/static/icons/facebook_white_ek2.png"} alt="Facebook" />
                </a>
                <a className="me-4 text-reset pr-2" href="https://www.twitter.com/austeread/" target="blank">
                  <img src={"/static/icons/twitter_white_ek2.png"} alt="Twitter" />
                </a>
                <a className="me-4 text-reset pr-2" href="mailto:collab@austeread.com" target="blank">
                  <img src={"/static/icons/mail_white_ek2.png"} alt="Mail" />
                </a>
                <a className="me-4 text-reset pr-2" href="http://wa.me/081224853230" target="blank">
                  <img src={"/static/icons/whatsapp_white_ek2.png"} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
