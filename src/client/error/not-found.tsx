import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="sm:bg-gray-200 py-10 sm:min-h-[70vh] flex items-center">
      <div className="bg-white mx-auto max-w-4xl flex gap-4 flex-col sm:flex-row space-y-7 p-2 py-10">
        <div className="header">
          <img src="/static/image/not-found.png" alt="" className="h-[339px] w-full" />
        </div>
        <div>
          <h1 className="text-5xl">Page not found</h1>
          <p>The page you were looking for could not be found. It might have been removed or did not exist in the first place</p>
          <div className="footer">
            <div className="action flex justify-between gap-3">
              <Link to={"/"} className="w-1/2 whitespace-nowrap py-3 text-sm border-2 border-dark font-garnet font-normal flex justify-center">
                GO TO HOME PAGE
              </Link>
              <button className="w-1/2 whitespace-nowrap py-3 text-sm bg-dark text-white font-garnet font-normal">CONTINUE SHOPPING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
