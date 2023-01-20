import React from "react";
import logoWhite from "@assets/logo-white.png";
import iconFesbuk from "@assets/icons/facebook_white_ek2.png";
import iconInstagram from "@assets/icons/instagram_white_ek2.png";
import whatsappIcon from "@assets/icons/whatsapp_white_ek2.png";
import twitterIcon from "@assets/icons/twitter_white_ek2.png";
import emailIcon from "@assets/icons/mail_white_ek2.png";

export default function Footer() {
  return (
    <footer className="bg-black text-light py-12 font-PublicSansRegular">
      <div className="container px-2 sm:px-0">
        <div className="grid grid-cols-1 gap-10 sm:gap-20 sm:grid-cols-2">
          <div className="">
            <h6 className="text-uppercase fw-bold mb-4">
              <img src={logoWhite} />
            </h6>
            <p>
              Austeread is an online platform where <br /> readers find good
              ideas &amp; dynamic thinking. <br /> it is dedicated to spark
              powerful insights &amp; <br /> conversations.
            </p>
            <div className="flex gap-2 mt-2">
              <a
                className="me-4 text-reset pr-2"
                href="https://www.instagram.com/austeread/"
                target="blank"
              >
                <img src={iconInstagram} alt="Insagram" />
              </a>
              <a className="me-4 text-reset pr-2" target="blank">
                <img src={iconFesbuk} alt="Facebook" />
              </a>
              <a
                className="me-4 text-reset pr-2"
                href="https://www.twitter.com/austeread/"
                target="blank"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                className="me-4 text-reset pr-2"
                href="mailto:collab@austeread.com"
                target="blank"
              >
                <img src={emailIcon} alt="Mail" />
              </a>
              <a
                className="me-4 text-reset pr-2"
                href="http://wa.me/081224853230"
                target="blank"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row">
            <div className="sm:w-1/2">
              <h6 className="uppercase font-bold mb-4">
                <b>Link</b>
              </h6>
              <div className="flex flex-col gap-3 -ml-2 pr-4">
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  type="button"
                >
                  About
                </a>
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  type="button"
                >
                  Contact
                </a>
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  type="button"
                >
                  Advertising Opportunities
                </a>
              </div>
            </div>
            <div className="sm:w-1/2">
              <h6 className="uppercase font-bold mb-4">
                <b>See more articles</b>
              </h6>
              <div className="flex flex-col gap-3 -ml-2 pr-3">
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  href="/news-by-category/Economy"
                  type="button"
                >
                  Economy
                </a>
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  href="/news-by-category/Politics and Culture"
                  type="button"
                >
                  Politics and Culture
                </a>
                <a
                  className="cursor-pointer hover:bg-white/20 rounded px-2"
                  href="/news-by-category/Science and Tech"
                  type="button"
                >
                  Science and Tech
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center pt-12 -mb-6 text-muted footer-credit  text-xs sm:text-base"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 austeread. All rights reserved. Use of this site constitutes
          acceptance of our User Agreement and Privacy <br />
          Policy and Cookie Statement and Your Indonesia Privacy Rights.
        </div>
      </div>
    </footer>
  );
}
