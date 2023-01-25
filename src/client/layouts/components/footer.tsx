import FooterCategoriesLink from "./footer-categories";
import FooterAbout from "./footer-about";
import FooterContact from "./footer-contact";
import FooterAdvertising from "./footer-advertising";
import { useRecoilValue } from "recoil";
import { configsAtom } from "@client/commons/data/layoutAtom";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  const configs = useRecoilValue(configsAtom);

  return (
    <footer className="bg-black text-light py-12 font-PublicSansRegular">
      <div className="container px-2 sm:px-0">
        <div className="grid grid-cols-1 gap-10 sm:gap-20 sm:grid-cols-2">
          <div className="">
            <h6 className="text-uppercase fw-bold mb-4">
              <img src={"/static/icons/logo-white.png"} />
            </h6>
            <p>
              Austeread is an online platform where <br /> readers find good ideas &amp; dynamic thinking. <br /> it is dedicated to spark powerful insights &amp; <br />
              conversations.
            </p>
            <div className="flex gap-2 mt-2">
              <a className="me-4 text-reset pr-2" href={configs?.instagram} target="blank">
                <img src={"/static/icons/instagram_white_ek2.png"} alt="Insagram" />
              </a>
              <a className="me-4 text-reset pr-2" target="blank">
                <img src={"/static/icons/facebook_white_ek2.png"} alt="Facebook" />
              </a>
              <a className="me-4 text-reset pr-2" href={configs?.twitter} target="blank">
                <img src={"/static/icons/twitter_white_ek2.png"} alt="Twitter" />
              </a>
              <a className="me-4 text-reset pr-2" href={`mailto:${configs?.email}`} target="blank">
                <img src={"/static/icons/mail_white_ek2.png"} alt="Mail" />
              </a>
              <a className="me-4 text-reset pr-2" href={`http://wa.me/${configs?.whatsapp}`} target="blank">
                <img src={"/static/icons/whatsapp_white_ek2.png"} alt="WhatsApp" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row">
            <div className="sm:w-1/2">
              <h6 className="uppercase font-bold mb-4">
                <b>Link</b>
              </h6>
              <div className="flex flex-col gap-3 -ml-2 pr-4">
                <FooterAbout />
                <FooterContact />
                <FooterAdvertising />
              </div>
            </div>
            <div className="sm:w-1/2">
              <FooterCategoriesLink />
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
