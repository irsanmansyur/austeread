import searchIcon from "@assets/icon_search.png";
import profileIcon from "@assets/icon_profile.png";
import NavbarMenu from "./navbar-menu";
import "./style.css";
export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex justify-between items-center container p-2 sm:py-6 sm:px-0 ">
        <a className="sm:w-1/3" href="/">
          <img className="navbar-brand" id="navbar-logo" src={"/static/logo.austeread.gif"} width="45px" />
        </a>
        <a className="navbar-brand" href="/">
          <span className="font-GarnettLight text-[29px]">auste</span>
          <span className="font-GarnettMedium text-[29px]">read</span>
        </a>
        <div className="flex justify-end items-center sm:w-1/3">
          <div className="hidden" id="searchForm">
            <input className="form-control PublicSans-regular" id="searchbox" type="search" placeholder="Search" data-toggle="dropdown" />
            <ul className="dropdown-menu" id="searchboxcontent" role="menu" aria-labelledby="menu1" style={{ maxWidth: 400 }} />
          </div>
          <div className="hidden sm:flex">
            <a className="pr-2" id="search" href="/search">
              <img src={searchIcon} />
            </a>
            <a className="mr-2 ml-2" id="user" href="/login">
              <img src={profileIcon} />
            </a>
          </div>
          <div className="vl" />
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}
