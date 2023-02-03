import { articleDetailLoader } from "@client/article/article-details-loader";
import ArticlesByCategoryPage from "@client/article/articles-by-categori-page";
import LoginPage from "@client/auth/login-page";
import RegisterPage from "@client/auth/register-page";
import BackComponent from "@client/components/backComponent";
import NotFound from "@client/error/not-found";
import { homeLoader } from "@client/home/home-loader";
import AuthLayout from "@client/layouts/auth-layout";
import PublicLayout from "@client/layouts/public-layout";
import { publicLayoutLoader } from "@client/layouts/public-layout-loader";
import SearchPage from "@client/search/search-page";
import axios from "axios";
import { useRouteError } from "react-router-dom";
import ArticleDetailsPage from "../article/article-details-page";
import IndexPage from "../home/index-page";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://149.102.136.93:3023/api/";
export const routes = [
  {
    path: "/",
    loader: publicLayoutLoader,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        loader: homeLoader,
        element: <IndexPage />,
      },
      {
        path: "/news/:idArticle",
        loader: articleDetailLoader,
        element: <ArticleDetailsPage />,
      },
      {
        path: "/news-by-category/:categoriName/:tgl?",
        element: <ArticlesByCategoryPage />,
      },
      {
        path: "/search/:query?",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
];

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div className="flex w-screen h-screen justify-center items-center p-4">
      <div className="border shadow-md rounded p-4 sm:max-w-md bg-white">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
