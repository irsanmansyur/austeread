import NavbarMenu from "./navbar-menu";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="border-b">
      <div className="flex justify-between items-center container p-2 sm:py-6 sm:px-0 ">
        <div className="sm:w-1/3">
          {pathname == "/" ? (
            <Link to={"#"}>
              <img className="navbar-brand" id="navbar-logo" src={"/static/icons/logo.austeread.gif"} width="45px" />
            </Link>
          ) : (
            <button className="outline-none" onClick={(e) => navigate(-1)}>
              <img className="navbar-brand" id="navbar-logo" src={"/static/icons/icon_back.png"} width="45px" />
            </button>
          )}
        </div>
        <Link className="navbar-brand" to="/">
          <span className="font-GarnettLight text-[29px]">auste</span>
          <span className="font-GarnettMedium text-[29px]">read</span>
        </Link>
        <div className="flex justify-end items-center sm:w-1/3">
          <div className="hidden" id="searchForm">
            <input className="form-control PublicSans-regular" id="searchbox" type="search" placeholder="Search" data-toggle="dropdown" />
            <ul className="dropdown-menu" id="searchboxcontent" role="menu" aria-labelledby="menu1" style={{ maxWidth: 400 }} />
          </div>
          <div className="hidden sm:flex">
            <a className="pr-2" id="search" href="/search">
              <img src={"/static/icons/icon_search.png"} />
            </a>
            <a className="mr-2 ml-2" id="user" href="/login">
              <img src={"/static/icons/icon_profile.png"} />
            </a>
          </div>
          <div className="vl" />
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}
