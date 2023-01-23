import { Route, Routes } from "react-router-dom";
import ArticleDetailsPage from "../article/article-details-page";
import IndexPage from "../home/index-page";
export default function IndexRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/news/:idArticle" element={<ArticleDetailsPage />} />
      </Routes>
    </>
  );
}
