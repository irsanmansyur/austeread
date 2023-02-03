import { userAtom } from "@client/commons/data/user-atom";
import { useEffect, useRef, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
export default function NavbarAccount() {
  const user = useRecoilValue(userAtom);
  return (
    <>
      {!user ? (
        <Link to={"/login"} className="font-bold">
          Sign in
        </Link>
      ) : (
        <DropdownAcount />
      )}
    </>
  );
}

const DropdownAcount = () => {
  const htmlRef = useRef<HTMLDivElement>(null);
  const [dropdwonActive, setDropdwonActive] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (htmlRef.current && !htmlRef.current.contains(event.target)) {
        setDropdwonActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const DropDown = () => {
    return (
      <div className="position absolute mt-3 left-1/2 -translate-x-1/2 border bg-white shadow z-10 rounded">
        <div className="flex flex-col">
          <Link to={"."} className="hover:bg-gray-200 py-2 px-4 text-sm whitespace-nowrap">
            Manage Profile
          </Link>
          <Link to={"d"} className="bg-gray-normal  py-2 px-4 text-sm whitespace-nowrap">
            Manage Newsletter
          </Link>
          <hr className="my-2" />
          <Link to={"dd"} className="hover:bg-gray-200 py-2 px-4 text-sm">
            Sign Out
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="relative font-normal" ref={htmlRef}>
      <div className="flex  items-center gap-3 cursor-pointer" onClick={() => setDropdwonActive(!dropdwonActive)}>
        <span>Account</span>
        <BsArrowDownShort className={`${dropdwonActive ? "rotate-180" : "rotate-0"}`} />
      </div>
      {dropdwonActive && <DropDown />}
    </div>
  );
};
