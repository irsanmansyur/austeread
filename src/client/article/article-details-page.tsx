import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import useData from "../commons/data";
import { urlAsset } from "../commons/helpers";
import PublicLayout from "../layouts/public-layout";
import "./style.css";
export default function ArticleDetailsPage() {
  const { idArticle } = useParams<"idArticle">();
  const { data: article, get: getInit } = useData<AppInterface.Article>();
  const { data: latestArticles, loading: loadLatest, get } = useData<AppInterface.Article[]>([]);
  useEffect(() => {
    get("getlatestNews");
    getInit("getNews/" + idArticle);
    return () => {};
  }, []);

  return (
    <PublicLayout>
      {article.id && (
        <div className="container flex flex-col sm:flex-row sm:py-6 gap-10 sm:px-0 px-2">
          <div className="sm:w-4/6">
            <div className="article-page">
              <div className="article-page-header">
                <div className="-mx-2 sm:hidden mb-2">
                  <img className="sm:hidden" src={urlAsset("img/upload/" + article.img)} />
                </div>
                <small className="text-sm font-[400] italic">{`${article.tbl_news_category.name} | ${article.createdAt}`}</small>
                <h1 className="text-4xl">{article.title}</h1>
                <small className="text-xs text-gray-700 font-[400]">Words by {`${article.tbl_user.first_name}  ${article.tbl_user.last_name}`}</small>
              </div>
              <div className="article-page-body font-PublicSansLight text-sm leading-7 pt-10  text-gray-600">
                <div dangerouslySetInnerHTML={{ __html: article.desc }} />
              </div>
            </div>
          </div>
          <div className="sm:w-2/6">
            <img className="img-fluid hidden sm:block" src={urlAsset("img/upload/" + article.img)} />
            <div className="latest-article py-10">
              <h3 className="text-2xl text-center pb-4">The Latest</h3>
              <ul className="flex gap-3 flex-col">
                {!loadLatest &&
                  latestArticles.map((articleLates, i) => {
                    return (
                      <li key={i} className="">
                        <div className="mb-2">
                          <small className="relative font-PublicSansBoldItalic after:absolute after:-bottom-2 after:bg-primary after:left-0  after:w-10/12 after:h-[2px]">
                            {`${articleLates.tbl_news_category.name} | ${articleLates.createdAt}`}
                          </small>
                        </div>
                        <Link to={`/news/${articleLates.id}`} preventScrollReset={true}>
                          <h6 className="text-[16px] leading-5 text-dark font-PublicSansLight">{articleLates.title}</h6>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </PublicLayout>
  );
}
